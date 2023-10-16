import Badge from 'react-bootstrap/Badge';

// function TextControlsExample() {
//   return (
//     <Form >
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Example textarea</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>
//   );
// }

// export default TextControlsExample;
// function BasicForm() {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [country, setCountry] = useState('');
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
//     const handleUsernameChange = (event) => {
//       setUsername(event.target.value);
//     };
//     const handleCountryChange = (event) => {
//       setCountry(event.target.value);
//     };
//     const handleSubmit = async(event) => {
//       event.preventDefault();
//       console.log("Email:", email);
//       console.log("Username:", username);
//       console.log("Country:", country);
//       try{
//         const response =await fetch('http://localhost:5000/add_subscription',{
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({email,username,country})
//         });
//         if (!response.ok) {
//             console.error("Error:", response.statusText);
//             return;
//           }
//         else console.log("Successfully added to database")
//     }catch(err){
//          console.log(err);
//       }
//     };
//     return (
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={1}
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email address"
//           />
//         </Form.Group>
  
//         <Form.Group>
//           <Form.Label>User Name</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={1}
//             value={username}
//             onChange={handleUsernameChange}
//             placeholder="Enter your user name"
//           />
//         </Form.Group>
  
//         <Form.Group>
//           <Form.Label>Country</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={1}
//             value={country}
//             onChange={handleCountryChange}
//             placeholder="Enter your country"
//           />
//         </Form.Group>
  
//         <Button type="submit">Submit</Button>
//       </Form>
//     );
//   }
  
  import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Country:', country);

    try {
      const response = await fetch('http://localhost:5000/add_subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, country }),
      });

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      } else {
        console.log('Successfully added to database');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{padding:'2rem'}}>
      <Form.Group className="mb-3" controlId="emailControl">
        <Form.Label>
        <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        Email Address
      </Badge>
         </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="usernameControl">
        <Form.Label>
        <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        User Name
      </Badge>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your user name"
          value={username}
          onChange={handleUsernameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="countryControl">
        <Form.Label>
        <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        Country
      </Badge>
          </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your country"
          value={country}
          onChange={handleCountryChange}
        />
      </Form.Group>

      <Button type="submit">Subscribe</Button>
    </Form>
  );
}
