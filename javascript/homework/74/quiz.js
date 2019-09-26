(async () => {
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            this.items = items;
        }

        get totalAmt() {
            let total = 0;
            this.items.forEach(item => {
                total += item.price*item.quantity;
            });
            return total;
        }
    }

    try {
        const response = await fetch('orders.json');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const myOrders = await response.json();
        myOrders.forEach(order => {
            const myItems = [];
            const ord = new Order(order.customer, order.address, order.items);
            ord.items.forEach(item => {
                const itm = new Item(item.item, item.total / item.quantity, item.quantity);
                myItems.push(itm);
                ord.items = myItems;
            });
            console.log(ord);
            console.log(ord.totalAmt);
        });
    }
    catch (err) {
        console.error(err);
    }
})();