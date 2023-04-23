import type { NextPage } from "next";

const ArticleImagePreview: NextPage = () => {
    return (
    <div>
        <img src="https://fastly.picsum.photos/id/408/400/300.jpg?hmac=4A4pKDOd3yTl8S9tU6Xl-CqDAMFAF3aRzYFqfPzXuNo" alt="photo"/>
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

export default ArticleImagePreview;