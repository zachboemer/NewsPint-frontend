import React from 'react';
import beer from '../beer.svg'

const ComingSoon = () => {
    return (
        <div className="coming-soon">
        <header className="App-header">
        <img src={beer} className="App-logo" alt="logo" />
            <h1>Welcome to NewsPint</h1>
            <p>We are currently working on building the best news aggregator you've ever seen.</p>
            <p>Stay tuned for our launch.</p>
            </header>
        </div>
    );
}

export default ComingSoon;
