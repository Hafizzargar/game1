let button=document.querySelectorAll(".button");
let c=0;
let u=0;
let u1=document.getElementById("u1");
let c1=document.getElementById("c1");

function cli(ev){
   
    let userchoi=ev.target.innerText;
    console.log(ev.target.innerText);
    
    let arr=['head','tail'];
    
    let x=Math.floor(Math.random()*arr.length);
    let tossv=arr[x];
    console.log("comput",tossv);
    
    
   if(userchoi===tossv){
    u++;
    
    u1.innerText=u;
    
    
     }else{
        c++;
     c1.innerText=c;
    
    
    
   }
//    console.log(u,c)
    

}
for(let i of button){
    i.addEventListener("click",cli);
}
