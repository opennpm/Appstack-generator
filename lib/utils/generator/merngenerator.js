const directory = require('./../files/directory');
const chalk = require('chalk');
const { spawn } = require( 'child_process' );
const inquirer = require('./../inquirer');

var projectname;
var expressname;
var reactName;

const name = async () => {
    const res= await inquirer.askProjectName();
    projectname = res.appName;
    return projectname;
}

  

module.exports = {
    run: async ()=>{
        await name(); 
        console.log(chalk.yellow("Generating Express Backend : "));
        const dir =await directory.createDir(projectname);
        // console.log(dir);

        const changesDir =await directory.changeWorkingDir(projectname);
        const res= await inquirer.askExpressAppName();
        expressname = res.appName;

        require( "child_process" ).spawnSync( "sh", [ "-c", `express ${expressname}` ], { stdio: "inherit", stdin: "inherit" } );
        console.log(chalk.yellow(`Generating React Frontend : `));

        const react= await inquirer.askReactName();
        reactName = react.appName;
        require( "child_process" ).spawnSync( "sh", [ "-c", `npx create-react-app ${reactName}` ], { stdio: "inherit", stdin: "inherit" } );
    }
}