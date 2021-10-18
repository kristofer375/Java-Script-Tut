const restauracje = [
    { nazwa: "aaa", dystans: 2.2},
    { nazwa: "bbb", dystans: 3.2},
    { nazwa: "ccc", dystans: 4.2},
    { nazwa: "ddd", dystans: 5.2},
    { nazwa: "eee", dystans: 6.2}
];

const wyniki = restauracje.find(restauracje => 
    restauracje.nazwa.toUpperCase().includes('AA') && restauracje.dystans < 5)
console.log(wyniki);
//console.log(restauracje);
