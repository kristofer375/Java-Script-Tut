const menuItems = [
    { item: "aaa", price: 2.2},
    { item: "bbb", price: 3.2},
    { item: "ccc", price: 4.2},
    { item: "ddd", price: 5.2},
    { item: "eee", price: 6.2}
];

menuItems.reduce((accumulator, menuItem) => {
    console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
    `)
    return accumulator + menuItem.price;
}, 0);
//console.log(total);
