const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const aboutDir = path.join(__dirname, 'public', 'about');
const outPath = path.join(aboutDir, 'members.json');

function findFilesRecursively(dir, condition) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFilesRecursively(filePath, condition));
    } else {
      if (condition(file)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

async function extract() {
  const members = [];
  const folders = fs.readdirSync(aboutDir).filter(f => {
    const fullPath = path.join(aboutDir, f);
    return fs.statSync(fullPath).isDirectory();
  });
  
  for (const folder of folders) {
    const memberName = folder;
    const memberDir = path.join(aboutDir, folder);
    
    let description = '';
    const docxFiles = findFilesRecursively(memberDir, name => name.endsWith('.docx') && !name.startsWith('~'));
    if (docxFiles.length > 0) {
      const docxPath = docxFiles[0];
      try {
        const result = await mammoth.extractRawText({path: docxPath});
        description = result.value.trim();
      } catch (e) {
        console.error('Error reading DOCX for', memberName, e);
      }
    }
    
    let image = '';
    const imgFiles = findFilesRecursively(memberDir, name => /\.(jpg|jpeg|png)$/i.test(name));
    if (imgFiles.length > 0) {
      // make it relative to root
      const fullPath = imgFiles[0];
      let relPath = fullPath.substring(fullPath.indexOf(`${path.sep}about${path.sep}`));
      // normalize separators for web
      relPath = relPath.split(path.sep).join('/');
      image = relPath;
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
