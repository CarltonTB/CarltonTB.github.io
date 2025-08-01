import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '..', 'src', 'posts');
const OUTPUT_DIR = path.join(__dirname, '..', 'blog');
const TEMPLATE_PATH = path.join(__dirname, '..', 'src', 'blog-template.html');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Get all markdown files
const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md') && file !== 'example.md');

const posts = [];

files.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse frontmatter
    const { data, content } = matter(fileContent);

    // Generate slug from filename
    const slug = file.replace('.md', '');

    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Format date if it exists
    const date = data.date || new Date().toISOString().split('T')[0];
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Replace placeholders in template
    let html = template
        .replace(/{{title}}/g, data.title || slug.replace(/-/g, ' '))
        .replace(/{{date}}/g, date)
        .replace(/{{formattedDate}}/g, formattedDate)
        .replace(/{{content}}/g, htmlContent);

    // Write HTML file
    const outputPath = path.join(OUTPUT_DIR, `${slug}.html`);
    fs.writeFileSync(outputPath, html);

    // Add to posts array for index
    posts.push({
        title: data.title || slug.replace(/-/g, ' '),
        slug: slug,
        date: date,
        description: data.description || '',
        path: `/blog/${slug}.html`
    });

    console.log(`Generated: ${outputPath}`);
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write posts manifest
const manifestPath = path.join(__dirname, '..', 'blog', 'posts-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(posts, null, 2));

console.log(`\nGenerated ${posts.length} blog posts`);
console.log(`Posts manifest written to: ${manifestPath}`);
