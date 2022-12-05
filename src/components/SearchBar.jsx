import { useState } from "react";
import Results from "./Results";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

const SearchBar = ({items,onItemSelected}) => {
    const [query,setQuery] = useState("ma")
    const [results,setResults] = useState([])

    return(
        <>
        <Row style={{margin:0}}>
            <Col sm={{span:8,offset:2}} lg={{span:8,offset:3}} xl={{span:8,offset:4}}>
                <Col lg={9} xl={6}>
                    <Form.Control type="text" onChange={(e) => {setQuery(e.target.value)} } value={query} />
                </Col>
                <Col lg={{span:2,offset:7}} xl={{span:2,offset:4}}>
                    {results && 
                    <p className="textResults">
                        <span>{results.length}</span> results found</p>
                    }
                </Col>           
            </Col>
        </Row>
        <Results items={items} onItemSelected={onItemSelected} query={query} onResultsCalculated={(items) => setResults(items)} />
        </>
    )
}
export default SearchBar;