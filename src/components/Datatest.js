// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Datatest = () => {
//     const [attractions, setAttractions] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("http://localhost:2222/attractions")
//       .then(res => res.json())
//       .then(
//         (result) => {
          
//             setAttractions(result);
//         },
//       )
//   }, [])

//   return (
//     <>
//         <Container>
//       <Row>
//       {attractions.map(attractions => (
        
//         <Col xs={12} sm={4} key={attractions.id}>
//         <Card style={{ width: '100%' }}>
//             <Card.Img variant="top" src={attractions.coverimage} />
//             <Card.Body>
//                 <Card.Title>{attractions.name}</Card.Title>
//                 <Card.Text>
//                 {attractions.detail}
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//         </Col>

//       ))}

//         {/* 1 row = 12 grid / xs ปรับเมื่อหน้าจอเล็ก */}
       
        
//       </Row>
//     </Container>
//     </>
//   )
// }

// export default Datatest
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Datatest = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2222/attractions") // เปลี่ยน URL เป็น URL ของ PHP API ที่คุณต้องการใช้
      .then(res => res.json())
      .then(result => {
        setAttractions(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {attractions.map(attraction => (
          <Col xs={12} sm={4} key={attraction.id}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={attraction.coverimage} />
              <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text>
                  {attraction.detail}
                </Card.Text>
                <Button variant="primary">Go anywhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Datatest;
