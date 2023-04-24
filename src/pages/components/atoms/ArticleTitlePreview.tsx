import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

interface ArticleTitlePreviewProps {
    title: string
}

const ArticleTitlePreview: React.FC<ArticleTitlePreviewProps> = (props: ArticleTitlePreviewProps) => {
    return (
    <div>
        <h2>{props.title}</h2>
        <style jsx>{`
            h2 {
                margin-bottom: 20px;
                width: 400px;
            }
    `   }</style>
    </div>
    );
};

export default ArticleTitlePreview;