#!/usr/bin/env node

/**
 * Image to WebP Converter Script
 * 
 * This script converts all PNG and JPG images in the assets/images directory to WebP format.
 * 
 * Requirements:
 * - Node.js installed
 * - sharp package: npm install sharp
 * 
 * Usage:
 *   node convert-to-webp.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('Error: sharp package not found.');
    console.error('Please install it by running: npm install sharp');
    process.exit(1);
}

const imagesDir = path.join(__dirname, 'assets', 'images');

// Get all image files
function getImageFiles(dir) {
    const files = fs.readdirSync(dir);
    return files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.png', '.jpg', '.jpeg'].includes(ext);
    });
}

// Convert image to WebP
async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);
        console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Failed to convert ${inputPath}:`, error.message);
        return false;
    }
}

// Main conversion function
async function main() {
    console.log('Starting WebP conversion...\n');
    
    if (!fs.existsSync(imagesDir)) {
        console.error(`Error: Images directory not found: ${imagesDir}`);
        process.exit(1);
    }
    
    const imageFiles = getImageFiles(imagesDir);
    
    if (imageFiles.length === 0) {
        console.log('No PNG or JPG images found to convert.');
        return;
    }
    
    console.log(`Found ${imageFiles.length} image(s) to convert:\n`);
    
    let successCount = 0;
    let skipCount = 0;
    
    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        const baseName = path.basename(file, path.extname(file));
        const outputPath = path.join(imagesDir, `${baseName}.webp`);
        
        // Skip if WebP already exists
        if (fs.existsSync(outputPath)) {
            console.log(`⊘ Skipped (WebP exists): ${file}`);
            skipCount++;
            continue;
        }
        
        const success = await convertToWebP(inputPath, outputPath);
        if (success) {
            successCount++;
        }
    }
    
    console.log(`\n✓ Conversion complete!`);
    console.log(`  Successfully converted: ${successCount}`);
    console.log(`  Skipped: ${skipCount}`);
    console.log(`\nNext steps:`);
    console.log(`  1. Review the converted WebP images`);
    console.log(`  2. Run the website and verify images display correctly`);
    console.log(`  3. Consider removing original PNG/JPG files if WebP support is sufficient`);
}

main().catch(console.error);
