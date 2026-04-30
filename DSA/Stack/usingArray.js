class Stack{
    constructor () {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()) {
            return "Stack underflow.";
        }
        return this.items.pop();
    }
    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        if(this.isEmpty()) {
            console.log("The stack is empty.");
        } else {
            console.log([...this.items].reverse().join('->'));
        }
    }
    size () {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}


const stack = new Stack();
stack.print();
stack.push(1);
console.log(stack.peek());
stack.clear();
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
stack.print();
console.log(stack.pop());
stack.print();