const sum = myArray => {

    let a = 0

    myArray.forEach(e => {a = a + e})

    return a

}

const sales = [
    {
        client: "Acme Corp",
        amountDollars: 12,
        salesperson: "Edward"
    },
    {
        client: "Meta",
        amountDollars: 12000,
        salesperson: "Edward"
    },
    {
        client: "ABC",
        amountDollars: 24000,
        salesperson: "David"
    },
    {
        client: "DEF",
        amountDollars: 24000,
        salesperson: "David"
    },
    {
        client: "Eron",
        amountDollars: 24000,
        salesperson: "Ken"
    },
]


// console.log(
//     sales.forEach(e => console.log(`${e.salesperson} sold ${e.client} ${e.amountDollars}`)
// ))

// console.log(
//     sales.map(e => `${e.salesperson} sold ${e.client} ${e.amountDollars}`)
// )

// console.log(
//     sales.map(e => e.client)
// )

// console.log(sales.filter(e => e.salesperson === "David"))

// console.log(
//     sales.map(e => e.amountDollars)
//         .reduce((a, e) => a + e, 0)
//     )

// console.log(
//     sales.filter(e => e.salesperson === "Edward")
//         .map(e => e.amountDollars)
//         .reduce((a, e) => a + e, 0)
// )

// console.log(
//     sum(sales.filter(e => e.salesperson === "Edward")
//         .map(e => e.amountDollars))
// )

// cheeky sort
// sales.sort((a, b) => {
//     if (b.amountDollars > a.amountDollars){
//         return 1
//     } if (a.amountDollars > b.amountDollars) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(sales)

sales.sort((a, b) => b.amountDollars > a.amountDollars ? 1 : 0)
console.log(sales)

// sales.sort((a, b) => b.client - a.client)
// console.log(sales)