import React from 'react';

import logo1 from '../images/marriage2.jpg';
import { Row, Col, Card, CardBody, CardHeader, CardText } from 'react-bootstrap';
import logo2 from '../images/logo1.png';
import logo3 from '../images/logo2.jpg';
import logo4 from '../images/icon.png';
function Marriage() {

  return (
<div>
  <h1 className="text-center fw-bold fs-4 my-5 p-3  mx-auto col-9 text-primary ">Find Your Perfect Life Partner </h1>
  <img src={logo1} xs={6} md={4} alt="/"
  style={{
    width:"80%",
    height:"70vh",
    display:"block",
    margin:" 2px auto",

  }}
  />
<Row className=' col-9 mx-auto my-3 p-3 justify-content-center'>
<Col>
<Card>
  <CardBody>
    <CardHeader> Matches </CardHeader>
      <CardText>Find  Best Life Partner from our Own Community, Contact the local community members  </CardText>
  </CardBody>
</Card>
</Col>
<Col>
<Card> 
  <CardBody>
    <CardHeader> Profiles </CardHeader>
    <CardText>We Provide a Online Matches baes on location, preferences, choices</CardText>
  </CardBody>
</Card>
</Col>


</Row>
<div className='container '>
    <h1 className='text-info fw-bold mx-auto text-center'>Key Features</h1>
    <div className="row justify-content-md-center">
      <div className="col-lg-6 p-3">
        <p className='fw-bold'>We Made it Easy for user to get great Experience with Profiles.</p>
        <ul>
          <li>Easily can search profiles.</li>
          <li>Can find Bio-data from specific area's. </li>
          <li>Filters for age, education & Location.</li>
          <li>Reasonable Pricing and Packages. </li>
          <li>Quick Response Support & Contacts.</li>
        </ul>
        <br/>

      </div>
      <div className="col-lg-4">
        <img src={logo4} alt="icon" className='w-auto mx-auto' 
        style={{
          width:"350px",
          height: "300px",
          display:"block",
          margin:"auto",
          
        }}
        />
       


      </div>
    </div>

    <br/>
    <hr/>
  
     </div>
     <div className='container '>
    <div className="row justify-content-md-center">
    <div className="col-lg-4">
        <img src={logo2} alt="icon" className='w-auto mx-' 
        style={{
          width:"350px",
          height: "300px",
          display:"block",
          margin:"auto",
          borderRadius:"5px",
          
        }}
        />
      </div>

      <div className="col-lg-6 p-3">
      <h6 class="date_text">15<br/>Nov</h6>
        <h3 className='text-info fw-bold mx-auto'>What Our Groom Says...</h3>
1        <ul>
          <p>

BridgeGroom believes that marriage is a sacred union that requires careful consideration and compatibility in life partner selection. They prioritize qualities such as trust, communication, and mutual respect in a relationship. BridgeGroom values shared goals and interests, understanding that a strong partnership is built on a foundation of trust and understanding. They approach marriage as a lifelong commitment, emphasizing the importance of supporting each other through life's challenges and celebrating successes together.
          </p>
        </ul>
        <br/>

      </div>
    
    </div>
    <br/>
    <div className="row justify-content-md-center">
      <div className="col-lg-6 p-3">
      <h6 className="date_text">20<br/>June</h6>

        <h3 className='text-info fw-bold mx-auto'> What Our BridgeGroom Says...</h3>
        <ul>
         <p>
         The groom views marriage as a significant commitment that involves choosing a life partner with shared values, goals, and compatibility. They prioritize qualities like trust, communication, and mutual respect in their partner selection process. The groom believes that a successful marriage requires understanding, support, and a willingness to work through challenges together, emphasizing the importance of building a strong foundation for a lasting and fulfilling relationship
         </p>
        </ul>
        <br/>

      </div>
      <div className="col-lg-4 m-3">
        <img src={logo3} alt="icon" className='w-auto mx-' 
        style={{
          width:"400px",
          height: "350px",
          display:"block",
          margin:"auto",
          borderRadius:"5px",
          
        }}
        />
      </div>
    </div>

<div>
</div>

  
 </div>

</div>

  )
}

export default Marriage;





