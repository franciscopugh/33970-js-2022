class Pokemon {
    constructor(nombre, tipo, vidas) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.nivel = 1
    }

    recibirAtaque(poderAtaque) {
        this.vidas -= poderAtaque

        if(this.vidas > 0 ) {
            console.log(`${this.nombre} sigue vivo con ${this.vidas} de vida`)
        } else {
            console.log(`${this.nombre} se fue a dormir con los Magikarps`)
        }
    }
}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, poderImpactrueno) {
        super(nombre, tipo, vidas)
        this.poderImpactrueno = poderImpactrueno
    }

    impactrueno(pokemonAtacado) {
        console.log(`${this.nombre} lanzo impactrueno con un daño de ${this.poderImpactrueno}`)
        pokemonAtacado.recibirAtaque(this.poderImpactrueno)
    }
}

class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, poderLlamadara) {
        super(nombre, tipo, vidas)
        this.poderLlamadara = poderLlamadara
    }

    llamadara(pokemonAtacado) {
        console.log(`${this.nombre} lanzo llamarada con un daño de ${this.poderLlamadara}`)
        pokemonAtacado.recibirAtaque(this.poderLlamadara)
    }
}

class Eevee extends Pokemon {
    constructor(nombre, tipo, vidas, poderTackle) {
        super(nombre, tipo, vidas)
        this.poderTackle = poderTackle
    }

    tacklear(pokemonAtacado) {
        console.log(`${this.nombre} tackleo con un daño de ${this.poderTackle}`)
        pokemonAtacado.recibirAtaque(this.poderTackle)
    }
}
