const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Define directories
const templatesDir = path.join(__dirname, 'views'); // Folder with EJS templates
const outputDir = path.join(__dirname, 'docs'); // Folder for static HTML output
const staticAssetsDir = path.join(__dirname, 'public'); // Folder for static files

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Copy static assets (CSS, JS, Images) to the docs folder
const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach((childItem) => {
            copyRecursiveSync(path.join(src, childItem), path.join(dest, childItem));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};
copyRecursiveSync(staticAssetsDir, outputDir);

// Render each EJS file to HTML
fs.readdir(templatesDir, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if (path.extname(file) === '.ejs') {
            const filePath = path.join(templatesDir, file);
            const outputFileName = path.basename(file, '.ejs') + '.html';
            const outputFilePath = path.join(outputDir, outputFileName);

            ejs.renderFile(filePath, {}, (err, str) => {
                if (err) throw err;

                fs.writeFileSync(outputFilePath, str);
                console.log(`Rendered ${file} to ${outputFilePath}`);
            });
        }
    });
});

