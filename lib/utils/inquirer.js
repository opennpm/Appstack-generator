const inquirer = require('inquirer');
const chalk = require('chalk');
module.exports = {

    askProjectName :async ()=>{
        var appName = [{
            type: 'input',
            name: 'appName',
            message: "Please Enter the name of project : ",
            validate:function(value){
                if(value.length){
                    return true;
                }
                else{
                    return "please enter a valid name"
                }
            }
          }]

        return inquirer.prompt(appName);
    },  
    
    askReactName :async ()=>{
        var appName = [{
            type: 'input',
            name: 'appName',
            message: "Please Enter the name of React app : ",
            validate:function(value){
                if(value.length){
                    return true;
                }
                else{
                    return "please enter a valid name"
                }
            }
          }]

        return inquirer.prompt(appName);
    },  


    askExpressAppName :async ()=>{
        var appName = [{
            type: 'input',
            name: 'appName',
            message: "Please enter express app name : ",
            validate:function(value){
                if(value.length){
                    return true;
                }
                else{
                    return "please enter a valid name"
                }
            }
          }]

        return inquirer.prompt(appName);
    }
}