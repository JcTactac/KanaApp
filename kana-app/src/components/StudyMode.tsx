import CharacterCard from './CharacterCard';
import type { Kana } from '../data/kana';

interface StudyModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

const ROW_SIZES = [5,5,5,5,5,5,5,3,5,2,1,5,5,5,5,5];

function StudyMode({ script, kanaData }: StudyModeProps) {
    const rows: Kana[][] = [];
    let cursor = 0;
    for (const size of ROW_SIZES) {
        rows.push(kanaData.slice(cursor, cursor + size));
        cursor += size;
    }

    return (
        <div className="character-grid">
            <h2>{script === 'hiragana' ? 'Hiragana' : 'Katakana'}</h2>
            <div className="gojuon-grid">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="gojuon-row">
                        {row.map((kana, colIndex) => (
                            <CharacterCard
                                key={`${rowIndex}-${colIndex}`}
                                lettre={{
                                    id: rowIndex * 5 + colIndex,
                                    character: script === 'hiragana' ? kana.hiragana : kana.katakana,
                                    romanji: kana.romanji,
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudyMode;