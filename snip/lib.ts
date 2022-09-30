

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    append(val: number) {
        let prev = new ListNode(this.val, this.next);
        this.next = prev;
        this.val = val;
    }

    fromArray(input: number[]) {
        for (let i = 0; i < input.length; i++) {
            if (i === 0) {
                this.next = null;
                this.val = input[0];
            } else {
                this.append(input[i]);
            }
        }
    }

    /**
     * works for no cycle lists
     */
    toArray() {
        let result_array = [];
        let copy: ListNode | null = this;

        while (copy) {
            result_array.push(copy.val);
            copy = copy.next;
        }

        return result_array;
    }

    find(v: number): ListNode | null {
        let copy: ListNode | null = this;
        while (copy) {
            if (copy.val === v) return copy;
            copy = copy.next;
        }

        return null;
    }
    /**
     * Adds a node to the end of the lists, the `next` will point to 
     * an existing node
     * @param val new value
     * @param existing value of the node to connect to 
     * @returns 
     */
    addNewCycleEnd(val: number, existing: number): ListNode | null {

        const existingNode = this.find(existing);

        if (existingNode) {
            let copy: ListNode | null = this;
            while (copy) {
                if (copy.next !== null) {
                    copy = copy.next;
                } else {
                    break;
                }
            }

            copy.next = new ListNode(val, existingNode);

            return this;
        } else {
            throw Error(`The node ${existing} is not present in the list!`);
        }
    }
}


export class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = (val === undefined) ? 0 : val;
        this.children = []
    }
}


export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(
        val?: number,
        left?: TreeNode | null,
        right?: TreeNode | null,
    ) {

        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}




export function getMiddle(head: ListNode | null): ListNode | null {

    let slow = head;
    let fast = head?.next;

    while (fast?.next !== null && fast?.next !== undefined) {

        slow = slow?.next || null;
        fast = fast?.next?.next || null;
    }

    return slow;
}
