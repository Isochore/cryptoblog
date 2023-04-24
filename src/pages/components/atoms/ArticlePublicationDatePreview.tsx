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

    `   }</style>
    </div>
    );
};

export default ArticlePublicationDatePreview;