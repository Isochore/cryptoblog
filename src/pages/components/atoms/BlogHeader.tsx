import type { NextPage } from "next";

const BlogHeader: NextPage = () => {
    return (
    <div className="header-container">
        <h1>Cryptoblog</h1>
        <style jsx>{`
            .header-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 150px;
                width: 100%;
            }
            h1 {
                font-size: 2rem;
                font-weight: bold;
            }
    `   }</style>
    </div>
    );
};

export default BlogHeader;