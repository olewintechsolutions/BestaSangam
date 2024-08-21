import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUsPage = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center text-primary">Besta Sangam Association</h1>
      
      <p className="text-center lead">
        Welcome to the Besta Sangam Association! We are a community dedicated to fostering unity, cultural awareness, and support for one another. Our mission is to create a positive and lasting impact within our community.
      </p>
      <div className="container bg-info mx-auto text-center bg-dark text-light">
  <div className="row  mx-5 p-4">
    <h1 className='fw-bold '>About Sangam</h1>
    <p  className='fw-bold '> Bestasangam Association's matrimony service 
    goes beyond traditional matchmaking by embracing modern technologies 
    and innovative methodologies to enhance the matchmaking experience.
     With user-friendly interfaces, advanced search algorithms, and 
     compatibility assessments, the platform empowers members to find
      suitable matches based on their preferences, values, and lifestyle 
      choices. The association's dedication to fostering meaningful 
      connections is reflected in its personalized support and guidance 
      throughout the matchmaking journey, ensuring that members feel 
      supported and empowered in their search for a life partner. 
      By integrating matrimony services into its holistic approach to 
      community development, Bestasangam Association underscores the 
      importance of strong interpersonal relationships in building 
      resilient and harmonious societies.</p>
  </div>

</div>

      <section className="mt-5">
        <h2 className="text-warning text-center">Our Vision</h2>
        <p className="text-justify">
          At Besta Sangam Association, our vision is to build a thriving community where everyone feels a strong sense of belonging and can flourish. We aim to bridge gaps between people from different backgrounds and to celebrate diversity and culture.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="text-warning text-center">Our Mission</h2>
        <p className="text-justify">
          Our mission is to empower individuals by providing platforms for cultural exchange, mutual support, and personal growth. We work to enhance the lives of our members through educational, social, and cultural initiatives that promote unity and shared values.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="text-warning text-center">Our Core Values</h2>
        <ul className="list-unstyled text-center">
          <li><strong>Unity:</strong> Bringing people together to foster strong connections and mutual respect.</li>
          <li><strong>Support:</strong> Offering help and guidance to members in need.</li>
          <li><strong>Cultural Awareness:</strong> Celebrating and preserving our rich cultural heritage.</li>
          <li><strong>Empowerment:</strong> Providing tools and opportunities for personal growth and success.</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="text-warning text-center">Get Involved</h2>
        <p className="text-center">
          We encourage you to become a part of our vibrant community. Whether you’re looking to volunteer, participate in cultural events, or simply connect with others, there’s a place for you here at Besta Sangam Association.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
