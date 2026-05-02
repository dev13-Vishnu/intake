class Stack{
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(x) {
         this.stack.push(x);
         if(x <= this.minStack[this.minStack.length -1]) {
            this.minStack.push(x);
         }
    }
    pop() {
        let popped = this.stack.pop;
        if(popped === this.minStack[this.minStack.length -1]) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length -1];
    }
    getMIn(){
        return this.minStack[this.minStack.length - 1];
    }
}