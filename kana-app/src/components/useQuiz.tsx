import { useState } from 'react';
import type { Kana } from '../data/kana';
import {useLocalStorage} from "./useLocalStorage.tsx";

export function useQuiz(kanaData: Kana[], script: 'hiragana' | 'katakana') {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [bestScore, setBestScore] = useLocalStorage<number>('kana-best-score', 0);

    const currentKana = kanaData[currentIndex];
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
            setCurrentIndex((prev) => (prev + 1) % kanaData.length);
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