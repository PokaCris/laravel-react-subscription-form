import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const TestPage2 = () => {
    const { data, setData, post, processing } = useForm({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

    const questions = [
        { id: 'q1', number: 1, question: 'Что нельзя увидеть, но можно почувствовать?', options: ['a) Любовь', 'b) Ветер', 'c) Тепло', 'd) Боль'] },
        { id: 'q2', number: 2, question: 'Что имеет корни, но не растет?', options: ['a) Дерево', 'b) Гора', 'c) Зуб', 'd) Река'] },
        { id: 'q3', number: 3, question: 'Что можно держать в правой руке, но нельзя в левой?', options: ['a) Левый локоть', 'b) Правый локоть', 'c) Мяч', 'd) Книга'] },
        { id: 'q4', number: 4, question: 'Что заполняет комнату, но не занимает места?', options: ['a) Свет', 'b) Воздух', 'c) Звук', 'd) Запах'] },
        { id: 'q5', number: 5, question: 'Что имеет руки, но не может аплодировать?', options: ['a) Часы', 'b) Человек', 'c) Робот', 'd) Кукла'] },
        { id: 'q6', number: 6, question: 'Что можно сломать, даже не прикасаясь к нему?', options: ['a) Обещание', 'b) Стекло', 'c) Сердце', 'd) Зеркало'] },
        { id: 'q7', number: 7, question: 'Что становится тяжелее, когда его поднимают?', options: ['a) Весы', 'b) Якорь', 'c) Зонт', 'd) Сумка'] },
        { id: 'q8', number: 8, question: 'Что имеет лицо, но не может улыбаться?', options: ['a) Часы', 'b) Луна', 'c) Кукла', 'd) Маска'] },
        { id: 'q9', number: 9, question: 'Что можно съесть, но нельзя проглотить?', options: ['a) Суп', 'b) Жвачку', 'c) Ложку', 'd) Воздух'] },
        { id: 'q10', number: 10, question: 'Что можно слышать, но нельзя увидеть?', options: ['a) Эхо', 'b) Ветер', 'c) Тишину', 'd) Мысли'] }
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
        post('/test/page3');
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card border border-primary">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Test. Page 2</h2>
                            <p className="text-muted text-center mb-4">Выберите один правильный ответ для каждого вопроса</p>

                            <form onSubmit={handleSubmit}>
                                {shuffledQuestions.map((q) => (
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

export default TestPage2;