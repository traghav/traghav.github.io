class Node:

	def __init__(self, d):
		self.next = None
		self.data = d


class LinkedList:
	def __init__(self):
		self.root = None

	def add_elements(self, d):
		new_node = Node(d)
		if(root == None):
			root = new_node
		else:
			curr = root
			while(curr):
				curr = curr.next
			curr.next = new_node

	def print_elements(self):
		curr = root
		while(curr):
			print(curr.data)
			curr = curr.next

list1 = LinkedList()
list1.add_elements(1)
list1.add_elements(2)
list1.add_elements(3)
list1.print_elements()

