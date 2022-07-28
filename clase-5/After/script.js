const eevee1 = new Eevee("Lobito", "Normal", 12, 6)
const charmander1 = new Charmander("Fueguito", "Fuego", 25, 7)
const pikachu1 = new Pikachu("Pika pika", "Electrico", 30, 8)

do {
    pikachu1.impactrueno(charmander1)
    if(charmander1.vidas <= 0) {
        break
    }
    charmander1.llamadara(pikachu1)
} while(pikachu1.vidas > 0)

do {
    eevee1.tacklear(pikachu1)
    if(pikachu1.vidas <= 0) {
        break
    }

    pikachu1.impactrueno(eevee1)
} while(eevee1.vidas > 0)
