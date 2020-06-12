'use strict';

const inquirer = require('./lib/utils/inquirer');
const { exec } = require('child_process');
const { stderr, stdout } = require('process');
const { async } = require('rxjs/internal/scheduler/async');
const directory = require('./lib/utils/files/directory');
var expressname;


const { spawn } = require( 'child_process' );
// const ls = spawn( 'ng new hello' ,[]);
// const ls= spawn('ng', ['new', 'service']);
const ls= spawn('ng', ['new', 'service' ]);




const name = async () => {
  const res= await inquirer.askAppName();
  expressname = res.appName;
  return expressname;
}


const run = async () => {
  await name(); 
  const dir =await directory.createDir(expressname);
  // console.log(dir);

  const changesDir =await directory.changeWorkingDir(expressname);
  console.log(changesDir);


  console.log(`Generating : ${expressname}`);

  // exec("express expressBackend",  (error, stdout, stderr) => {
  //   if (error) {
  //     console.log('Error : ' + error);
  //     return;
  //   }
  //   if (stderr) {
  //     console.log('Error : ' + stderr);
  //     return;
  //   }
  //   console.log('stdout : ' + stdout);
  // })

  require( "child_process" ).spawnSync( "sh", [ "-c", "ng new" ], { stdio: "inherit", stdin: "inherit" } );
  require( "child_process" ).spawnSync( "sh", [ "-c", `express ${expressname}` ], { stdio: "inherit", stdin: "inherit" } );



  // exec("ng new angularFrontend" , (error,stdout ,stderr)=>{
  //   if (error) {
  //         console.log('Error : ' + error);
  //         return;
  //       }
  //       if (stderr) {
  //         console.log('Error : ' + stderr);
  //         return;
  //       }
  //       console.log('stdout : ' + stdout);
  // });




}


run()

