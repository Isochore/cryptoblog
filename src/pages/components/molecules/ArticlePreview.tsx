import type { NextPage } from "next";
import ArticleTitlePreview from '../atoms/ArticleTitlePreview';
import ArticleImagePreview from '../atoms/ArticleImagePreview';
import ArticleDescriptionPreview from '../atoms/ArticleDescriptionPreview';
import ArticlePublicationDatePreview from '../atoms/ArticlePublicationDatePreview';
import { Link } from 'react-router-dom';

interface ArticlePreviewProps {
    key: number,
    title: string,
    image: string,
    description: string,
    date: string
}


const ArticlePreview: React.FC<ArticlePreviewProps>  = (props: ArticlePreviewProps) => {
    return (
    <div className="article-preview-container">
        <div className="article-preview-wrapper">
            <ArticleTitlePreview title={props.title} />
            <ArticleImagePreview image={props.image} />
            <div className="content-wrapper">
                <ArticleDescriptionPreview description={props.description} />
                <ArticlePublicationDatePreview date={props.date} />
            </div>
            <Link to="/detail">Consulter</Link>
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
                width: 400px;
            }
    `   }</style>
    </div>
    );
};

export default ArticlePreview;