const fs = require('fs').promises;
const readDirFiles = async () => {
    try {
        const result = await fs.readdir('../');
        if(result.file){
            console.log('File:', result);
        }
        else{
            console.log('Directory:', result);
        }        
    }
    catch(err) {
        console.error(err);
    }
}
readDirFiles();