import type { NextPage } from "next";

interface ArticlePublicationDatePreviewProps {
    date: string
}

const formatDate = (date:string) => {
    const newDate = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(newDate);
    return formattedDate;
}

const ArticlePublicationDatePreview: React.FC<ArticlePublicationDatePreviewProps> = (props: ArticlePublicationDatePreviewProps) => {
    return (
    <div>
        <p>{formatDate(props.date)}</p>
        <style jsx>{`
            .title {
                font-size: 2rem;
                font-weight: bold;
                color: #333;
            }
    `   }</style>
    </div>
    );
};

export default ArticlePublicationDatePreview;