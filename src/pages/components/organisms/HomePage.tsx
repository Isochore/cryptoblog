import type { NextPage } from "next";
import ArticlePreview from '../molecules/ArticlePreview';
import BlogHeader from '../atoms/BlogHeader';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { selectArticlesState, setArticlesState } from "../../../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";

const HomePage: NextPage = () => {
    const articles = useSelector(selectArticlesState);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    
    useEffect(() => {
        let headers = new Headers();

        headers.set('Authorization', 'Bearer ');
    
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=relevance&pageSize=10&language=fr&apiKey=a034200d5ee34317b8a53c6819ee96be`, {
    
        method: 'GET',
        headers: headers,
        })
        .then(res => res.json())
        .then(response => {
            console.log("api response", response)
            dispatch(setArticlesState(response));
        }).catch(function(error) {
            console.log(error.message);
        });
    }, [dispatch]);


    return (
    <div>
        <BlogHeader />
        <div className="article-preview-container">
            {typeof articles.articles !== "undefined" ? articles.articles.map((article:any, index:number) => (
                <ArticlePreview
                    key={index}
                    title={article.title}
                    image={article.urlToImage}
                    description={article.description}
                    date={article.publishedAt}
                />
            )): "No articles"}
        </div>
        <style jsx>{`
            .article-preview-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
    `   }</style>
    </div>
    );
};

export default HomePage;