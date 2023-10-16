import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function NewsCard(props) {
  return (
    <Card style={{ width: '20rem' ,height:'30rem'}}>
      <Card.Img variant="top" src={props.image} height='160rem' width='18rem'/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.content}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
