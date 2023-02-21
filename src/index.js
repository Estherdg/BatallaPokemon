class Pokemon {

    constructor (name, type) {
        this.name = name
        this.type = type 
        this.hp = 100 
        this.level = 1
    }  
    attack (pokemon) {  
        pokemon.hp -= 10 
        console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`) 

    } 
    dead(pokemon) {
        console.log("Tu pokemon ha muerto, llevalo al centro pokemon");
    }
}  
class PokemonAgua extends Pokemon { 
    constructor (nombre) {  
        super(nombre, 'Agua') 
    }
    attack (pokemon) {  
        if (pokemon.type === 'Fuego') {   
        super.attack(pokemon)  
        super.attack(pokemon)  
        } else {  
        super.attack(pokemon)  
        }  
    } 
}
class PokemonAgua extends Pokemon { 
    constructor (nombre) {  
        super(nombre, 'Fuego') 
    }
    attack (pokemon) {  
        if (pokemon.type === 'Planta') {   
        super.attack(pokemon)  
        super.attack(pokemon)  
        } else {  
        super.attack(pokemon)  
        }  
    } 
}

class PokemonAgua extends Pokemon { 
    constructor (nombre) {  
        super(nombre, 'Eléctrico') 
    }
    attack (pokemon) {  
        if (pokemon.type === 'Agua') {   
        super.attack(pokemon)  
        super.attack(pokemon)  
        } else {  
        super.attack(pokemon)  
        }  
    } 
}

class PokemonAgua extends Pokemon { 
    constructor (nombre) {  
        super(nombre, 'Planta') 
    }
    attack (pokemon) {  
        if (pokemon.type === 'Eléctrico') {   
        super.attack(pokemon)  
        super.attack(pokemon)  
        } else {  
        super.attack(pokemon)  
        }  
    } 
}


    const charizard = new PokemonFuego('Charizard')  
    const squirtle = new PokemonAgua('Squirtle') 
    squirtle.attack(charizard) // ??  
    charizard.attack(squirtle) // ??



