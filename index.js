const breakfast = ["nazwa"];
const dinner = ["inna nazwa", "inna nazwa 2"];

const wszystko = ["ostatnia nazwa"];

const inne = [
    ...breakfast,
    ...dinner,
    "dodatkowa nazwa",
    ...wszystko
];
console.log(inne);

const index = inne.findIndex(idea => idea === "dodatkowa nazwa");

const ostateczne = [
    ...inne.slice(0, index),
    "dodatkowa druga nazwa",
    ...inne.slice(index + 1)
]

console.log(ostateczne);
