let a=153;
console.log("sum of 1st ",a,"no. is",a*(a+1)/2);
for(let i=1;i<=10;i++){
    console.log("",a,"x",i,"=",a*i);
}
let k=0;
for(let i=2;i<=a/2;i++){
    if(a%i==0){
        console.log("It factor is:",i);
        k=1;
    }
}
if(k){
    console.log("Not Prime");
}else{
    console.log("Prime");
}
let n=a,count=0;
while(n>0){
    count++;
    n=Math.floor(n/10);
}
    console.log("No. of digits in number",count);

    n=a;
    let ams=0;
while(n>0){
    let temp=n%10;
    ams=ams+ temp**3;
    n=Math.floor(n/10);
}
if(ams==a){
    console.log("Armstrong")
}else{
    console.log("Not a Armstrong")
}
