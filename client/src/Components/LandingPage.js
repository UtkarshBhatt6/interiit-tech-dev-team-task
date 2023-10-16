import React from 'react'
import { useState } from 'react';
import NewsCard from './NewsCard'
import '../App.css'
import EmailForm from './Email'
import { Form, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
function BasicForm() {
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
    const handleSubmit = async(event) => {
      event.preventDefault();
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Country:", country);
      try{
        const response =await fetch('http://localhost:5000/add_subscription',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email,username,country})
        });
        if (!response.ok) {
            console.error("Error:", response.statusText);
            return;
          }
        else console.log("Successfully added to database")
    }catch(err){
         console.log(err);
      }
    };
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your user name"
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={country}
            onChange={handleCountryChange}
            placeholder="Enter your country"
          />
        </Form.Group>
  
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  
function MyForm() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [response,setResponse]=useState(null)
  const [headline,setHeadline]=useState(false);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleQueryChange = (event) => {
    setSelectedQuery(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Query:", selectedQuery);
    console.log("Selected Country:", selectedCountry);
    try{
        const response =await fetch('http://localhost:5000/get_news',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({selectedCountry,selectedCategory,selectedQuery,headline})
        });
        if (!response.ok) {
            console.error("Error:", response.statusText);
            return;
          }
        const data=await response.json();
        if (data.error) {
            console.error("Error:", data.error);
            return;
          }
          console.log(data.articles)
          setResponse(data.articles)
    }catch(err){
         console.log(err);
      }
    };

  return (
    <>
    <div className="heading" style={{textAlign:'center',padding:'2rem'}}>
    <Badge pill bg="primary"style={{fontSize:'3rem'}} >
                    GetNews
      </Badge>
    </div>
  <Form onSubmit={handleSubmit}>
  <div className="row" style={{padding:'2rem'}}>
    <div className="col-md-4">
      <Form.Group>
        <Form.Label> 
            <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        Country
      </Badge></Form.Label>
        <Form.Select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="in">India</option>
        </Form.Select>
      </Form.Group>
    </div>
    <div className="col-md-4">
      <Form.Group>
        <Form.Label>
        <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        Query
      </Badge>
         </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={selectedQuery}
          onChange={handleQueryChange}
          placeholder="Enter your query..."
        />
      </Form.Group>
    </div>
    <div className="col-md-4">
      <Form.Group>
        <Form.Label>
        <Badge pill bg="light" text="dark" style={{fontSize:'1rem'}}>
        Category
      </Badge>
      </Form.Label>
        <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="business">business</option>
          <option value="entertainment">entertainment</option>
          <option value="general">general</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </Form.Select>
      </Form.Group>
    </div>
  </div>
  <div className="row" style={{padding:'2rem'}}>
    <div className="col-md-12">
      <Button type="submit">Search</Button>
    </div>
  </div>
</Form>

    {response && (
      <div className="response" style={{textAlign:'center'}}>
         <Badge pill bg="secondary"  style={{fontSize:'3rem'}}>
   Top News Headlines
      </Badge> 
                <div className="card-body"  style={{ display: 'flex', flexWrap: 'wrap',padding:'2rem' }} >
        
               {response.map((news) => (
                 <div key={news.title} style={{ flexBasis: '33.33%', padding: '10px' }}>
                    <NewsCard className='news-card' key={news.title} title={news.title} content ={news.content} image={news.urlToImage}/>
                    </div>
                   ))}
                 </div>
                 </div>
        )}
    <div className="footer" style={{textAlign:'center',padding:'2rem'}}>
    <Badge pill bg="dark" style={{fontSize:'3rem'}}>
    Subscribe to our newsletter
      </Badge> 
    </div>
        <EmailForm/>
    </>
  );
               }
export default MyForm;