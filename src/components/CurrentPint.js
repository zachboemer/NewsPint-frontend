import React, { useState, useEffect } from 'react';
import { getPintOfDay } from '../api/api';
import { Card, Image, Header, CardMeta, Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
        <Card  href={article.url} target="_blank" >
            <Image src={article.image_url} wrapped ui={false}/>
            <Card.Content>
                <Header as='h2'>{article.title}</Header>
                <CardMeta>{article.author}</CardMeta>
                <CardMeta>{formattedDate}</CardMeta>
                <Card.Description>{article.summary}</Card.Description>
            </Card.Content>
        </Card>
        );
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <Container>
                <Grid columns={4} centered>
                    {articles.map(article => (
                        <Grid.Column key={article.id}>
                            <ArticleCard article={article} />
                        </Grid.Column>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CurrentPint;