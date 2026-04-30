const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const aboutDir = path.join(__dirname, 'public', 'about');
const outPath = path.join(aboutDir, 'members.json');

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
        const result = await mammoth.extractRawText({path: docxPath});
        description = result.value.trim();
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
