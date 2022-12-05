import { useState } from "react";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const emails = [
    {
      id: "email-01",
      title: "Reporte de resultados",
    },
    {
      id: "email-02",
      title: "Requisitos para cambio",
    },
    {
      id: "email-03",
      title: "Estatus de funcionalidad",
    },
    {
      id: "email-04",
      title: "Próximos eventos",
    },
    {
      id: "email-05",
      title: "Participa en la encuesta",
    },
];
const calendar = [
    {
      id: "calendar-01",
      title: "Sesión de seguimiento",
    },
    {
      id: "calendar-02",
      title: "Revisión de propuestas",
    },
    {
      id: "calendar-03",
      title: "Evento para donar juguetes",
    },
    {
      id: "calendar-04",
      title: "Junta semanal de equipo",
    },
    {
      id: "calendar-05",
      title: "Revisión de pendientes con cliente",
    },
];
const people = [
    {
      id: "people-01",
      title: "Juan Perez",
    },
    {
      id: "people-02",
      title: "Marcos Rivas",
    },
    {
      id: "people-03",
      title: "Sergio Martinez",
    },
    {
      id: "people-04",
      title: "Laura Jimenez",
    },
    {
      id: "people-05",
      title: "Horario Martinez",
    },
];
const Buscador = () => {
  const [data, setData] = useState([...people, ...emails, ...calendar]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) =>{
    const option = e.target.name
    switch (option) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      default:
    }
    console.log(currentOption)
  }
  return(
    <>
      <Row style={{margin:0}}>
        <Col xs={{span:4,offset:2}} sm={{span:4,offset:3}} md={{span:4,offset:4}} xl={{span:4,offset:5}}>
          <ButtonGroup>
            <Button variant="secondary" onClick={handleClick} name='all'>All</Button>
            <Button variant="secondary" onClick={handleClick} name='emails'>Emails</Button>
            <Button variant="secondary" onClick={handleClick} name='people'>People</Button>
            <Button variant="secondary" onClick={handleClick} name='calendar'>Calendar</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{margin:0}} className="contenedorOption">
        <Col xs={{span:7,offset:2}} sm={{span:7,offset:3}} md={{span:7,offset:4}} xl={{span:7,offset:5}}>
          {selection && 
            <p>Option selected:
              <span> {selection.title}</span>
            </p>
          }
        </Col>
      </Row>
      <SearchBar items={data} onItemSelected={(item)=> setSelection(item)} />
    </>
  )
}

export default Buscador;