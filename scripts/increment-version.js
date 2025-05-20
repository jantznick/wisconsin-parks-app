const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

const program = new Command();

program
  .option('--major', 'Increment major version')
  .option('--minor', 'Increment minor version')
  .option('--patch', 'Increment patch version')
  .option('--nopatch', 'Do not increment patch version');

program.parse(process.argv);

const options = program.opts();

const appJsonPath = path.join(__dirname, '../app.json');

if (options.nopatch) {
	console.log('Not patching build version. Exiting.');
	process.exit(0);
}

fs.readFile(appJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading app.json:', err);
    process.exit(1);
  }

  try {
    const appJson = JSON.parse(data);
    const buildNumber = appJson.expo.ios.buildNumber;

    if (!buildNumber) {
      console.error('buildNumber not found in app.json');
      process.exit(1);
    }

    const versionParts = buildNumber.split('.').map(Number);
    let [major, minor, patch] = versionParts;

    if (options.major || process.env.MAJOR) {
      major++;
      minor = 0;
      patch = 0;
    } else if (options.minor || process.env.MINOR) {
      minor++;
      patch = 0;
    } else {
      patch++;
    }

    const newBuildNumber = `${major}.${minor}.${patch}`;
    appJson.expo.ios.buildNumber = newBuildNumber;
	appJson.expo.version = newBuildNumber;

    const updatedJson = JSON.stringify(appJson, null, 2);

    fs.writeFile(appJsonPath, updatedJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing app.json:', err);
        process.exit(1);
      }

      console.log(`buildNumber updated to ${newBuildNumber}`);
    });
  } catch (error) {
    console.error('Error parsing or updating app.json:', error);
    process.exit(1);
  }
});