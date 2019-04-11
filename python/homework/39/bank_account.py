class Account:

    num_of_acct = -1

    def __init__(self, name, acct_num, balance):
        self.name = name
        self.acct_num = acct_num
        self.balance = balance
        Account.track_accounts()
        

    @classmethod
    def track_accounts (cls):
        cls.num_of_acct+=1
        return cls.num_of_acct

    def set_name (self, name):
        self.name = name

    def set_acct_num (self, acct_num):
        self.acct_num = acct_num

    def set_balance (self, balance):
        self.balance = balance

    def get_name (self):
        return self.name
        
    def get_acct_num (self):
        return self.acct_num

    def get_balance (self):
        return self.balance

    def print_acct (self):
        print(f'Name: {self.name} acct number: {self.acct_num} balance: {self.balance}')

account1 = Account('Joe',1000,100)
account2 = Account('Jim',1001,150)
Account.print_acct(account1)
Account.print_acct(account2)
print(Account.track_accounts())
print(Account.get_name(account1))
print(Account.get_name(account2))
Account.set_name(account2,'Donald')
print(Account.get_name(account2))