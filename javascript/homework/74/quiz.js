(async () => {
    'use strict';

    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            this.items = items;
        }

        get totalAmt() {
            let total = 0;
            this.items.forEach(item => {
                total += item.total* item.quantity;
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
            const ord = new Order(order.customer, order.address, order.items);
            ord.items.forEach(item => {
                item.total = item.total / item.quantity;
            });
            console.log(ord);
            console.log(ord.totalAmt);
        });
    }
    catch (err) {
       console.error(err);
    }
    
})();