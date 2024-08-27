class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size=0;
    }

    insertFirstNode(data){
        this.head = new Node(data, this.head);
        this.size++;
        
    }

    insertLastNode(data){
        const tail=new Node(data);

        if(!this.head){
            this.head= tail;
        }else{
            let current= this.head;
            while(current.next!=null){
                current=current.next
            }

            current.next=tail;
        }

        this.size++;
        
    }

    insertAtIndex(data,index){
        const node = new Node(data); 
    
        if(index==this.size){
            this.insertLastNode(data);  
        }else if(index>this.size-1){
            console.log(`The list has only ${this.size} of nodes and can't insert data at ${index}`);
        }else if(index==0){
            this.insertFirstNode(data);    
        }else {
            let current=this.head;
            let prev = null;
            let currentIndex=0;
            while((index)!=currentIndex){
                prev=current;
                current=current.next;
                currentIndex++;
            }

            prev.next=node;
            node.next=current;    
        }

        this.size++;
    }


    getAtIndex(index){
        let currentIndex=0;
        let current=this.head;

        if(index>this.size-1){
            console.log(`This index(${index}) is not exists`)
        }else{
            while(currentIndex!=index){
                current=current.next;
                currentIndex++;
            }
            console.log(`Node is ${current.data}`);
        }
    }

    removeAtIndex(index){
       let currentIndex=0;
       let current = this.head;
       let prev;
       let after;
       
       while(index!=currentIndex){
        if(index!=0){
            prev=current;
        }
        current=current.next;
        if(index!=this.size-1){
            after=current.next;
        }else{
            after=null;
        }
        currentIndex++;
       }

       if(index===0){
        this.head=current.next;
        current.next=null;
       }else{
        prev.next=after;
        current.next=null;
       }

       this.size--;
    }

    clearList(){
        this.head=null;
        this.size=0;
    }

    printLinkedList(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

}

const ll = new LinkedList();

ll.insertFirstNode(100);
ll.insertFirstNode(200);
// ll.insertFirstNode(300);
ll.insertLastNode(400);

ll.insertAtIndex(500,2);
ll.insertAtIndex(600,1);

ll.insertAtIndex(600,6);
ll.getAtIndex(0);
ll.removeAtIndex(0);
ll.printLinkedList();
ll.clearList();
ll.printLinkedList();
