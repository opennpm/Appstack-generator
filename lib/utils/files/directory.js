// import { error } from 'console';
const fs = require('fs');

module.exports = {
    createDir:(dirpath)=>{
        fs.mkdirSync(dirpath , {recursive:true} , (error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("Your dir is created");   
                return true;
            }    
        })
        return true;
    },


    changeWorkingDir:(newDir)=>{
        console.log(`Starting directory: ${process.cwd()}`);
        try {
        process.chdir( `${newDir}`);
        console.log(`New directory: ${process.cwd()}`);
        return process.cwd();
        } catch (err) {
        console.error(`chdir: ${err}`);
        }
    }
}