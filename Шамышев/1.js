const fs = require("fs").promises;
const fsConstants = require("fs").constants;
const path = require("path");

const folderName = "werlamma";
const fileName_1 = "file1.txt";
const fileName_2 = "file2.docx";


const folderPath = path.join(__dirname, folderName);
const filePath_1 = path.join(__dirname, folderName, fileName_1);
const filePath_2 = path.join(__dirname, folderName, fileName_2);

const checkWriteAccess = async (entityPath) => {
    try {
    await fs.access(entityPath, fsConstants.F_OK);
    return true;
    } catch (err) {
    return false
    }
   }
   (async () => {
    const folderExists = await checkWriteAccess(folderName)
    if (!folderExists) {
    await fs.mkdir(folderPath);
    }

    const fileExists_1 = await checkWriteAccess(filePath_1);
    if (!fileExists_1) {
    await fs.writeFile(filePath_1, "TIME LOG\n", { encoding: 'utf8', flag: 'w+' });
    }
    await fs.appendFile(filePath_1, `A record has been added at ${
   new Date()}.\n`);
   })()