# Allocate Problem
## Description
This is a FIFO problem. We have products arriving based on supply, and then sent to customers based on demand.
Demand is items going out to the customers.
Supply is items coming in from the vendors
We need to match the two. I have a long description below, but that is essentially all we’re looking for.
 
Sales Orders are orders created by a customer for us to provide a product
This is the demand.
- 'created': when the sales order was created
- 'quantity': how many items the customer wants
 
Purchase Orders are orders created by us to receive a product
This is the supply.
- 'receiving': when we expect to receive the product
- 'quantity': how many we will be receiving
 
We want to supply the products to the customers in the order in which
they were requested.
 
Implement the function 'allocate'.
The function should return an Array of elements. Each element should include
- the ID of the sales order
- the date the customer should expect to get the item
 
Additional
- we only send the product once we have enough for that sales order
- (so if the sales order is for 2, we need to have 2 available before sending)
- the function should support any number of sales orders or purchase orders
- to make it simple we only have one product
```
function allocate(salesOrders, purchaseOrders) {
    ...
}
```

---
## Testing automation

There is a set of unit tests that can be executed to verify the functionality of the code. It needs some dependencies to be intalled before its execution:
```
npm install
```

Then, the set of tests can be executed with the next command:
```
npm test
```

Also, new tests can be implemented adding objects to the array `tests` in the `./test/allocate.js` file. This objects should have the next structure:
```
{
    sales: [],
    purchases: [],
    expected: []
}
```