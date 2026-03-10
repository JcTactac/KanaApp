import { useRef, useEffect, useState, useMemo } from 'react';
import { useQuiz, type QuizMode as QuizModeType } from '../hooks/useQuiz.tsx';
import KanaFilter from './KanaFilter';
import type { Kana } from '../data/kana';

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const [mode, setMode] = useState<QuizModeType>('kana-to-romaji');

    const availableGroups = useMemo(
        () => [...new Set(kanaData.map((k) => k.group))],
        [kanaData]
    );

    const [selectedGroups, setSelectedGroups] = useState<string[]>(
        () => [...new Set(kanaData.map((k) => k.group))]
    );

    const filteredKana = useMemo(
        () => kanaData.filter((k) => selectedGroups.includes(k.group)),
        [kanaData, selectedGroups]
    );

    const {
        displayChar,
        placeholder,
        userAnswer,
        setUserAnswer,
        score,
        bestScore,
        feedback,
        showFeedback,
        handleSubmit,
    } = useQuiz(filteredKana, script, mode);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!showFeedback) inputRef.current?.focus();
    }, [displayChar, showFeedback]);

    return (
        <div className="quiz-container">

            {/* ── Sidebar gauche ── */}
            <aside className="quiz-sidebar">
                <div className="score">
                    Score : {score.correct} / {score.total}
                    {score.total > 0 && (
                        <span className="percentage">
                            {Math.round((score.correct / score.total) * 100)}%
                        </span>
                    )}
                    {bestScore > 0 && (
                        <span className="best-score">🏆 Record : {bestScore}%</span>
                    )}
                </div>

                <div className="mode-toggle">
                    <button
                        className={mode === 'kana-to-romaji' ? 'active' : ''}
                        onClick={() => setMode('kana-to-romaji')}
                    >
                        Kana → Rōmaji
                    </button>
                    <button
                        className={mode === 'romaji-to-kana' ? 'active' : ''}
                        onClick={() => setMode('romaji-to-kana')}
                    >
                        Rōmaji → Kana
                    </button>
                </div>

                <KanaFilter
                    availableGroups={availableGroups}
                    selectedGroups={selectedGroups}
                    onChange={setSelectedGroups}
                />
            </aside>

            <div className="quiz-card">
                <div className="quiz-character">
                    <span className="big-kana">{displayChar}</span>
                </div>

                <form onSubmit={handleSubmit} className="quiz-form">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder={placeholder}
                        disabled={showFeedback}
                        className="quiz-input"
                    />
                    <button type="submit" disabled={showFeedback} className="quiz-button">
                        Valider
                    </button>
                </form>

                {showFeedback && (
                    <div className={`feedback ${feedback.includes('✅') ? 'correct' : 'incorrect'}`}>
                        {feedback}
                    </div>
                )}
            </div>

        </div>
    );
}

export default QuizMode;