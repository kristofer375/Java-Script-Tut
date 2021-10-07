var cena = 30;
var czySprzedawana = true;

// var shadowing - nadpisanie wartości
// let i const - istnieje wewnątrz określonego bloku poleceń bez nadpisywania wartości zmiennej poza nią
if (czySprzedawana) {
    let cena = 20 - 2;
    console.log('cena promocyjna', cena)
}
console.log('cena', cena);
