import { useState, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Kana } from '../data/kana';

// Fonction pour mélanger les cards
function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function useQuiz(kanaData: Kana[], script: 'hiragana' | 'katakana') {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [bestScore, setBestScore] = useLocalStorage<number>('kana-best-score', 0);

    // Le mélange ne se recalcule que si kanaData change réellement
    const shuffledKana = useMemo(() => shuffle(kanaData), [kanaData]);

    const currentKana = shuffledKana[currentIndex];
    const displayChar = script === 'hiragana' ? currentKana.hiragana : currentKana.katakana;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userAnswer.trim() === '') return;

        const isCorrect =
            userAnswer.toLowerCase().trim() === currentKana.romanji.toLowerCase();

        const newScore = {
            correct: score.correct + (isCorrect ? 1 : 0),
            total: score.total + 1,
        };

        setScore(newScore);

        const newPercentage = Math.round((newScore.correct / newScore.total) * 100);
        if (newScore.total >= 5 && newPercentage > bestScore) {
            setBestScore(newPercentage);
        }

        setFeedback(
            isCorrect
                ? '✅ Correct !'
                : `❌ Incorrect. C'était "${currentKana.romanji}"`
        );
        setShowFeedback(true);
        setUserAnswer('');

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % shuffledKana.length);
            setShowFeedback(false);
            setFeedback('');
        }, 1500);
    };

    return {
        displayChar,
        userAnswer,
        setUserAnswer,
        score,
        bestScore,
        feedback,
        showFeedback,
        handleSubmit,
    };
}