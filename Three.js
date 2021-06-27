// // Read File...........................ASYNC..........

const fs=require('fs');
const path=require('path');

const FilePath=path.join(__dirname,'/One.js');
// Hard Codeing Path.........
// const FilePath="D:\\RAHUL{All Important Work and Docs}\\MCA MANAV RACHNA UNIVERSITY\\Collage Work\\MCA 2020 Syllabus_2 sem.pdf";
console.log("Before")
fs.readFile(FilePath,(err,content)=>{
    if(err){
        console.log("Error During Read File",err);
    }
    else{
        console.log(content.toString());
    }
})
console.log("After")

// Read File.......................Sync..............PropTypes.any,
// const fs=require('fs');
// console.log("1..Read File Start In Sync Way");
// try{
//     const content=fs.readFileSync(__filename);
//     console.log(content.toString());
//     console.log("3..Read File End In Sync Way")
// }
// catch(e){
//  console.log(e);
// }

