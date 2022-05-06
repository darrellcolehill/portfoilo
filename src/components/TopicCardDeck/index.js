import {Card, Row, Col} from 'react-bootstrap';
import data from './data';


export function TopicCardDeck(idx) {
    return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Body>
            <Card.Title>{data[idx].title}</Card.Title>
            <Card.Text>
            {data[idx].info}
            <a href={data[idx].link}> more..</a>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
    ))}
  </Row>
    );
}