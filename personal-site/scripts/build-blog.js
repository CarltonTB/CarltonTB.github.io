import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '..', 'src', 'posts');
const OUTPUT_DIR = path.join(__dirname, '..', 'blog');
const TEMPLATE_PATH = path.join(__dirname, '..', 'src', 'blog-template.html');

const REQUIRED_FIELDS = ['title', 'date', 'description'];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Get all markdown files
const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md') && file !== 'example.md');

const posts = [];
let hasErrors = false;

files.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse frontmatter
    const { data, content } = matter(fileContent);

    // Validate required frontmatter fields
    const missing = REQUIRED_FIELDS.filter(field => !data[field]);
    if (missing.length > 0) {
        console.error(`Error: ${file} is missing required frontmatter fields: ${missing.join(', ')}`);
        hasErrors = true;
        return;
    }

    // Generate slug from filename
    const slug = file.replace('.md', '');

    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Normalize date to YYYY-MM-DD string (gray-matter parses YAML dates into Date objects)
    const date = data.date instanceof Date
        ? data.date.toISOString().split('T')[0]
        : String(data.date);
    const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Replace placeholders in template
    let html = template
        .replace(/{{title}}/g, data.title)
        .replace(/{{date}}/g, date)
        .replace(/{{formattedDate}}/g, formattedDate)
        .replace(/{{content}}/g, htmlContent);

    // Write HTML file
    const outputPath = path.join(OUTPUT_DIR, `${slug}.html`);
    fs.writeFileSync(outputPath, html);

    // Add to posts array for index
    posts.push({
        title: data.title,
        slug: slug,
        date: date,
        formattedDate: formattedDate,
        description: data.description,
        path: `/blog/${slug}.html`
    });

    console.log(`Generated: ${outputPath}`);
});

if (hasErrors) {
    process.exit(1);
}

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write posts manifest
const manifestPath = path.join(OUTPUT_DIR, 'posts-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(posts, null, 2));

// Generate posts index page
const postListHTML = posts.length === 0
    ? '<p>No posts yet.</p>'
    : posts.map(post => `
            <article class="post-preview">
                <h2><a href="${post.path}">${post.title}</a></h2>
                <time datetime="${post.date}">${post.formattedDate}</time>
                <p>${post.description}</p>
            </article>`).join('');

const postsPageHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="/style.css">
        <link rel="icon" type="image/png" sizes="32x32" href="/chart.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Blog Posts - Carlton Brady</title>
    </head>
    <body class="bg-main">
        <h1 class="name-title">Carlton Brady</h1>
        <nav class="navbar">
            <ul>
                <li><a href="/">About</a></li>
                <li>|</li>
                <li><a href="/blog/posts.html">Blog</a></li>
                <li>|</li>
                <li><a href="https://github.com/CarltonTB">GitHub</a></li>
                <li>|</li>
                <li><a href="https://www.linkedin.com/in/carltontb/">Linkedin</a></li>
            </ul>
        </nav>
        <main>
            <div id="posts-list">${postListHTML}
            </div>
        </main>
    </body>
</html>
`;

const postsPagePath = path.join(OUTPUT_DIR, 'posts.html');
fs.writeFileSync(postsPagePath, postsPageHTML);

console.log(`\nGenerated ${posts.length} blog posts`);
console.log(`Posts index written to: ${postsPagePath}`);
console.log(`Posts manifest written to: ${manifestPath}`);
