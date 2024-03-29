class Proprietaire {
    constructor(nom, prenom, age, CIN) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.CIN = CIN
    }
    getnom() {
        return this.nom
    }
    setnom(value) {
        this.nom = value
    }
    getprenom() {
        return this.prenom
    }
    setprenom(value) {
        this.prenom = value
    }
    getage() {
        return this.age
    }
    setage(value) {
        this.age = value
    }
    getcin() {
        return this.CIN
    }
    setcin(value) {
        this.CIN = value
    }
    Affichage() {
        console.log(this.nom + " " + this.prenom + " " + this.CNE + " " + this.age)
    }
    Equal(Proprietaire) {
        if ((Proprietaire.nom == this.nom) && (Proprietaire.prenom == this.prenom)) {
            return true;
        }
        else return false;
    }
}

//-------------------------------------

class Maison {
    constructor(adresse, nbetages, nbchambres) {
        this.adresse = adresse
        this.nbetages = nbetages
        this.nbchambres = nbchambres
    }
    getadresse() {
        return this.adresse
    }
    setadresse(value) {
        this.adresse = value
    }
    getnbetages() {
        return this.nbetages
    }
    setnbetages(value) {
        this.nbetages = value
    }
    getnbchambres() {
        return this.nbchambres
    }
    setnbchambres(value) {
        this.nbchambres = value
    }
    Affichage() {
        console.log(this.adresse + " " + this.nbetages + " " + this.nbchambres)
    }
}
