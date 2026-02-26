import './App.css';
import CharacterGrid from "./components/CharacterGrid";
import { kanaData } from "./data/kana";

function App() {
    const kanaWithId = kanaData.map((k, index) => ({
        id: index,
        character: k.hiragana, // Pour Hiragana
        romanji: k.romanji,
    }));

    const kanaKatakanaWithId = kanaData.map((k, index) => ({
        id: index,
        character: k.katakana, // Pour Katakana
        romanji: k.romanji,
    }));

    return (
        <div className="App">
            <h1>Apprentissage du Japonais - Kana</h1>

            <CharacterGrid characters={kanaWithId} title="Hiragana" />
            <CharacterGrid characters={kanaKatakanaWithId} title="Katakana" />
        </div>
    );
}

export default App;
