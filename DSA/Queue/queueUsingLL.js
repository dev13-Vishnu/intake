class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.front =null;
        this.rear = null;
        this.length = 0;
    }

    enqueu(data) {
        const newNode = new Node(data);
        if(!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeu() {
        let removed = this.front.data;

        this.front = this.front. next;
        if(!this.front) this.rear = null;
        return removed;
    }
    peek(){
        return this.front? this.front.data : null;
    }
    isEmpty() {
        return this.length === 0;
    }
}


const queue = new Queue();

queue.enqueu(1);
queue.enqueu(2);
console.log(queue.peek());
console.log(queue.dequeu());
console.log(queue.dequeu());


