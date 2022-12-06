import axios from 'axios';
import { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Buscador = () => {
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState(null);

  useEffect( () => {
    getAll()
  },[])

  const getAll = async() =>{
    await axios.get(`${process.env.REACT_APP_URL}product_type=lipstick`)
      .then((response) => {
        setData(response.data.slice(0,30))
    }).catch(error => {
      console.log(error)
    });
  }

  const getCategory = async (cat) =>{
    await axios.get(`${process.env.REACT_APP_URL}product_category=${cat}&product_type=lipstick`)
      .then((response) => {
        setData(response.data.slice(0,15))
    }).catch(error => {
      console.log(error)
    });
  }

  const handleClick = (e) =>{
    const option = e.target.name
    switch (option) {
      case "all":
        getAll();
        break;
      case "lip_gloss":
        getCategory('lip_gloss');
        console.log(data)
        break;
      case "liquid":
        getCategory('liquid');
        break;
      case "lip_stain":
        getCategory('lip_stain');
        break;
      default:
    }
  }
  return(
    <>
      <Row style={{margin:0}}>
        <Col xs={{span:4,offset:2}} sm={{span:4,offset:3}} md={{span:4,offset:4}} xl={{span:5,offset:4}}>
          <ButtonGroup>
            <Button variant="secondary" onClick={handleClick} name='all'>Search All</Button>
            <Button variant="secondary" onClick={handleClick} name='lip_gloss'>Search Lip gloss</Button>
            <Button variant="secondary" onClick={handleClick} name='liquid'>Search Liquid</Button>
            <Button variant="secondary" onClick={handleClick} name='lip_stain'>Search Lip stain</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{margin:0}} className="contenedorOption">
        <Col xs={{span:7,offset:2}} sm={{span:7,offset:3}} md={{span:7,offset:4}} xl={{span:7,offset:5}}>
          {selection && 
            <p>Option selected:
              <span> {selection.name}</span>
            </p>
          }
        </Col>
      </Row>
      <SearchBar items={data} onItemSelected={(item)=> setSelection(item)} />
    </>
  )
}

export default Buscador;