let multi=(...parameter)=>{
    let result=1;
    for(let i of parameter)
    {
    result=result*i;
}
return result;
}
console.log(multi(6,5,4));