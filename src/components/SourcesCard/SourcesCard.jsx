
export default function SourcesCard({source}){
    let cite = source.citationName;

    return (
    <>
        <span><a href={cite}>Source</a></span>
    </>
    );
}