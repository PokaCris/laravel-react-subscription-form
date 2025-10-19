import { usePage } from '@inertiajs/react';

const TestResults = () => {
    const { props } = usePage();
    const flash = (props as any).flash || {};

    const finalScore = flash.final_score || 0;

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-success';
        if (score >= 60) return 'text-primary';
        if (score >= 40) return 'text-warning';
        return 'text-danger';
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border">
                        <div className="card-body p-5 text-center">
                            <div className="mb-4">
                                <h1 className={`display-5 fw-bold`}>Congratulations!</h1>
                            </div>

                            <div className="mb-4 p-4 bg-light rounded">
                                <h2 className={`fw-bold ${getScoreColor(finalScore)}`}>Your score: {finalScore} / 90</h2>
                            </div>

                            <div className="d-grid gap-2 d-md-flex justify-content-center">
                                <a href="/test/page1" className="btn btn-primary btn-lg me-md-2">Repeat</a>
                                <a href="/" className="btn btn-outline-secondary btn-lg">Back home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResults;