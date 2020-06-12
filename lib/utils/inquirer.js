const inquirer = require('inquirer')

module.exports = {
    askAppName :async ()=>{
        var appName = [{
            type: 'input',
            name: 'appName',
            message: "Please enter express app name",
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