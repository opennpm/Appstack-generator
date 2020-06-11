const inquirer = require('inquirer')
const { exec } = require('child_process');
const { stderr } = require('process');
const { async } = require('rxjs/internal/scheduler/async');

var expressname;

var questions = [{
  type: 'input',
  name: 'name',
  message: "Please enter express app name",
}]


const name = async () => {
  await inquirer.prompt(questions).then(answers => {
    // console.log(`Hi ${answers['name']}!`);
    expressname = answers['name'];
    // return expressname;
  })
  return expressname;
}


const run = async () => {

  await name();
  
  console.log(`Generating : ${expressname}`);

  exec("express "+expressname,  (error, stdout, stderr) => {
    if (error) {
      console.log('Error : ' + error);
      return;
    }
    if (stderr) {
      console.log('Error : ' + stderr);
      return;
    }
    console.log('stdout : ' + stdout);
  })

}

run()