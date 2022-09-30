import { ListNode } from "./lib";
import { mergeTwoLists } from "./merge_linked_list";


export function splitByMiddle(head: ListNode | null): ListNode | null {

    let slow = head;
    let fast = head?.next;
    let secondHalf: ListNode | null = null;

    while (fast?.next !== null && fast?.next !== undefined) {

        slow = slow?.next || null;
        fast = fast?.next?.next || null;
    }

    if (slow) {
        secondHalf = slow.next;
        slow.next = null;
    }

    return secondHalf;
}

export function sortList(head: ListNode | null): ListNode | null {

    if (head === null || head.next === null) {
        return head;
    }
    let middle = splitByMiddle(head);
    let left: ListNode | null = sortList(head);
    let right: ListNode | null = sortList(middle);

    return mergeTwoLists(left, right)
};
