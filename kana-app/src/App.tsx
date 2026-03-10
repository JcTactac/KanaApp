import './style.css';
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { kanaData } from './data/kana';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    return (
        <div className="App">
            <h1>KanaApp - Jean Chrisophe Lay</h1>

            <nav className="mode-navigation">
                <button
                    className={location.pathname === '/study' ? 'active' : ''}
                    onClick={() => navigate('/study')}
                >
                    Mode Étude
                </button>
                <button
                    className={location.pathname === '/quiz' ? 'active' : ''}
                    onClick={() => navigate('/quiz')}
                >
                    Mode Quiz
                </button>
            </nav>

            {location.pathname === '/study' && (
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

            <Routes>
                <Route path="/study" element={<StudyMode script={script} kanaData={kanaData} />} />
                <Route path="/quiz" element={<QuizMode script={script} kanaData={kanaData} />} />
                <Route path="*" element={<Navigate to="/study" replace />} />
            </Routes>
        </div>
    );
}

export default App;