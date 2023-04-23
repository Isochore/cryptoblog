import type { NextPage } from "next";
import ArticlePreview from '../molecules/ArticlePreview';
import BlogHeader from '../atoms/BlogHeader';
import { Link } from 'react-router-dom';


const HomePage: NextPage = () => {
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