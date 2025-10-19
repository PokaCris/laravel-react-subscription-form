import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const TestPage1 = () => {
    const { data, setData, post, processing } = useForm({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

    const questions = [
        { id: 'q1', number: 1, question: 'Что всегда идет вперед, но никогда не возвращается?', options: ['a) Время', 'b) Тень', 'c) Машина', 'd) История'] },
        { id: 'q2', number: 2, question: 'Что всегда перед нами, но мы не можем его увидеть?', options: ['a) Будущее', 'b) Тень', 'c) Ветер', 'd) Море'] },
        { id: 'q3', number: 3, question: 'Что всегда идет вверх, но никогда не опускается вниз?', options: ['a) Возраст', 'b) Температура', 'c) Цена', 'd) Река'] },
        { id: 'q4', number: 4, question: 'Что можно сломать, даже не прикасаясь к нему?', options: ['a) Обещание', 'b) Стекло', 'c) Сердце', 'd) Зеркало'] },
        { id: 'q5', number: 5, question: 'Что становится влажным при сушке?', options: ['a) Полотенце', 'b) Руки', 'c) Волосы', 'd) Тело'] },
        { id: 'q6', number: 6, question: 'Что имеет города, но не имеет домов?', options: ['a) Карта', 'b) Страна', 'c) Облака', 'd) Книга'] },
        { id: 'q7', number: 7, question: 'Что можно поймать, но нельзя бросить?', options: ['a) Простуду', 'b) Мяч', 'c) Взгляд', 'd) Такси'] },
        { id: 'q8', number: 8, question: 'Что принадлежит вам, но другие используют это чаще?', options: ['a) Имя', 'b) Телефон', 'c) Деньги', 'd) Время'] },
        { id: 'q9', number: 9, question: 'Что становится больше, если его перевернуть?', options: ['a) Число 6', 'b) Гора', 'c) Дом', 'd) Дерево'] },
        { id: 'q10', number: 10, question: 'Что имеет ключ, но не может открыть замок?', options: ['a) Клавиатура', 'b) Карта', 'c) Книга', 'd) Компьютер'] }
    ];

    const shuffleQuestions = (questionsArray: any[]) => {
        const shuffled = [...questionsArray];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        setShuffledQuestions(shuffleQuestions(questions));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!Object.values(data).every(answer => answer !== '')) {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        post('/test/page2');
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card border border-primary">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Test. Page 1</h2>
                            <p className="text-muted text-center mb-4">Выберите один правильный ответ для каждого вопроса</p>

                            <form onSubmit={handleSubmit}>
                                {shuffledQuestions.map((q, index) => (
                                    <div key={q.id} className="mb-4 p-3 border rounded">
                                        <h5 className="mb-3">Вопрос {q.number}: {q.question}</h5>
                                        <div className="row">
                                            {q.options.map((option: string) => (
                                                <div key={option} className="col-md-6 mb-2">
                                                    <label className="form-check-label d-block">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={q.id}
                                                                value={option.charAt(0)}
                                                                checked={data[q.id as keyof typeof data] === option.charAt(0)}
                                                                onChange={(e) => setData(q.id as any, e.target.value)}
                                                            />
                                                            {option}
                                                        </div>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="text-center mt-4">
                                    {showAlert && <div className="alert alert-warning mb-3">Please answer all questions!</div>}
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={processing}>
                                        {processing ? 'Loading...' : 'Next'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage1;