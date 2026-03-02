import CharacterCard from './CharacterCard';
import type {Kana} from '../data/kana';

interface StudyModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function StudyMode({ script, kanaData }: StudyModeProps) {
    const characters = kanaData.map((kana, index) => ({
        id: index,
        character: script === 'hiragana' ? kana.hiragana : kana.katakana,
        romanji: kana.romanji,
    }));

    return (
        <div className="character-grid">
            <h2>{script === 'hiragana' ? 'Hiragana' : 'Katakana'}</h2>
            <div className="grid">
                {characters.map((char) => (
                    <CharacterCard lettre={char} key={char.id} />
                ))}
            </div>
        </div>
    );
}

export default StudyMode;