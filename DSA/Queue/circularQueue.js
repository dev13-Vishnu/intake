class circularQueue{
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        this.queue = new Array(size);
    }
    enqueue(value) {
        if((this.rear + 1) % this.size === this.front) return false;

        if(this.front === -1) this.front = 0;

        this.rear = (this.rear + 1) % this.size;

        this.queue[this.rear] =  value;
        return true;
    }
    dequeue() {
        if(this.front === - 1) return null;
        
        const value = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return value;
    }
    print() {
        if(this.front === -1) {
            console.log("queue is empty");
            return ;
        }
        let result = [];
        let i =this.front;
        while (true) {
            result.push(this.queue[i])
            if(this.rear === i) break;
            i = (i+1) % this.size;
        }

        console.log(result.join(', '));
    }
}


const queue = new circularQueue(4);

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));
console.log(queue.enqueue(6));
console.log(queue.enqueue(6));
console.log(queue.enqueue(6));
console.log(queue.enqueue(6));
queue.print();