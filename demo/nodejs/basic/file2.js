const fs = require('fs').promises;
const path = require('path'); // Import the 'path' module to handle paths

const readDirFiles = async () => {
    try {
        const directoryPath = '../../javascript'; // Path to the target directory
        const files = await fs.readdir(directoryPath); // Read the directory contents

        files.forEach(async (file) => {
            const fullPath = path.join(directoryPath, file); // Combine directory path with file name
            const stats = await fs.stat(fullPath); // Get stats for the full path

            if (stats.isFile()) {
                console.log(file ,'is a File', fullPath);
            } else if (stats.isDirectory()) {
                console.log(file ,'Directory:', fullPath);
            }
        });
    } catch (err) {
        console.error('Error reading directory:', err);
    }
};
readDirFiles();