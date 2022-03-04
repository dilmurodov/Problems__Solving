// * Linked List
'use strict'

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
};

class LinkedList {
    constructor(head, size) {
        this.head = null;
        this.size = 0;
    }

    // Insert first Node

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node

    insertLast(data) {
        let current;
        let node = new Node(data);

        // if head is empty
        if (!this.head) {

            this.head = node;

        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // insert Index

    insertAt(data, index) {
        if (index < 0 && index > size) {
            return;
        }

        const node = new Node(data);
        let previous, current;
        let count = 0;

        // if the first index

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // Set current to first

        current = this.head;

        while (index > count) {
            previous = current; // Before Node
            current = current.next; // after Node
            count++;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get Index

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (index === count) {
                console.log(current.data)
            }
            current = current.next;
            count++;
        }

        return;
    }

    // Remove at index

    removeAt(index) {
        if (index < 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.size--;
        return;
    }

    // Clear List

    clearAll(){
        this.head = null;
        this.size = 0;
    }

    // Print List data

    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertLast(400);
ll.insertLast(500);
ll.insertLast(600);

ll.insertAt(1000, 0);

ll.printListData()

// console.log(ll)

ll.removeAt(0);
console.log("============ After removing 0 index ======================")
ll.printListData();

ll.clearAll()
console.log("=========== After Clearing List ====================")
ll.printListData()

// ll.getAt(3); // get Index