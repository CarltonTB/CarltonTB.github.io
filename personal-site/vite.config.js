import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/',
    build: {
        outDir: '../docs',
        target: 'esnext',
        rollupOptions: {
            input: {
                main: 'index.html'
            }
        }
    },
    publicDir: 'public',
    server: {
        // Serve blog pages during development
        middlewareMode: false,
        fs: {
            strict: false
        }
    },
    // Plugin to handle style.css for blog pages
    plugins: [
        {
            name: 'blog-style-plugin',
            configureServer(server) {
                // Serve style.css from src/style.css during development
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/style.css') {
                        const stylePath = path.join(__dirname, 'src/style.css');
                        const content = fs.readFileSync(stylePath, 'utf-8');
                        res.setHeader('Content-Type', 'text/css');
                        res.end(content);
                        return;
                    }
                    next();
                });
            },
            closeBundle() {
                // Copy built CSS to /style.css after build
                const docsDir = path.resolve(__dirname, '../docs');
                const indexPath = path.join(docsDir, 'index.html');

                // Read index.html to find the correct CSS file
                if (fs.existsSync(indexPath)) {
                    const indexContent = fs.readFileSync(indexPath, 'utf-8');
                    const cssMatch = indexContent.match(/href="\/assets\/(.*?\.css)"/);

                    if (cssMatch && cssMatch[1]) {
                        const cssFile = cssMatch[1];
                        const sourcePath = path.join(docsDir, 'assets', cssFile);
                        const destPath = path.join(docsDir, 'style.css');

                        if (fs.existsSync(sourcePath)) {
                            fs.copyFileSync(sourcePath, destPath);
                            console.log(`Copied ${cssFile} to style.css`);
                        }
                    }
                }
            }
        }
    ]
})
