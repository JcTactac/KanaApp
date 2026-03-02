import './style.css';
import { useState } from 'react';
import { kanaData } from './data/kana';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';

function App() {
    const [mode, setMode] = useState<'study' | 'quiz'>('study');
    // état permettant de filtrer/afficher les bonnes données
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    const switchMode = (newMode: 'study' | 'quiz') => {
        setMode(newMode);
    };

    return (
        <div className="App">
            <h1>KanaApp - Jean Christophe Lay</h1>

            <nav className="mode-navigation">
                <button
                    className={mode === 'study' ? 'active' : ''}
                    onClick={() => switchMode('study')}
                >
                    Mode Étude
                </button>
                <button
                    className={mode === 'quiz' ? 'active' : ''}
                    onClick={() => switchMode('quiz')}
                >
                    Mode Quiz
                </button>
            </nav>

            {mode === 'study' && (
                <div className="script-selector">
                    <label className={script === 'hiragana' ? 'active' : ''}>
                        <input
                            type="radio"
                            name="script"
                            checked={script === 'hiragana'}
                            onChange={() => setScript('hiragana')}
                        />
                        Hiragana
                    </label>
                    <label className={script === 'katakana' ? 'active' : ''}>
                        <input
                            type="radio"
                            name="script"
                            checked={script === 'katakana'}
                            onChange={() => setScript('katakana')}
                        />
                        Katakana
                    </label>
                </div>
            )}

            {mode === 'study' && (
                <StudyMode script={script} kanaData={kanaData} />
            )}

            {mode === 'quiz' && (
                <QuizMode script={script} kanaData={kanaData} />
            )}
        </div>
    );
}

export default App;