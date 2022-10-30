const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

// File destination.txt will be created or overwritten by default.
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

try {
    // `who-to-greet` input defined in action metadata file
    const sourceFile = core.getInput('source');
    const targetFile = core.getInput('target');
    console.log(`Copying "${sourceFile}" to "${targetFile}`);
    fs.copyFileSync(sourceFile, targetFile);
} catch (error) {
    core.setFailed(error.message);
}