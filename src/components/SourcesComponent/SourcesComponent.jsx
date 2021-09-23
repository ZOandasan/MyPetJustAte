import SourcesCard from "../SourcesCard/SourcesCard";

export default function SourcesComponent({sources}){

    const initCards = [];
    if (sources){
        sources.forEach(function(s, idx){
            initCards.push(
                <>
                    <SourcesCard key={idx} source={s}/>
                </>
            );
        });
    }

    return ( sources ?
        <>
            <>
                {initCards.map((c) => (
                    <>{c}</>
                ))}
            </>
        </>
        :
        <>
            <br />
        </>
    );
}