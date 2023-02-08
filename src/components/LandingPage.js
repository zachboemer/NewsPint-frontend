import React,  { useState, useEffect } from 'react';
import axios from 'axios';
//import beer from '../assets/beer.svg'
import '../assets/landingPage.scss';
//import { GridColumn } from 'semantic-ui-react';
import GithubCard from './GithubCard';
//import { Card, Image, Header, CardMeta, Container, Grid } from 'semantic-ui-react';
const LandingPage = () => {

    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://api.github.com/users/zachboemer');
            const result2 = await axios.get('https://api.github.com/users/sandlionman');
            setGithubData([result.data, result2.data]);
            };
        fetchData();
     }, []);




    return (
        <>
            <div className="landing-page-text">
                <header className="body">
                    <h1>Introducing NewsPint</h1>
                    <p>Our aim with this project is to make staying informed effortless and convenient. That's why we've created a news aggregator that consolidates the latest news from 8 diverse categories, making it easier for you to keep up with what's happening in the world.</p>
                    <p>Everyday at 5pm CST, our platform retrieves 16 articles from NewsAPI, covering a range of topics including business, entertainment, sports, health, esports, technology, politics, and Ukraine. This way, you can stay informed without having to spend hours sifting through countless articles.</p>
                    <p>Both the <a href="https://github.com/zachboemer/NewsPint-frontend">frontend</a> and <a href="https://github.com/zachboemer/NewsPint">backend</a> repositories are available for view.</p>
                    <h2>Cheers! 🍻</h2>
                </header>
                
            </div>
            <div className="github-card">
            {githubData.map((data) => (
                <GithubCard githubData={data} key={data.id} />
            ))}
            </div>
            
        </>
    );
}

export default LandingPage;
