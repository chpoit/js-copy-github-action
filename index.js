const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const sourceFile = core.getInput('source');
    const targetFile = core.getInput('target');
    console.log(`Copying "${sourceFile}" to "${targetFile}`);
    fs.copyFileSync(sourceFile, targetFile);
} catch (error) {
    core.setFailed(error.message);
}