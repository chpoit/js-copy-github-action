const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');
const copy = require('copy');

try {
    const sourceFile = core.getInput('source');
    const targetFile = core.getInput('target');
    console.log(`Copying "${sourceFile}" to "${targetFile}"`);

    copy(sourceFile, targetFile, (err, files) => {
        if (err) {
            core.setFailed(err);
        }
        console.log(files);
    });
} catch (error) {
    core.setFailed(error.message);
}
