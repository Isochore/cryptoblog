import type { NextPage } from "next";
import ArticlePreview from '../molecules/ArticlePreview';
import BlogHeader from '../atoms/BlogHeader';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { selectArticlesState, setArticlesState, fetchArticles } from "../../../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
// import { RootState } from "@/store/store";


// const dispatch = useDispatch();
// const articleListReducer = useSelector((state:RootState) => state.articleList);

// console.log("😂", articleListReducer);


const HomePage: NextPage = () => {
    // const articlesState = useSelector(selectArticlesState);
    const articles = useSelector(selectArticlesState);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    
    useEffect(() => {
        // let headers = new Headers();

        // headers.set('Authorization', 'Bearer ');
    
        // fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&pageSize=10&apiKey=968eb88304e84a5eab0b2f367f95b5cf`, {
    
        // method: 'GET',
        // headers: headers,
        // })
        // .then(res => res.json())
        // .then(response => {
        //     console.log("ololo", response)
        //     dispatch(setArticlesState(response));
        // }).catch(function(error) {
        //     console.log(error.message);
        // });
    }, [dispatch]);
    console.log("wow", articles);


    return (
    <div>
        <BlogHeader />
        <div className="article-preview-container">
            <ArticlePreview />
            <ArticlePreview />
            <ArticlePreview />
            <ArticlePreview />
        </div>
        <Link to="/detail">Go to detail page</Link>
        <style jsx>{`
            .article-preview-container {
                display: flex;
                flex-wrap: wrap;
            }
            .description {
                font-size: 1.5rem;
                color: #666;
            }
    `   }</style>
    </div>
    );
};

export default HomePage;