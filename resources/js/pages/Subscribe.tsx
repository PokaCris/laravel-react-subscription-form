import React, { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (subscribe) {
            setShowSuccess(true);
        } else {
            window.location.reload();
        }
    };

    const resetForm = () => {
        setShowSuccess(false);
        setEmail('');
        setSubscribe(false);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border">
                        <div className="card-body p-4">
                            {showSuccess ? (
                                <div className="text-center">
                                    <div className="alert alert-success">
                                        <h4>Thank you for subscribing!</h4>
                                        <p>We will send updates to: {email}</p>
                                        <button onClick={resetForm} className="btn btn-secondary">
                                            Back form
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="email" className="col-sm-3 col-form-label fs-4">
                                            Email
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="subscribe"
                                            checked={subscribe}
                                            onChange={(e) => setSubscribe(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="subscribe">
                                            Subscribe to newsletter
                                        </label>
                                    </div>

                                    <div className="d-flex gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Send
                                        </button>
                                        <a href="/" className="btn btn-outline-secondary btn-lg">
                                            Back home
                                        </a>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;