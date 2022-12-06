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
  const [currentOption,setCurrentOption] = useState('all')

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
        setCurrentOption('All')
        break;
      case "lip_gloss":
        getCategory('lip_gloss');
        setCurrentOption('Lip Gloss')
        break;
      case "liquid":
        getCategory('liquid');
        setCurrentOption('Liquid')
        break;
      case "lip_stain":
        getCategory('lip_stain');
        setCurrentOption('Lip Stain')
        break;
      default:
    }
  }

  return(
    <>
      <Row style={{margin:0}}>
        <Col className='contenedorBtn'>
          <ButtonGroup>
            <Button variant="secondary" onClick={handleClick} name='all'>All Lipsticks</Button>
            <Button variant="secondary" onClick={handleClick} name='lip_gloss'>Lip gloss</Button>
            <Button variant="secondary" onClick={handleClick} name='liquid'>Liquid</Button>
            <Button variant="secondary" onClick={handleClick} name='lip_stain'>Lip stain</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{margin:0}} className="contenedorOption">
        <Col >
          {currentOption && 
            <p>Searching in: 
              <span> {currentOption}</span>
            </p>
          }
        </Col>
      </Row>
      <Row style={{margin:0}} className="contenedorOption">
        <Col>
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