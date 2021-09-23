import SourcesCard from "../SourcesCard/SourcesCard";

export default function SourcesComponent({sources}){

    const initSources = [];
    sources.forEach(function (s, idx){
        initSources.push(
            <>
            <span> </span>
            <SourcesCard source={s} key={idx}/>
            <span> </span>
            </>
        )
    });

    return (
        <>
            <br />
            <>
                {initSources.map((s, idx) => (
                    <>{s}</>
                ))}
            </>
        </>
    );
}