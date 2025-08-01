import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/',
    build: {
        outDir: '../docs',
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
                const assetsDir = path.join(docsDir, 'assets');

                if (fs.existsSync(assetsDir)) {
                    const files = fs.readdirSync(assetsDir);
                    const cssFile = files.find(f => f.includes('index') && f.endsWith('.css')) ||
                        files.find(f => f.includes('style') && f.endsWith('.css'));

                    if (cssFile) {
                        fs.copyFileSync(
                            path.join(assetsDir, cssFile),
                            path.join(docsDir, 'style.css')
                        );
                        console.log(`Copied ${cssFile} to style.css`);
                    }
                }
            }
        }
    ]
})
