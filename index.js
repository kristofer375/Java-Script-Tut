const czyPotwierdzony = false;
// let iloscPrzedmiotow = 0;
/*
if (czyPotwierdzony) {
    iloscPrzedmiotow = 1;
} else {
    alert("Proszę się zalogować!")
    iloscPrzedmiotow = 0;
}
*/
const iloscPrzedmiotow = czyPotwierdzony ? 1 : console.log("Proszę się zalogować!");
console.log(czyPotwierdzony);

const wiek = prompt("Ile masz lat?");
const powitanie = wiek < 10 ? "Hej!" : wiek > 18 ? "Dzień dobry!" : "Hej maluchu :)";
console.log(powitanie);
