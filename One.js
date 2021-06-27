// Printing in Node js

// var a=10;
// var b=20;
// var c=a+b;
// console.log("SUM IS",c);

// import/Export in Node js

// module.exports=function add(x=0,y=0){
//     return x+y;
//  }

// Export Multiple Function

function addition(x=0,y=0){
    return x+y;
}
function substraction(x=0,y=0){
    return x-y;
}
module.exports.addition = add;
module.exports.substraction = sub;
