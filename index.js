class Produkt {
    constructor(nazwa, cena, czyZnizka) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.czyZnizka = czyZnizka;
    }

    czyPrzecena() {
        return this.czyZnizka;
    }
}

//const produkt1 = new Produkt('Toster', 45.99, true);

class PrzecenaProduktu extends Produkt {
    constructor(nazwa, cena, czyZnizka, procentowaZnizka) {
        super(nazwa, cena, czyZnizka);
        this.procentowaZnizka = procentowaZnizka;
    }

    wezObnizonaCena() {
        if (super.czyPrzecena()) {
            return this.cena * ((100 - this.procentowaZnizka) / 100);
        } else {
            return `Ten produkt nie jest przeceniony`;
        }
    }

}

const znizkowy1 = new PrzecenaProduktu('Toster', 45.99, true, 20);
console.log(znizkowy1.wezObnizonaCena());
