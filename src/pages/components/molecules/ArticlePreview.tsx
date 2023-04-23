import type { NextPage } from "next";
import ArticleTitlePreview from '../atoms/ArticleTitlePreview';
import ArticleImagePreview from '../atoms/ArticleImagePreview';


const ArticlePreview: NextPage = () => {
    return (
    <div>
        <ArticleTitlePreview />
        <ArticleImagePreview />
        <style jsx>{`
            .title {
                font-size: 2rem;
                font-weight: bold;
                color: #333;
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