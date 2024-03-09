interface PokemonDetailsTypes {


    sprites?: {
        front_default?: string;
    };

    types?: PokemonTypes[];
    name?: string

}


interface PokemonTypes {
    type?: pokemonType[];
}

interface pokemonType {
    name?: string
}


export type { PokemonDetailsTypes };