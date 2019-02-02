var Stack = function(){
	this.top = null;
	this.size = 0;
};

var StackNode = function(data){
	this.data = data;
	this.previous = null;
};

Stack.prototype.push = function(data) {
	var node = new StackNode(data);

	node.previous = this.top;
	this.top = node;
	this.size += 1;
	return this.top;
};

Stack.prototype.pop = function() {
	if(this.size > 0){
		temp = this.top;
		this.top = this.top.previous;
		this.size -= 1;
		return temp;
	}else{
		return null;
	}
};

let myStack = new Stack();
let node1 = new StackNode(1);
myStack.push(node1);

let node2 = new StackNode(2);
myStack.push(node2);

let node = new StackNode(3);
myStack.push(node);

node = new StackNode(4);
myStack.push(node);

node = new StackNode(5);
myStack.push(node);

node = new StackNode(6);
myStack.push(node);

node = new StackNode(7);
myStack.push(node);

while(node=myStack.pop()){
	console.log(node)
}

var Queue = function() {
	this.first = null;
	this.size = 0;
};

var QueueNode = function(data) {
	this.data = data;
	this.next = null;
};

Queue.prototype.enqueue = function(data) {
	var node = new QueueNode(data);

	if (!this.first){
		this.first = node;
	} else {
		n = this.first;
		while (n.next) {
			n = n.next;
		}
		n.next = node;
	}

	this.size += 1;
	return node;
};

Queue.prototype.dequeue = function() {
	if(this.size>0){
		temp = this.first;
		this.first = this.first.next;
		this.size -= 1;
		return temp;
	}else{
		return null;
	}
};

myStack = new Queue();
node1 = new QueueNode(1);
myStack.enqueue(node1);

node2 = new QueueNode(2);
myStack.enqueue(node2);

node = new QueueNode(3);
myStack.enqueue(node);

node = new QueueNode(4);
myStack.enqueue(node);

node = new QueueNode(5);
myStack.enqueue(node);

node = new QueueNode(6);
myStack.enqueue(node);

node = new QueueNode(7);
myStack.enqueue(node);

while(node=myStack.dequeue()){
	console.log(node)
}

///

function LinkedList() {
	this.head = null;
	this.tail = null;
}

function LinkedListNode(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

// Add nodes methods
LinkedList.prototype.addToHead = function (value) {
	const newNode = new LinkedListNode(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
	const newNode = new LinkedListNode(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
}

// Remove nodes methods
LinkedList.prototype.removeHead = function () {
	if (!this.head) return null;
	let value = this.head.value;
	this.head = this.head.next;

	if (this.head) this.head.prev = null;
	else this.tail = null;

	return value;
}

LinkedList.prototype.removeTail = function () {
	if (!this.tail) return null;
	let value = this.tail.value;
	this.tail = this.tail.prev;

	if (this.tail) this.tail.next = null;
	else this.head = null;

	return value;
}

// Search method
LinkedList.prototype.search = function (searchValue) {
	let currentNode = this.head;

	while (currentNode) {
		if (currentNode.value === searchValue) return currentNode;
		currentNode = currentNode.next;
	}
	return null;
}

const list = new LinkedList();

list.addToHead(1);
list.addToTail(2);

console.log(list.search(1));
console.log(list.search(2));
console.log(list.search(3000));



////////////
class StackClass {
	constructor(...items){
		this._items = []

		if(items.length>0)
			items.forEach(item => this._items.push(item) )
		}

		push(...items){
			//push item to the stack
			items.forEach(item => this._items.push(item) )
			return this._items;
		}
		pop(count=0){
			//pull out the topmost item (last item) from stack
			if(count===0)
				return this._items.pop()
			else
				return this._items.splice( -count, count )
		}

	peek(){
		// see what's the last item in stack
		return this._items[this._items.length-1]
	}

	size(){
		//no. of items in stack
		return this._items.length
	}

	isEmpty(){
		// return whether the stack is empty or not
		return this._items.length==0
	}

	toArray(){
		return this._items;
	}
}

// And this is how you can use the stack :
let my_stack = new StackClass(1,24,4);
console.log(238, my_stack);
// [1, 24, 4]
my_stack.push(23)
//[1, 24, 4, 23]
my_stack.push(1,2,342);
//[1, 24, 4, 23, 1, 2, 342]
my_stack.pop();
//[1, 24, 4, 23, 1, 2]
my_stack.pop(3)
//[1, 24, 4]
my_stack.isEmpty()
// false
my_stack.size();
//3

// http://jschap.com/data-structures-in-javascript-stack/
class QueueClass{
	constructor(...items){
		//initialize the items in queue
		this._items = []
		// enqueuing the items passed to the constructor
		this.enqueue(...items)
	}

	enqueue(...items){
		//push items into the queue
		items.forEach( item => this._items.push(item) )
		return this._items;
	}

	dequeue(count=1){
		//pull out the first item from the queue
		this._items.splice(0,count);
		return this._items;
	}

	peek(){
		//peek at the first item from the queue
		return this._items[0]
	}

	size(){
		//get the length of queue
		return this._items.length
	}

	isEmpty(){
		//find whether the queue is empty or no
		return this._items.length===0
	}
}

// Here's how you can use this implementation:
let my_queue = new QueueClass(1,24,4);
// [1, 24, 4]
my_queue.enqueue(23)
//[1, 24, 4, 23]
my_queue.enqueue(1,2,342);
//[1, 24, 4, 23, 1, 2, 342]
my_queue.dequeue();
//[24, 4, 23, 1, 2, 342]
my_queue.dequeue(3)
//[1, 2, 342]
my_queue.isEmpty()
// false
my_queue.size();
//3


