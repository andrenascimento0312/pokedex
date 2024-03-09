interface PokemonStatusProps {
    className?: string;
    typePokemon?: TypePokemon;
    typeColor: string;
    idPokemon?: string;
    namePokemon?: string;
    imagePokemon?: string;
}

interface TypePokemon {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export type { PokemonStatusProps };