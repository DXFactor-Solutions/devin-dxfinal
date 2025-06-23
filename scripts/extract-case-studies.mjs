import fs from 'fs/promises';
import path from 'path';
import mammoth from 'mammoth';

const caseStudiesDir = path.resolve(process.cwd(), 'public/CASEStudies');
const outputDir = path.resolve(process.cwd(), 'public/data');
const outputFile = path.join(outputDir, 'case-studies-content.json');

// A simple function to generate a slug from a filename
const generateSlug = (filename) => {
  return filename
    .replace(/\.docx$/, '')
    .replace(/Case Study - /i, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

async function extractCaseStudies() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(caseStudiesDir);
    const docxFiles = files.filter(file => file.endsWith('.docx'));

    const allContent = {};

    for (const file of docxFiles) {
      const filePath = path.join(caseStudiesDir, file);
      const slug = generateSlug(file);
      
      try {
        const result = await mammoth.convertToHtml({ path: filePath });
        const textResult = await mammoth.extractRawText({ path: filePath });
        
        allContent[slug] = {
          html: result.value,
          text: textResult.value,
          wordCount: textResult.value.split(/\s+/).length,
          extractedAt: new Date().toISOString(),
        };
        console.log(`Successfully extracted: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    await fs.writeFile(outputFile, JSON.stringify(allContent, null, 2));
    console.log(`\nSuccessfully created case studies content file at: ${outputFile}`);

  } catch (error) {
    console.error('An error occurred during case study extraction:', error);
  }
}

extractCaseStudies(); 