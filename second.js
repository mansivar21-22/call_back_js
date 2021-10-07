/*console.log("start");
function getName(name, callback){
    setTimeout(()=>{
        console.log("Inside timeout");
        callback(name)
    },2000)
}
const nm = getName('SIM',function(nm){
    console.log(nm);
});
console.log("End")
*/

export function sayHi(name){
    console.log("hi"+name);

}

