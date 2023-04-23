import type { NextPage } from "next";
import ArticlePreview from '../molecules/ArticlePreview';
import BlogHeader from '../atoms/BlogHeader';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Body: NextPage = () => {
    return (
    <div className="container">
        <BlogHeader />
        <ArticlePreview />
        <style jsx>{`
            .container {
                background-color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
                width: 100%;
                color: black;
            }
            .description {
                font-size: 1.5rem;
                color: #666;
            }
    `   }</style>
    </div>
    );
};

export default Body;