import type { NextPage } from "next";
import ArticlePreview from '../molecules/ArticlePreview';
import BlogHeader from '../atoms/BlogHeader';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { selectArticlesState, setArticlesState, fetchArticles } from "../../../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/store/store";

// const dispatch = useDispatch();
// const articleListReducer = useSelector((state:RootState) => state.articleList);

// console.log("😂", articleListReducer);


const HomePage: NextPage = () => {
    // const articlesState = useSelector(selectArticlesState);
    // const dispatch = useDispatch();

    const articles = useSelector(selectArticlesState);

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