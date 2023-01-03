import { getInput } from '@actions/core';
import { execSync } from 'child_process';
import { exit } from 'process';

async function run() {
    const retryCountInput = getInput('retry-count');
    var retryCount = 5;
    if (Number.isInteger(retryCountInput))  {
        retryCount = Number.parseInt(retryCountInput);
    }

    const command = getInput('command');

    for (var i = 0; i < retryCount; i++) {
        try {
            execSync(command, { stdio: 'inherit' });
            console.info("command executed successfully, no need to retry")
        } catch (error) {
            console.error(error)
            if (i == retryCount - 1) {
                console.error("failed to execute command after " + retryCount + " retries")
                exit(1)
            }
            console.info("failed to execute command, retrying with attempt " + i+1+ "/"+retryCount + "...")
        }
    }
}

run();