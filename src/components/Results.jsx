import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";

const Results = ({items, onItemSelected, query, onResultsCalculated}) => {
    const [results,setResults] = useState([])

    const findMatch = (items,query) =>{
        const res = items.filter((item) => {
            return (item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0 && query !== "" )
        })
        setResults(res)
        return res
    }    
    const filteredItems = useMemo( () => findMatch(items,query) , [items,query]) 
    
    useEffect(() => {
        onResultsCalculated(results);
    }, [onResultsCalculated,results]);

    return(
        <div className="contenedorLista">
        { query !== "" &&
            filteredItems.map(item => 
                <MarkedItem  key={item.id} item={item} onClick={onItemSelected} query={query} />
            )
        }
        </div>
    )
}
export default Results;