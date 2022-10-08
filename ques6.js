class stack_imp{
    constructor()
    {
        this.items=[];
    }
push(item)
{
    return this.items.push(item);
}
pop()
{
    return this.items.pop();
}
isEmpty()
{
    return this.items.length===0;
}
top(){
    return this.items[this.items.length-1];
}
}
let stack=new stack_imp;
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(8);
console.log(stack.items);
stack.pop();
console.log(stack.items);
console.log(stack.top());
console.log(stack.isEmpty());
