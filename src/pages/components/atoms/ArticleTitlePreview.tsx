import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

const ArticleTitlePreview: NextPage = () => {
    return (
    <div>
        <h2>Titre</h2>
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

export default ArticleTitlePreview;