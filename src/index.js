class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.hp = 100;
  }
  attack(pokemon) {
    pokemon.hp -= 10;
  }
  dead(pokemon) {
   console.log("Tu pokemon ha muerto, llevalo al centro pokemon");
  }
}

class PokemonAgua extends Pokemon {
  constructor(nombre) {
    super(nombre, "Agua");
  }
  attack(pokemon) {
    if (pokemon.type === "Fuego") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
    if ( pokemon.hp -= 0;) {
      super.dead(pokemon) ;
    }
  }
}

class PokemonFuego extends Pokemon {
  constructor (name) {
    super(name, 'Fuego')
  }
  attack(pokemon) {
    if (pokemon.type === "Planta") {
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
    if ( pokemon.hp -= 0;) {
      super.dead(pokemon) ;
    }
  }
}
class PokemonElectrico extends Pokemon {
  constructor (name) {
    super(name, 'Electrico')
  }
  attack(pokemon) {
    if (pokemon.type === "Agua") {
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
    if ( pokemon.hp -= 0;) {
      super.dead(pokemon) ;
    }
  }
}

class PokemonPlanta extends Pokemon {
  constructor (name) {
    super(name, 'Planta')
  }
  attack(pokemon) {
    if (pokemon.type === "Eléctrico") {
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
    if ( pokemon.hp -= 0;) {
      super.dead(pokemon) ;
    }
  }
}


