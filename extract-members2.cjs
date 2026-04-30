const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const aboutDir = path.join(__dirname, 'public', 'about');
const outPath = path.join(aboutDir, 'members.json');

function extractTextFromDocx(filePath) {
  try {
    const zip = new AdmZip(filePath);
    const contentXml = zip.readAsText('word/document.xml');
    
    // Quick regex to extract text between <w:t>...</w:t> tags
    const textRegex = /<w:t[^>]*>(.*?)<\/w:t>/g;
    let text = '';
    let match;
    while ((match = textRegex.exec(contentXml)) !== null) {
      if (match[1]) {
        text += match[1];
      }
    }
    
    // In docx, paragraph break is <w:p>. Let's do a better regex
    // Replace <w:p ...> with \n
    let cleanText = contentXml.replace(/<w:p[^>]*>/g, '\n');
    // Strip other xml tags
    cleanText = cleanText.replace(/<[^>]+>/g, '');
    
    return cleanText.trim();
  } catch (err) {
    console.error("Error reading docx:", filePath, err);
    return "";
  }
}

async function extract() {
  const members = [];
  const folders = fs.readdirSync(aboutDir).filter(f => {
    const fullPath = path.join(aboutDir, f);
    return fs.statSync(fullPath).isDirectory();
  });
  
  for (const folder of folders) {
    const memberName = folder;
    const infoDir = path.join(aboutDir, folder, '成员简介');
    const imgDir = path.join(aboutDir, folder, '成员图片');
    
    let description = '';
    if (fs.existsSync(infoDir)) {
      const docxFiles = fs.readdirSync(infoDir).filter(f => f.endsWith('.docx'));
      if (docxFiles.length > 0) {
        const docxPath = path.join(infoDir, docxFiles[0]);
        description = extractTextFromDocx(docxPath);
        
        // Let's decode html entities if any (optional, docx uses entities sometimes)
      }
    }
    
    let image = '';
    if (fs.existsSync(imgDir)) {
      const imgFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
      if (imgFiles.length > 0) {
        image = `/about/${folder}/成员图片/${imgFiles[0]}`;
      }
    }
    
    members.push({
      name: memberName,
      description,
      image
    });
  }
  
  fs.writeFileSync(outPath, JSON.stringify(members, null, 2), 'utf8');
  console.log('Members extracted to', outPath);
}

extract().catch(console.error);
