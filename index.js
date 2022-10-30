const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');
const copy = require('copy');

try {
    // `who-to-greet` input defined in action metadata file
    const sourceFile = core.getInput('source');
    const targetFile = core.getInput('target');
    console.log(`Copying "${sourceFile}" to "${targetFile}`);

    // fs.copyFileSync(sourceFile, targetFile);

    copy(sourceFile, targetFile, (err, files) => {
        if (err) {
            core.setFailed(err);
        }
    });
} catch (error) {
    core.setFailed(error.message);
}