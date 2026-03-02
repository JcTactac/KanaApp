import CharacterCard, { type Caractere } from "./CharacterCard";

export interface GrilleCharacter {
    characters: Caractere[];
    title: string;
}

function CharacterGrid({ characters, title }: GrilleCharacter) {
    return (
        <div className="character-grid">
            <h2>{title}</h2>
            <div className="grid">
                {characters.map((char) => (
                    <CharacterCard lettre={char} key={char.id} />
                ))}
            </div>
        </div>
    );
}

export default CharacterGrid;