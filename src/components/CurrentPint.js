import React, { useState, useEffect } from 'react';
import { getPintOfDay } from '../api/api';
import 'semantic-ui-css/semantic.min.css';
import '../assets/currentPint.scss';

const CurrentPint = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await getPintOfDay();
                setArticles(fetchedArticles);
            } catch (error) {
                console.error(error);
            }
        }
        fetchArticles();
    }, []);

    const ArticleCard = ({ article }) => {
        const date = new Date(article.publish_date);
        const formattedDate = date.toLocaleDateString(undefined, {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return(

        <div class="ui card">
            <div class="image">
                <img src={article.image_url} wrapped ui={false} />
            </div>
            <div class="content">
                <a class="header" href={article.url} target="_blank">{article.title}</a>
                <div class="meta">{article.author}</div>
                <div class="meta">
                    <span class="date">{formattedDate}</span>
                </div>
                <div class="description">{article.summary}</div>
            </div>
        </div>
        );
    };

    return (
        <div className="currentPint">
            <div class="ui grid" >
                    {articles.map(article => (
                            <ArticleCard article={article} />
                    ))}
                    </div>
            
        </div>
    );
}

export default CurrentPint;