const fs = require('fs');

function cleanFile(filePath) {
    try {
        // Read the content of the file
        const content = fs.readFileSync(filePath, 'utf-8');

        // Remove extra spaces using regular expression
        const cleanedContent = content.replace(/\s+/g, ' ');

        // Write the cleaned content back to the same file
        fs.writeFileSync(filePath, cleanedContent);

        console.log("File cleaned successfully!");
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Replace 'your_file.txt' with the path to your actual file
const filename = "your_file.txt";
cleanFile(filename);
