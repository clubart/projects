(function () {
    'use strict';

    function createAccount(name, balance) {
        return {
            name: name,
            balance: balance,
            print: printAcct
        };
    }

    function printAcct() {
        console.log(this.name, this.balance);
    }

    function transaction(amt) {
        this.balance += amt;
    }

    const acct1 = createAccount('Donald', 1000);
    const acct2 = createAccount('Mike', 500);

    acct1.print();
    transaction.call(acct1, 50);
    acct1.print();
    transaction.call(acct1, -500);
    acct1.print();
    acct2.print();
    transaction.call(acct2, 150);
    acct2.print();
}());