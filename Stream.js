const file="D:\\RAHUL{All Important Work and Docs}\\🔴 Complete JavaScript Tutorial in Hindi in 2021.mp4";
const fs=require('fs');
const rstream=fs.createReadStream(file);
rstream.on('open',()=>{
    console.log('stream open.....');
});
rstream.on('data',(chunk)=>{
  console.log(chunk)
});
rstream.on('end',()=>{
    console.log('Stream End....')
});
rstream.on('err',(err)=>{
    console.log('Stream Error...',err)
});
rstream.on('close',()=>{
    console.log('Stream Close.....')
});