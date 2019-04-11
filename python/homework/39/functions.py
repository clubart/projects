def days_in_month_list():
    months = ['janurary', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
              'october', 'november', 'december']
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for months, days in zip(months, days):
        print(months, days)


def days_in_month_tupple():
    months = ('janurary', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
              'october', 'november', 'december')
    days = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    for months, days in zip(months, days):
        print(months, days)


def days_in_month_dict(month):
    days_in_month = {
        'janurary': 31,
        'feburary': 28,
        'march': 31,
        'april': 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    }
    print(days_in_month)
    print(days_in_month[month])


days_in_month_list()
days_in_month_dict('april')
days_in_month_tupple()
