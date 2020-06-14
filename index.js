#!/usr/bin/env node
const meanGenerator = require('./lib/utils/generator/meangenerator');
const mernGenerator = require('./lib/utils/generator/merngenerator');
var stackName;

const getFlags = async()=>{
  var args = process.argv.splice(2);
  stackName= args[0];
  if(stackName == "--mean"){
    meanGenerator.run();
  }
  else if(stackName == "--mern"){
    mernGenerator.run();
  }
  else{
    console.error("Currently we support generation of mean stack apps only ;");
    console.log("generate --mean");
  }
}


getFlags();


