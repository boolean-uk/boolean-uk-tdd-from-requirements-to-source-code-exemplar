```
As a supermarket shopper,
So that I can pay for items at checkout items,
I'd like to be able to know the total cost of items in my basket.
```
| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| getTotalCost(basket) | { price: @Number }[] | If input array not empty | @Number (sum of all items)
| | | If input array is empty | 0

---

```
As an organised individual,
So that I can evaluate my shopping habits,
I'd like to see a receipt that includes line items (quantity, name, cost) and the total cost.
```
| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| getReceipt(basket) | { name: @String, price: @Number, quantity: @Number}[] | If input array not empty | Formatted line item table as a @String with a total cost at the bottom
| | | If input array is empty | null