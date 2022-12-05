import { useMemo } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MarkedItem = ({item,query,onClick}) => {
    
    const getPositions = (item,query) =>{
        const index = item.title.toLowerCase().indexOf(query)
        const left = item.title.slice(0, index)
        const center = item.title.slice(index, index + query.length)
        const right = item.title.slice(index + query.length)
        return {left,center,right}
    }
    const { left, center, right } = useMemo(
        () => getPositions(item, query),[item, query]
    )

    return(
        <Row style={{margin:0}}>
            <Col sm={{span:6,offset:3}} xl={{span:4,offset:4}}>
                <ListGroup>
                    <ListGroup.Item action onClick={() => onClick(item)}>
                        {left}<span style={{fontWeight: 'bold', backgroundColor:'orange'}}>{center}</span>{right}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}
export default MarkedItem;