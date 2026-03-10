import { useRef, useEffect } from 'react';
import type { Kana } from '../data/kana';
import {useQuiz} from "./useQuiz.tsx";

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const {
        displayChar,
        userAnswer,
        setUserAnswer,
        score,
        bestScore,
        feedback,
        showFeedback,
        handleSubmit,
    } = useQuiz(kanaData, script);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!showFeedback) {
            inputRef.current?.focus();
        }
    }, [displayChar, showFeedback]);

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <div className="score">
                    Score : {score.correct} / {score.total}
                    {score.total > 0 && (
                        <span className="percentage">
                            {' '}({Math.round((score.correct / score.total) * 100)}%)
                        </span>
                    )}
                    {bestScore > 0 && (
                        <span className="best-score"> 🏆 Record : {bestScore}%</span>
                    )}
                </div>
            </div>

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
                        placeholder="Tapez le rōmaji..."
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