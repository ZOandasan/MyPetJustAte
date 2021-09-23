
export default function SourcesCard({source}){
    let cite = source.citationName;
    let title = source.citeTitle;

    return (
    <div>
        <h4>{title}</h4>
        <span><a href={cite}>Click here to learn more</a></span>
    </div>
    );
}