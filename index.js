#!/usr/bin/env node
const inquirer = require('./lib/utils/inquirer');
const { exec } = require('child_process');
const { stderr, stdout } = require('process');
const { async } = require('rxjs/internal/scheduler/async');
const directory = require('./lib/utils/files/directory');
const { spawn } = require( 'child_process' );
const chalk = require('chalk');


var projectname;
var expressname;

const name = async () => {
  const res= await inquirer.askProjectName();
  projectname = res.appName;
  return projectname;
}


const run = async () => {

  
  console.log(chalk.yellow("Generating Express Backend : "));

  await name(); 
  const dir =await directory.createDir(projectname);
  // console.log(dir);

  const changesDir =await directory.changeWorkingDir(projectname);
  // console.log(changesDir);
  // console.log(`Generating Express Backend: ${expressname}`);



  const res= await inquirer.askExpressAppName();
  expressname = res.appName;



  require( "child_process" ).spawnSync( "sh", [ "-c", `express ${expressname}` ], { stdio: "inherit", stdin: "inherit" } );

  console.log(chalk.yellow(`Generating Angular Frontend : `));

  require( "child_process" ).spawnSync( "sh", [ "-c", "ng new" ], { stdio: "inherit", stdin: "inherit" } );

}


run()

