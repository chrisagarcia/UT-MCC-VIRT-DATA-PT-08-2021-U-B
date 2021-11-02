sales = [
    {
        "client": "Acme Corp",
        "amountDollars": 12,
        "salesperson": "Edward"
    },
    {
        "client": "Meta",
        "amountDollars": 12000,
        "salesperson": "Edward"
    },
    {
        "client": "ABC",
        "amountDollars": 24000,
        "salesperson": "David"
    },
    {
        "client": "DEF",
        "amountDollars": 24000,
        "salesperson": "David"
    },
    {
        "client": "Eron",
        "amountDollars": 24000,
        "salesperson": "Ken"
    },
]

print(sorted(sales, key=lambda e: e["amountDollars"], reverse=True))