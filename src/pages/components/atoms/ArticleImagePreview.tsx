import type { NextPage } from "next";

interface ArticleImagePreviewProps {
    image: string
}

const ArticleImagePreview: React.FC<ArticleImagePreviewProps> = (props: ArticleImagePreviewProps) => {
    return (
    <div>
        <img src={props.image} alt="photo"/>
        <style jsx>{`
            img {
                width: 400px;
            }
            .description {
                font-size: 1.5rem;
                color: #666;
            }
    `   }</style>
    </div>
    );
};

export default ArticleImagePreview;