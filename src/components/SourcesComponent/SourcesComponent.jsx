import SourcesCard from "../SourcesCard/SourcesCard";

export default function SourcesComponent({sources}){

    const initCards = [];
    if (sources){
        sources.forEach(function(s, idx){
            initCards.push(
                <>
                    <hr />
                    <SourcesCard key={idx} source={s}/>
                </>
            );
        });
        initCards.push(
            <hr />
        );
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