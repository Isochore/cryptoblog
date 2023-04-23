import type { NextPage } from "next";
import ArticleTitlePreview from '../atoms/ArticleTitlePreview';
import ArticleImagePreview from '../atoms/ArticleImagePreview';


const ArticleDetail: NextPage = () => {
    return (
    <div>
        <p>Detail</p>
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

export default ArticleDetail;