import { useState } from 'react';
import type {Kana} from '../data/kana';

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    // Permet de déterminer quel caractère on doit afficher
    const currentKana = kanaData[currentIndex];
    const displayChar = script === 'hiragana'
        ? currentKana.hiragana
        : currentKana.katakana;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        if (userAnswer.trim() === '') return;

        /*
         Permet de valider ou non la réponse utilisateur (enlève les espaces avec trim et met la réponse
         en miniscule avec lowercase)
         */
        const isCorrect = userAnswer.toLowerCase().trim() ===
            currentKana.romanji.toLowerCase();

        setScore({
            correct: score.correct + (isCorrect ? 1 : 0),
            total: score.total + 1,
        });

        setFeedback(
            isCorrect
                ? '✅ Correct !'
                : `❌ Incorrect. C'était "${currentKana.romanji}"`
        );
        setShowFeedback(true);
        setUserAnswer('');

        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % kanaData.length);
            setShowFeedback(false);
            setFeedback('');
        }, 1500);
    };

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
                </div>
            </div>

            <div className="quiz-card">
                <div className="quiz-character">
                    <span className="big-kana">{displayChar}</span>
                </div>

                <form onSubmit={handleSubmit} className="quiz-form">
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Tapez le rōmaji..."
                        autoFocus
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