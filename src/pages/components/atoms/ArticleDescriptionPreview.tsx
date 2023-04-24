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
    `   }</style>
    </div>
    );
};

export default ArticleDescriptionPreview;