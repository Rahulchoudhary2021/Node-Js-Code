// **************ReadFile*******************************

// Async Example--------------------------------------------

//  const fs = require('fs');
//  const path=require('path');
// //  const filePath="D:\\RAHUL{All Important Work and Docs}\\MCA MANAV RACHNA UNIVERSITY\\Collage Work\\3rd Sem Notes\\CLOUD\\Practicle file questions.txt";
//  console.log("1.....");
//  fs.readFile(path.join(__dirname,'/one.js'),(err,content)=>{
//      if(err){
//          console.log("Error During Read",err);

//      }
//      else{
//          console.log(content.toString());
//      }

//  });
//  console.log("3.....");

// Read Sync--------------------------------------------------

// const fs= require('fs');
// const path =require('path');
// console.log("Start");
// try{
//     const data=path.join(__dirname,'\\one.js')
// const content=fs.readFileSync(data);
// console.log(content.toString());
// }
// catch(e){
//     console.log(e);
// }
// console.log("End");

// *****************WriteFile***************************

// +++++++++++Asyn++++++++++++++
//  const fs=require('fs');
//  fs.writeFile('xyz.txt',"Iam Write File Asyn",(err)=>{
//     console.log(err ?"Error During Write File" : "Write Done...."); 
// })

// -------------Sync---------------

// const fs=require('fs');
// console.log("Start");
// fs.writeFileSync('xyz2.txt',"Iam write File Sync",(err)=>{
//    console.log(err ?"Error During Write File" : "Write Done...."); 

// })
// console.log("End");

//------------------ Read And Write File Same Time------------
// const fs=require('fs');
// const path=require('path');
// console.log("Start");

// fs.writeFileSync('xyz3.txt',"Write And Read At Same Time",(err)=>{
     
//          console.log(err ? "Error During write" :"Wite Done");
     
//    });
//  try{
//      const fullpath=path.join(__dirname,"\\xyz3.txt");
//      const data=fs.readFileSync(fullpath);
//      console.log(data.toString());


//  }
//  catch(e){
//    console.log("Error",e)
//  }



// console.log("End");


// **********AppedFile*******************

// const fs=require('fs');
// fs.appendFile('xyz3.txt',"Write And Read At Same Time234555",(err)=>{
//        console.log(err ?"Error" : "Append Done");
// })



