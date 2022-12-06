import { useMemo } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

const MarkedItem = ({item,query,onClick}) => {
    
    const getPositions = (item,query) =>{
        const index = item.name.toLowerCase().indexOf(query)
        const left = item.name.slice(0, index)
        const center = item.name.slice(index, index + query.length)
        const right = item.name.slice(index + query.length)
        return {left,center,right}
    }
    const { left, center, right } = useMemo(
        () => getPositions(item, query),[item, query]
    )

    return(
        <Row style={{margin:0}}>
            <ListGroup>
                <ListGroup.Item action onClick={() => onClick(item)}>
                    {left}<span style={{fontWeight: 'bold', backgroundColor:'orange'}}>{center}</span>{right}
                </ListGroup.Item>
            </ListGroup>
        </Row>
    )
}
export default MarkedItem;