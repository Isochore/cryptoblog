import type { NextPage } from "next";

interface ArticleImagePreviewProps {
    image: string
}

const ArticleImagePreview: React.FC<ArticleImagePreviewProps> = (props: ArticleImagePreviewProps) => {
    return (
    <div>
        <img src={props.image} alt="illustrative image for the article"/>
        <style jsx>{`
            img {
                width: 400px;
            }
    `   }</style>
    </div>
    );
};

export default ArticleImagePreview;