#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const meanGenerator = require('./lib/utils/generator/meangenerator');
const mernGenerator = require('./lib/utils/generator/merngenerator');

const files = require('./lib/githubmanager/files');
const github = require('./lib/githubmanager/github');
const repo = require('./lib/githubmanager/repo');

var stackName;








console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git repository!'));
  process.exit();
}

const getGithubToken = async () => {
  // Fetch token from config store
  let token = github.getStoredGithubToken();
  if(token) {
    return token;
  }

  // No token found, use credentials to access GitHub account
  token = await github.getPersonalAccesToken();

  return token;
};

const run = async () => {
  try {
    // Retrieve & Set Authentication Token
    const token = await getGithubToken();
    github.githubAuth(token);

    // Create remote repository
    const url = await repo.createRemoteRepo();
    // console.log(url);

    // Create .gitignore file
    await repo.createGitignore();

    // Set up local repository and push to remote
    await repo.setupRepo(url);

    console.log(chalk.green('All done!'));
  } catch(err) {
      if (err) {
        switch (err.status) {
          case 401:
            console.log(chalk.red('Couldn\'t log you in. Please provide correct credentials/token.'));
            break;
          case 422:
            console.log(chalk.red('There is already a remote repository or token with the same name'));
            break;
          default:
            console.log(chalk.red(err));
        }
      }
  }
};













const getFlags = async()=>{
  var args = process.argv.splice(2);
  stackName= args[0];
  if(stackName == "--mean"){
    await meanGenerator.run();
    run();
  }
  else if(stackName == "--mern"){
    await mernGenerator.run();
    run();
  }
  else{
    console.error("Currently we support generation of mean stack apps only ;");
    console.log("generate --mean");
  }

}


getFlags();


