/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    var end = head;
    var middle = head;

    while (end != null && end.next != null) {
        middle = middle.next;
        end = end.next.next;
    }

    return middle;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const node1 = new ListNode(1); // Node with value 2 and next pointing to null
const node2 = new ListNode(2); // Node with value 2 and next pointing to null
const node3 = new ListNode(3); // Node with value 3 and next pointing to null
const node4 = new ListNode(4); // Node with value 4 and next pointing to null
const node5 = new ListNode(5); // Node with value 4 and next pointing to null

// Link the nodes together to form a linked list: 2 -> 4 -> 3
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(middleNode(node1))