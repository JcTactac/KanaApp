export interface Caractere {
    id: number
    character: string;
    romanji: string;
}

interface caracterePrivate {
    lettre: Caractere
}

function CharacterCard({lettre}: caracterePrivate) {
    return (
        <div className="character-card">
            <p>Caractère japonais: {lettre.character}</p>
            <p>Prononciation (rōmaji): {lettre.romanji}</p>
        </div>
    );
}

export default CharacterCard;