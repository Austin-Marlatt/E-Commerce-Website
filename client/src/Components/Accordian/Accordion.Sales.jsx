import Accordion from 'react-bootstrap/Accordion';
import AddProductReview from '../Modal';

function SalesAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
        {props.oldPrice}
        <p></p>
          {props.discount} 
          <p></p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <AddProductReview/>
      </Accordion.Item>
    </Accordion>
  );
};

export default SalesAccordianTemplate;