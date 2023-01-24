import React from 'react';
//import beer from '../assets/beer.svg'
import '../assets/landingPage.scss';
const LandingPage = () => {
    return (
        <div className="landing-page">
        <header className="body">
            <h1>Welcome to NewsPint</h1>
            <p>NewsPint is a web application that helps you stay informed by providing a daily summary of the most important news stories.</p>
            <p>We use the NewsAPI to gather the top news stories of the day and provide a summary for you to quickly stay informed.</p>
            <p>To see today's news pint, click on the Pint icon above.</p>
            </header>
        </div>
    );
}

export default LandingPage;
