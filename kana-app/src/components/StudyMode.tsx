import CharacterCard from './CharacterCard';
import type { Kana } from '../data/kana';

interface StudyModeProps {
    kanaData: Kana[];
}

const ROW_SIZES = [5,5,5,5,5,5,5,3,5,2,1,5,5,5,5,5];

function StudyMode({ kanaData }: StudyModeProps) {
    const rows: Kana[][] = [];
    let cursor = 0;
    for (const size of ROW_SIZES) {
        rows.push(kanaData.slice(cursor, cursor + size));
        cursor += size;
    }

    const renderGrid = (script: 'hiragana' | 'katakana') => (
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
    );

    return (
        <>
            <div className="character-grid">
                <h2>Hiragana</h2>
                {renderGrid('hiragana')}
            </div>
            <div className="character-grid">
                <h2>Katakana</h2>
                {renderGrid('katakana')}
            </div>
        </>
    );
}

export default StudyMode;