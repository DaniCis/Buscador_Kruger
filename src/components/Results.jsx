import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";
import Col from 'react-bootstrap/Col'

const Results = ({items, onItemSelected, query, onResultsCalculated}) => {
    const [results,setResults] = useState([])

    const findMatch = (items,query) =>{
        const res = items.filter((item) => {
            return (item.name.toLowerCase().indexOf(query) >= 0 && query.length > 0 && query !== "" )
        })
        setResults(res)
        return res
    }    
    const filteredItems = useMemo( () => findMatch(items,query) , [items,query]) 
    
    useEffect(() => {
        onResultsCalculated(results);
    }, [onResultsCalculated,results]);

    return(
        <Col xs={{span:10,offset:1}} sm={{span:8,offset:2}} md={{span:6,offset:3}} xl={{span:4,offset:4}}>
            <div className="contenedorLista">
            { query !== "" &&
                filteredItems.map(item => 
                    <MarkedItem  key={item.id} item={item} onClick={onItemSelected} query={query} />
                )
            }
            </div>
        </Col>
    )
}
export default Results;