
export default function SourcesCard({source}){
    let cite = source.citationName;
    let title = source.citeTitle;

    return (
    <>
        <span><a href={cite}>{title}</a></span>
    </>
    );
}