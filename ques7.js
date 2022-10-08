const arr=[{name:"Srijan",roll:34},{name:"Sagnik",roll:33},{name:"Subhradeep",roll:35}];
let compare=(a,b)=>
{
return b.roll-a.roll;
}
arr.sort(compare);
console.log(arr);
