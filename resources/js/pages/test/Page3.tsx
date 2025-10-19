import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const TestPage3 = () => {
    const { data, setData, post, processing } = useForm({
        q1: '', q2: '', q3: '', q4: '', q5: '',
        q6: '', q7: '', q8: '', q9: '', q10: ''
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const allAnswered = Object.values(data).every(answer => answer !== '');

        if (!allAnswered) {
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        post('/test/results');
    };

    const handleAnswerChange = (question: string, value: string) => {
        setData(question as any, value);

        if (showAlert) {
            setShowAlert(false);
        }
    };

    const questions = [
        {
            id: 'q1',
            question: 'Что исчезает, как только его называют?',
            options: ['a) Тишина', 'b) Секрет', 'c) Молчание', 'd) Сон']
        },
        {
            id: 'q2',
            question: 'Что можно сломать, даже не прикасаясь к нему?',
            options: ['a) Обещание', 'b) Стекло', 'c) Сердце', 'd) Зеркало']
        },
        {
            id: 'q3',
            question: 'Что становится тяжелее, когда его поднимают?',
            options: ['a) Весы', 'b) Якорь', 'c) Зонт', 'd) Сумка']
        },
        {
            id: 'q4',
            question: 'Что имеет лицо, но не может улыбаться?',
            options: ['a) Часы', 'b) Луна', 'c) Кукла', 'd) Маска']
        },
        {
            id: 'q5',
            question: 'Что можно съесть, но нельзя проглотить?',
            options: ['a) Суп', 'b) Жвачку', 'c) Ложку', 'd) Воздух']
        },
        {
            id: 'q6',
            question: 'Что можно слышать, но нельзя увидеть?',
            options: ['a) Эхо', 'b) Ветер', 'c) Тишину', 'd) Мысли']
        },
        {
            id: 'q7',
            question: 'Что имеет крылья, но не может летать?',
            options: ['a) Здание', 'b) Самолет', 'c) Птица', 'd) Ветер']
        },
        {
            id: 'q8',
            question: 'Что всегда мокрое, когда идет?',
            options: ['a) Дождь', 'b) Рыба', 'c) Кит', 'd) Вода']
        },
        {
            id: 'q9',
            question: 'Что имеет кольца, но нет пальцев?',
            options: ['a) Телефон', 'b) Дерево', 'c) Сатурн', 'd) Бокс']
        },
        {
            id: 'q10',
            question: 'Что принадлежит тебе, но другие используют чаще?',
            options: ['a) Имя', 'b) Телефон', 'c) Деньги', 'd) Время']
        }
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card border border-primary">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Test. Page 3</h2>
                            <p className="text-muted text-center mb-4">Выберите один правильный ответ для каждого вопроса</p>

                            <form onSubmit={handleSubmit} className="border rounded p-3">
                                {questions.map((q, index) => (
                                    <div key={q.id} className="p-3">
                                        <h5 className="mb-3">Вопрос {index + 1}: {q.question}</h5>
                                        <div className="row">
                                            {q.options.map((option) => (
                                                <div key={option} className="col-md-6 mb-2">
                                                    <label className="form-check-label d-block">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={q.id}
                                                                value={option.charAt(0)}
                                                                checked={(data as any)[q.id] === option.charAt(0)}
                                                                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                                            />
                                                            {option}
                                                        </div>
                                                    </label>
                                                </div>
                                            ))}
                                            <div className="border-top mt-3"></div>
                                        </div>
                                    </div>
                                ))}

                                <div className="text-center mt-4">
                                    {showAlert && (
                                        <div className="alert alert-warning mb-3">
                                            Please make all questions answered!
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-success btn-lg" disabled={processing}>
                                        {processing ? 'Load...' : 'Finish'}
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

export default TestPage3;