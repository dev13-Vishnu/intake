class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(x) {
        const newNode = new Node(x);
        newNode.next = this.top;
        this.top=newNode;
    }
    pop() {
        if(!this.top) {
            return "Stack underflow.";
        } else {
            let current = this.top;
            this.top = this.top.next;
            return current.data;
        }
    }
    peek() {
        return this.top.data;
    }
    print() {
        let current = this.top;
        let str ="top->"
        while(current) {
            str+=current.data+ "->";
            current = current.next;
        }
        console.log(str + "null");
    }
}

const  stack = new Stack();

stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());
stack.push(3);
stack.print();
console.log(stack.pop());
console.log(stack.peek())
stack.print();
