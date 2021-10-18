const temperatura = [
    { stopnie: 69, czyNajwyzsza: false},
    { stopnie: 82, czyNajwyzsza: true},
    { stopnie: 73, czyNajwyzsza: false},
    { stopnie: 64, czyNajwyzsza: false}
];

const nowaTemp = temperatura.map(temperatura =>
    temperatura.stopnie > 70 ? { ...temperatura, czyWysoka: true} : temperatura
).forEach(temperatura => {
    if (temperatura.czyWysoka) {
        console.log(`Temperatta ${temperatura.stopnie}`)
    }
})
