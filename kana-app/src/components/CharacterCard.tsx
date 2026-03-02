export interface Caractere {
    id: number;
    character: string;
    romanji: string;
}

interface CaracterePrivate {
    lettre: Caractere,
    character?: string
}

function CharacterCard({lettre}: CaracterePrivate) {
    return (
        <div className="character-card">
            <span className="kana">{lettre.character}</span>
            <span className="romanji">{lettre.romanji}</span>
        </div>
    );
}

export default CharacterCard;