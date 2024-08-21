import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/member.jpg'
const PolicyPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Besta Sangam Association Policies</h1>
      
      {/* Terms and Conditions */}
      <section className="mb-5">
        <h2 className="text-warning text-center mb-3">Terms and Conditions</h2>
        <p>
          Welcome to Besta Sangam Association's website. By accessing and using our website, you agree to comply with the following terms and conditions. Please review these terms carefully, and if you do not agree with any part of them, refrain from using our website.
        </p>
        
        <h3 className="mt-4">1. Use of Our Website</h3>
        <p>
          You are permitted to use our website for your personal, non-commercial use, subject to compliance with these terms. You must not use the website in any way that may cause harm or impair the availability of the website.
        </p>

        <h3 className="mt-4">2. Membership and Participation</h3>
        <p>
          Membership in Besta Sangam Association is open to individuals who support our mission. Members must agree to respect the values of unity, cultural awareness, and mutual support. We reserve the right to revoke membership in case of any conduct that violates these values.
        </p>

        <h3 className="mt-4">3. Intellectual Property</h3>
        <p>
          All content, logos, images, and materials on this website are the property of Besta Sangam Association. You may not reproduce, distribute, or otherwise use any of these materials without our express written consent.
        </p>

        <h3 className="mt-4">4. Limitation of Liability</h3>
        <p>
          Besta Sangam Association will not be liable for any damages arising from the use of our website, including but not limited to direct, indirect, incidental, or consequential damages. We do not guarantee the accuracy, completeness, or reliability of the content on our website.
        </p>

        <h3 className="mt-4">5. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of the website after any changes constitutes your acceptance of the revised terms.
        </p>
      </section>
      
      {/* Privacy Policy */}
      <section className="mb-5">
        <h2 className="text-warning text-center mb-3">Privacy Policy</h2>
        <p>
          At Besta Sangam Association, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information.
        </p>
        
        <h3 className="mt-4">1. Information Collection</h3>
        <p>
          We may collect personal information such as your name, email address, and phone number when you register for membership or contact us. We may also collect non-personal information about your interactions with our website, such as IP address and browser type.
        </p>

        <h3 className="mt-4">2. Use of Information</h3>
        <p>
          The information we collect is used to provide and improve our services, communicate with you, and respond to your inquiries. We may also use your information to send you updates about our activities and events.
        </p>

        <h3 className="mt-4">3. Data Protection</h3>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, please note that no method of transmission over the internet or electronic storage is completely secure.
        </p>

        <h3 className="mt-4">4. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to review their privacy policies before providing any personal information.
        </p>

        <h3 className="mt-4">5. Changes to Privacy Policy</h3>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes via email or through our website.
        </p>
      </section>
      
      {/* Contact Us */}
      <section className="text-center">
        <h2 className="text-warning mb-3">Contact Us</h2>
        <p>
          If you have any questions or concerns about our terms and conditions or privacy policy, please contact us at:
        </p>
        <img src= {logo1} alt="member"
        width={200}
        height={200}
        className='img-fluid'
        />
        <address>
            Name: <strong>Ramana</strong> <br/>
            <big> Besta Sangam Association President Madanapalli</big> <br/>
          Email: <a href="mailto:bestasangamassociation@gmail.com">bestasangamassociation@gmail.com</a><br />
          Phone: +91 94414 51041<br />
          Address: Madanapalle, Annamayya - Dist, Andhra Pradesh - India
        </address>
      </section>
    </div>
  );
};

export default PolicyPage;
