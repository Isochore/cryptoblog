import type { NextPage } from "next";
import ArticleTitlePreview from '../atoms/ArticleTitlePreview';
import ArticleImagePreview from '../atoms/ArticleImagePreview';
import ArticleDescriptionPreview from '../atoms/ArticleDescriptionPreview';
import ArticlePublicationDatePreview from '../atoms/ArticlePublicationDatePreview';


const ArticlePreview: NextPage = () => {
    return (
    <div className="article-preview-container">
        <div className="article-preview-wrapper">
            <ArticleTitlePreview />
            <ArticleImagePreview />
            <div className="content-wrapper">
                <ArticleDescriptionPreview />
                <ArticlePublicationDatePreview />
            </div>
        </div>
        <style jsx>{`
            .article-preview-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 40%;
                background-color: #fff;
                border-radius: 1rem;
                box-shadow: 0 0 10px rgb(0 0 0 / 10%);
                margin: 50px;
                padding: 20px;
            }
            .article-preview-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .content-wrapper {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            .description {
                font-size: 1.5rem;
                color: #666;
            }
    `   }</style>
    </div>
    );
};

export default ArticlePreview;