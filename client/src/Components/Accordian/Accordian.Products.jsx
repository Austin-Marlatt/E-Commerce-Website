import Accordion from 'react-bootstrap/Accordion';
import ReviewFormat from './reviewFormat';
import AddProductReview from '../Modal'; //both of these were supposed to be one file instead of 2.

function ProductAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.description} 
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <ReviewFormat/>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductAccordianTemplate;