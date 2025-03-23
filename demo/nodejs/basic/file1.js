const fs = require('fs').promises;

const readDirFiles = async () => {
    try {
        // Adjust the path to point to the 'demo' directory
        const result = await fs.readdir('../../javascript');
        console.log('Contents of demo directory:', result);
    } catch (err) {
        console.error('Error reading directory:', err);
    }
};

readDirFiles();