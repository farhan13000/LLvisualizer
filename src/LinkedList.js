// LinkedList.js
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtHead(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    insertAtTail(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    deleteAtHead() {
      if (this.head) this.head = this.head.next;
    }
  
    deleteAtTail() {
      if (!this.head) return;
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  }
  
  export default LinkedList;
  