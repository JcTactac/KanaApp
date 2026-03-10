import './style.css';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { kanaData } from './data/kana';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1>Apprentissage du Japonais - Kana</h1>

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

            <Routes>
                <Route path="/study" element={<StudyMode kanaData={kanaData} />} />
                <Route path="/quiz" element={<QuizMode script="hiragana" kanaData={kanaData} />} />
                <Route path="*" element={<Navigate to="/study" replace />} />
            </Routes>
        </div>
    );
}

export default App;