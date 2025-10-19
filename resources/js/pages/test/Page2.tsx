import React from 'react';
import { useForm } from '@inertiajs/react';

const TestPage2 = () => {
    const { data, setData, post, processing } = useForm({
        answers: {
            q1: '', q2: '', q3: '', q4: '', q5: '',
            q6: '', q7: '', q8: '', q9: '', q10: ''
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/test/page3');
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
            question: 'Что нельзя увидеть, но можно почувствовать?',
            options: ['a) Любовь', 'b) Ветер', 'c) Тепло', 'd) Боль']
        },
        {
            id: 'q2',
            question: 'Что имеет корни, но не растет?',
            options: ['a) Дерево', 'b) Гора', 'c) Зуб', 'd) Река']
        },
        {
            id: 'q3',
            question: 'Что можно держать в правой руке, но нельзя в левой?',
            options: ['a) Левый локоть', 'b) Правый локоть', 'c) Мяч', 'd) Книга']
        },
        {
            id: 'q4',
            question: 'Что заполняет комнату, но не занимает места?',
            options: ['a) Свет', 'b) Воздух', 'c) Звук', 'd) Запах']
        },
        {
            id: 'q5',
            question: 'Что имеет руки, но не может аплодировать?',
            options: ['a) Часы', 'b) Человек', 'c) Робот', 'd) Кукла']
        },
        {
            id: 'q6',
            question: 'Что можно сломать, даже не прикасаясь к нему?',
            options: ['a) Обещание', 'b) Стекло', 'c) Сердце', 'd) Зеркало']
        },
        {
            id: 'q7',
            question: 'Что становится тяжелее, когда его поднимают?',
            options: ['a) Весы', 'b) Якорь', 'c) Зонт', 'd) Сумка']
        },
        {
            id: 'q8',
            question: 'Что имеет лицо, но не может улыбаться?',
            options: ['a) Часы', 'b) Луна', 'c) Кукла', 'd) Маска']
        },
        {
            id: 'q9',
            question: 'Что можно съесть, но нельзя проглотить?',
            options: ['a) Суп', 'b) Жвачку', 'c) Ложку', 'd) Воздух']
        },
        {
            id: 'q10',
            question: 'Что можно слышать, но нельзя увидеть?',
            options: ['a) Эхо', 'b) Ветер', 'c) Тишину', 'd) Мысли']
        }
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card border">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Test. Page 2</h2>
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

export default TestPage2;