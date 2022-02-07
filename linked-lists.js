class Noeud {
    constructor(data) {
        this.data = data;
        this.next = null;                
    }
}

class List {
    constructor(head = null) {
        this.head = head
    }

    // // display list
    displayList(){
        let noeuds = this.head;
        while(noeuds){
            console.log(noeuds.data);
            noeuds = noeuds.next;
        }
    }

    getLastNode()
    {
        let current = this.head;
        while(current){
            current = current.next;
            if (current.next == null) return current;
        }
    }
    addEnd(value){
        let noeuds = new Noeud(value);
        let lastNode = this.getLastNode();
        lastNode.next = noeuds;
    }

}

let n1 = new Noeud(3);
let n2 = new Noeud(3);

let list = new List(n1);

n1.next = n2;
list.addEnd(17)

list.displayList();