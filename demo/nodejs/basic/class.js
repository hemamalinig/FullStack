// // callback
// const fs = require('fs')

// fs.readdir('../',(err,files) => {
//     if(err){
//         console.log('Error reading dir / file - ', err);
//     }
//     else{
//         console.log('Files ',files)
//     }
// })



// // promises
// const fs = require('fs').promises
// // import { promises as fs } from 'fs'

// fs.readdir('../')
// .then((files) => {
//     files.forEach( file => {
//         console.log(file)
//     })
// })
// .catch((problem) => {
//     console.log(problem)
// })




// // async await
// const fs = require('fs').promises;
// const readDirFile= async () => {
//     try{
//         const files = await fs.readdir('../')
//         console.log(files)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// readDirFile()


// // async await
// const fs = require('fs').promises;
// const readDirFile= async () => {
//     try{
//         // const files = await fs.readdir('../basic')
//         const result = await fs.stat('../')
//         if(result.isFile()){
//             console.log('File')
//         }
//         else if (result.isDirectory()){
//             console.log('Directory')
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// readDirFile()




// async await with stat
const fs = require('fs').promises;
const path = require('path');
const readDirFile= async () => {
    try{
        const files = await fs.readdir('../')
        files.forEach( async (file) => {
            const filepath = path.join('../',file)
            const stats = await fs.stat(filepath)
            const type = stats.isFile() ? "File" : stats.isDirectory() ? "Directory" : ""
            console.log(file + " is a " + type)
        })
    }
    catch(err){
        console.log(err)
    }
}
readDirFile()