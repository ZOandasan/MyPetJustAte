
export default function SourcesCard({source, index}){
    let cite = source.citationName;
    let title = source.citeTitle;

    return (
    <div className="source-card">
        <h4>{index}. {title}</h4>
        <span><a href={cite}>Click here to learn more</a></span>
        <br />
    </div>
    );
}