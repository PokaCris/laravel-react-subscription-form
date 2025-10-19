import React from 'react';
import { useForm } from '@inertiajs/react';

const TestPage1 = () => {
    const { data, setData, post, processing } = useForm({
        answers: {
            q1: '', q2: '', q3: '', q4: '', q5: '',
            q6: '', q7: '', q8: '', q9: '', q10: ''
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/test/page2');
    };

    const handleAnswerChange = (question: string, value: string) => {
        setData('answers', {
            ...data.answers,
            [question]: value
        });
    };

    const questions = [
        {
            id: 'q1',
            question: 'Что всегда идет вперед, но никогда не возвращается?',
            options: ['a) Время', 'b) Тень', 'c) Машина', 'd) История']
        },
        {
            id: 'q2',
            question: 'Что всегда перед нами, но мы не можем его увидеть?',
            options: ['a) Будущее', 'b) Тень', 'c) Ветер', 'd) Море']
        },
        {
            id: 'q3',
            question: 'Что всегда идет вверх, но никогда не опускается вниз?',
            options: ['a) Возраст', 'b) Температура', 'c) Цена', 'd) Река']
        },
        {
            id: 'q4',
            question: 'Что можно сломать, даже не прикасаясь к нему?',
            options: ['a) Обещание', 'b) Стекло', 'c) Сердце', 'd) Зеркало']
        },
        {
            id: 'q5',
            question: 'Что становится влажным при сушке?',
            options: ['a) Полотенце', 'b) Руки', 'c) Волосы', 'd) Тело']
        },
        {
            id: 'q6',
            question: 'Что имеет города, но не имеет домов?',
            options: ['a) Карта', 'b) Страна', 'c) Облака', 'd) Книга']
        },
        {
            id: 'q7',
            question: 'Что можно поймать, но нельзя бросить?',
            options: ['a) Простуду', 'b) Мяч', 'c) Взгляд', 'd) Такси']
        },
        {
            id: 'q8',
            question: 'Что принадлежит вам, но другие используют это чаще?',
            options: ['a) Имя', 'b) Телефон', 'c) Деньги', 'd) Время']
        },
        {
            id: 'q9',
            question: 'Что становится больше, если его перевернуть?',
            options: ['a) Число 6', 'b) Гора', 'c) Дом', 'd) Дерево']
        },
        {
            id: 'q10',
            question: 'Что имеет ключ, но не может открыть замок?',
            options: ['a) Клавиатура', 'b) Карта', 'c) Книга', 'd) Компьютер']
        }
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card border">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Test. Page 1</h2>
                            <p className="text-muted text-center mb-4">Выберите один правильный ответ для каждого вопроса</p>

                            <form onSubmit={handleSubmit} className="border rounded p-3">
                                {questions.map((q, index) => (
                                    <div key={q.id} className=" p-3">
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
                                                                checked={(data.answers as any)[q.id] === option.charAt(0)}
                                                                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                                                required
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
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={processing}>
                                        {processing ? 'Load...' : 'Next'}
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