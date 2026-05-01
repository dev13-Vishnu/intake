class Stack{
    constructor() {
        this.queue = [];
    }
    push(x){
        const size = this.queue.length;
        this.queue.push(x);
        for(let i = 0; i< size; i++) {
            this.queue.push(this.queue.shift());
        }
    }
    pop() {
        if(this.isEmpty()){
            return "Stack Underflow";
        } else {
            return this.queue.shift();
        }
    }
    peek() {
        if(this.isEmpty()){
            return null;
        } 
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    print() {
        if(this.isEmpty()){
            console.log("Stack is empty");
        } else {
            console.log("Top ->" + this.queue.join("<-") +"<-Bottom")
        }
    }

}



const stack = new Stack();

stack.push(1);
console.log(stack.peek());
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.print();
stack.push(4);
stack.print();
console.log(stack.pop());
stack.print();
