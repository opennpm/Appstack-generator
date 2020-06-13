const directory = require('./../files/directory');
const chalk = require('chalk');
const { spawn } = require( 'child_process' );
const inquirer = require('./../inquirer');

var projectname;
var expressname;

const name = async () => {
    const res= await inquirer.askProjectName();
    projectname = res.appName;
    return projectname;
}

  

module.exports = {
    run: async ()=>{
        console.log(chalk.yellow("Generating Express Backend : "));

        await name(); 
        const dir =await directory.createDir(projectname);
        // console.log(dir);

        const changesDir =await directory.changeWorkingDir(projectname);
        const res= await inquirer.askExpressAppName();
        expressname = res.appName;

        require( "child_process" ).spawnSync( "sh", [ "-c", `express ${expressname}` ], { stdio: "inherit", stdin: "inherit" } );
        console.log(chalk.yellow(`Generating Angular Frontend : `));
        require( "child_process" ).spawnSync( "sh", [ "-c", "ng new" ], { stdio: "inherit", stdin: "inherit" } );

    }
}