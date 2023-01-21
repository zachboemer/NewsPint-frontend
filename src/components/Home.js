import React, { useState, useEffect } from 'react';
import { getArticles } from '../api/api';

// getting a CORS error, need to look into that

const Home = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await getArticles();
                setArticles(fetchedArticles);
            } catch (error) {
                console.error(error);
            }
        }
        fetchArticles();
    }, []);
    
    return (
        <div>
            <h1>NewsPint</h1>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <img src={article.image_url} alt={article.title} />
                    <p>{article.summary}</p>
                    <a href={article.url}>Read more</a>
                </div>
            ))}
        </div>
    );
}

export default Home;
