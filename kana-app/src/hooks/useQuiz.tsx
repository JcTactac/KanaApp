import { useState, useMemo, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage.tsx';
import type { Kana } from '../data/kana.ts';

function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export type QuizMode = 'kana-to-romaji' | 'romaji-to-kana';

export function useQuiz(
    kanaData: Kana[],
    script: 'hiragana' | 'katakana',
    mode: QuizMode = 'kana-to-romaji'
) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [bestScore, setBestScore] = useLocalStorage<number>('kana-best-score', 0);

    const shuffledKana = useMemo(() => shuffle(kanaData), [kanaData]);
    const currentKana = shuffledKana[currentIndex];

    const displayChar = mode === 'kana-to-romaji'
        ? (script === 'hiragana' ? currentKana.hiragana : currentKana.katakana)
        : currentKana.romanji;

    const placeholder = mode === 'kana-to-romaji'
        ? 'Tapez le rōmaji...'
        : `Tapez le ${script === 'hiragana' ? 'hiragana' : 'katakana'}...`;

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (userAnswer.trim() === '') return;

        const correctAnswer = mode === 'kana-to-romaji'
            ? currentKana.romanji
            : (script === 'hiragana' ? currentKana.hiragana : currentKana.katakana);

        const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase();

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
                : `❌ Incorrect. C'était "${correctAnswer}"`
        );
        setShowFeedback(true);
        setUserAnswer('');

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % shuffledKana.length);
            setShowFeedback(false);
            setFeedback('');
        }, 1500);
    }, [userAnswer, currentKana, score, bestScore, mode, script, shuffledKana.length]);

    return {
        displayChar,
        placeholder,
        userAnswer,
        setUserAnswer,
        score,
        bestScore,
        feedback,
        showFeedback,
        handleSubmit,
    };
}