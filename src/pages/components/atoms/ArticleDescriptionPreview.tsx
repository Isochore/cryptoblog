import type { NextPage } from "next";

interface ArticleDescriptionPreviewProps {
    description: string
}

const ArticleDescriptionPreview: React.FC<ArticleDescriptionPreviewProps> = (props: ArticleDescriptionPreviewProps) => {
    return (
    <div>
        <p>{props.description}</p>
        <style jsx>{`
            p {
                margin-bottom: 20px;
                text-align: justify;
            }
            .description {
                font-size: 1.5rem;
                color: #666;
            }
    `   }</style>
    </div>
    );
};

export default ArticleDescriptionPreview;