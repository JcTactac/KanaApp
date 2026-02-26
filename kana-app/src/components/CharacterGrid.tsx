import CharacterCard, {type Caractere } from "./CharacterCard";

export interface GrilleCharacter {
    characters: Caractere[];
    title: string;
}

function CharacterGrid({ characters, title }: GrilleCharacter) {
    return (
        <div className="character-grid">
            <h2>{title}</h2>
            <div className="grid" style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", justifyItems: "center",}}>
                {characters.map((char) => (
                    <CharacterCard lettre={char} key={char.id} />
                ))}
            </div>
        </div>
    );
}

export default CharacterGrid;
