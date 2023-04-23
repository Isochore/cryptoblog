import type { NextPage } from "next";

const ArticleDescriptionPreview: NextPage = () => {
    return (
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, odio sit amet hendrerit sollicitudin, urna mauris finibus massa, vel sollicitudin dolor augue eu sapien.</p>
        <style jsx>{`
            p {
                margin-bottom: 20px;
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