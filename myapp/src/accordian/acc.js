import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
    
        <Accordion.Body>
        <img src={props.image} style={{height:"150px"}}/>
         {props.description}
         {props.category}


        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default BasicExample;