const Welcome = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>Welcome to Application</h1>
            <div className="mt-4">
                <a href="/subscribe" className="btn btn-primary btn-lg me-3">
                    Go to Subscribe Form
                </a>
                <a href="/test/page1" className="btn btn-success btn-lg">
                    Start Test
                </a>
            </div>
        </div>
    );
};

export default Welcome;