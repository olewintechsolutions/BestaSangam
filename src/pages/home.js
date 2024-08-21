import React from 'react'
import brandlogo from '../images/bestasangam.jpeg';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import logo1 from '../images/icon.png';
import  Button  from 'react-bootstrap/Button';
import logo2 from "../images/logo1.png";
import logo3 from "../images/logo2.jpg";
function Home() {
  return (
    <>

        <div>

        <div className='container bg-dark-subtle '>
    <div className="row p-3 ">

      <div className="col-lg-6 p-3 mx-auto">
      <h1 className='fw-bold mx-auto text-center'>BestaSangamAssociation</h1>
      <h3  className='fw-bold mx-auto text-center'>A community from National Fish Corporation - India</h3>
      <p className=' fw-bold mx-auto text-center'> A Online Destination for Community Information Services</p>
      <p className=' fw-bold mx-auto text-center'>Andhra Pradesh - Annamayya District</p>
      <Button className =" text-center d-inline-block bg-primary  mx-auto rounded-pill   ">Register Profile</Button>

      </div>
  

      <div className="col-lg-4">
        <img src={brandlogo} alt="icon" className='' 
        style={{
          width:"100%",
          height: "500px",
          display:"block",
          margin:"auto",
          
        }}
        />
      </div>
    </div> 
     </div>     
  </div>
{/* profiles view section */}

 

  <div>
        <h3 className='text-center fw-bold m-3'>List of Caste & Sub-Castes in India</h3>
        <p className='text-center text-primary fw-bold m-3'>Below are the list of caste comes under Besta Community based on States & Region across  India.</p>
    </div>
      <Row xs={1} md={2} className="g-4 text-center m-4 ">
       
      <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-dark text-center">Andhra Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Agnikula kshatriya, Bestha, Gangaputra, Gangavar, Neyyalla, Goondla, Jalari, Pattapu, Pali, Vadabalija,
          Vanne kapu, Palli Kapu, Jalkshatriya, Vanyekula Kshatriya.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Assam</Card.Title> 
              <Card.Text className='fw-bold'>
              Bhoi, Mallah, Jhalo Malo,Jhalo, Malo, Malakar,Namsudra, Kaibarta, Patni, Kotal

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Bihar</Card.Title>
              <Card.Text className='fw-bold'>
              Bind,Dhimar Dheemar Dhivar Dhewar, Godia, Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar
          Kherwar, Khagi, Kaibarta, Kahar, Manhji, ManjhiMajhwar, Nishad, Tiyar, Tyar, Tiar, Mallah
        
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Chandigarh</Card.Title>
              <Card.Text className='fw-bold'>
              Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar Kherwar, Khagi, Manhji, ManjhiMajhwar, Nishad,
          Tiyar, Tyar, Tiar, Mallah
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Delhi</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar,Dhinwar, Dhewar, Kewat, Keot, Nishad, Godia, Gond Gariya, Guriya, Raj Gond, Kahar, Jhimar,
          Jhinwar, Jhiwar,Jhir,Jheer, Mallah, Turah, Turaha,Tureha,Turaiha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Gujarat</Card.Title>
              <Card.Text className='fw-bold'>
              Bhoi, Dhinwar BhoiGadhar Bhoi KhadiBhoi,Khase Bhoi, Zinga Bhoi Pardeshi Bhoi, Raj Bhoi, Dhiwar,
          DheemarDhimar, Dhivar,Dhevra,Gond, Raj Gond,Koli, Mahadev Koli, Malhar Koli, Donger Koli, Kolcha, Kolga,
          Tokre Koli, Kirat,Keer, Kewat, Kevat, Kahar, Dhuria Kahar Gondia Kahar,Khairwar, Mallah, Malhar,Machhendra,
          Machhawa, Nishad, Tindel, Palewar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Goa</Card.Title>
              <Card.Text className='fw-bold'>
              Nayaka
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Jammu & Kashmir ,Haryana & Himachal Pradesh </Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Jhimar, KaharDheemar Jhinwar, MallahDhivar Jhiwar, JhirDhewar Jheer

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Kerala</Card.Title>
              <Card.Text className='fw-bold'>
              Dhevara (Arya, Vala, Mukkuva, Mukaya, Bhoi,Mulaya, AravathiMale Araya), Meenugara Manigara, Mogera

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Karnataka</Card.Title>
              <Card.Text className='fw-bold'>
              Ambiga, Bestha, Mogaveera, kabbaligas, Bharika, Barikera, Marakula, Bhoyi,bhovi, Mogera, Bheesmakula,
          Melanta, jamadar, Gangaputra, Meddera, gangamatha, Gangakula, Machida,Gange Makkalu Machimar, Gaurimatha
          Machala, Gangarassur Machava,
          Goni Kara, Gond, Raj Gond, Mudiraja, Nayka, Harikanthra Naykara, Jalagera Nayaka, Kabbera,
          Neeraganti, Korach, Nalekera, Koli, Parivara,Sunagara, Sephaliga, Kharvi,
          Soothkula, Meenugara, Manigara, Thoreya, Vanyekula Kshatriya, Siviyar,
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Madhya Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar, Dhivar, Dhewar, Dewar,Bhoi (Jhinga),Godia, Gond,Gariya,
          Guria, Raj Gond,Kewat, Kevat, Kharwar, Khairwar Kherwar,Keer,Kahar, Mallah,
          Manhji, Majhi, Majhwar, Nishad, Raikwar, Turha, Turah, Turaha, Tureha,Turaiha,
          Tiyar, Tyar, Tiar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Maharastra</Card.Title>
              <Card.Text className='fw-bold'>
              Bhoi, Dhinwar Bhoi Gadhar Bhoi KhadiBhoi, Khase Bhoi, Zinga Bhoi,
          Pardeshi Bhoi, Raj Bhoi., Dhiwar, Dheemar,Dhimar, Dhivar, Daivar,Koli Dhor,
          Mahadev Koli, Malhar Koli, Donger Koli, Koleha Kolcha, Kolga, Tokre Koli,
          Kahar, Dhuria Kahar,Godia Kahar,GondKahar,Kirat, Keer, Kewat, Kevat,Kharwar,
          Khairwar ,Machhendra, Machhawa,Manzi, Gond, Raj Gond, ., Tindel, Palewar,
          Manzi, Malhar,Nishad
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Manipur</Card.Title>
              <Card.Text className='fw-bold'>
              Namsudra, Patni
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Meghalaya & Mizoram</Card.Title>
              <Card.Text className='fw-bold'>
              Jhalo- Malo, Jhalo, Malo, Kaibartta, Jaliya, Namsudra, Patni, Bhoi

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Odisha</Card.Title>
              <Card.Text className='fw-bold'>
              Dewar, Dhewar, Dhivar, Bhoi. Bhovi, Gond, Gondo, Jalia, Jaliya, Jhalo- Malo,
          Mala, Zala, Kaibartta, Kaibarta Jalia,Keuta, Kewata, Keute, Kevt, Namdas,
          Namsudra,Kharwar, Khairwar Khirwar, Tiyar, Tiar, Tior, Koli, Malhar.PUNJAB,
          Dhewar, Jhimar Jhinwar, Jhiwar, Jhir, Jheer, Kahar, Mallah
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Rajasthan</Card.Title>
              <Card.Text className='fw-bold'>
               Dhimar, Dheemar, Dhivar, Bhoi,Gond, Godia, Gariya, Guria, Raj Gond,
              Kahar, Kewat, Keot, Jhimar Jhinwar, Jhiwar, Jhir, Jheer, Keer,
              Mallah,Manhji, Majhi, Majhwar, Riakwar,Koli,Dhor, Tokre Koli,Kolcha, Kolgha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Tripura</Card.Title>
              <Card.Text className='fw-bold'>
              Jalkaibatta, Kahar, Keot, Namsudra, Patni
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Tamil Nadu</Card.Title>
              <Card.Text className='fw-bold'>
              Bostha, Bosthar, Narikanthra, Kharvi, Kebber, Kabbera, Meenugara,
            Manigara, Mukkavar Mukkuvar Mukayar, Parivara, Paravar, Meanevar
            ( Partharaja, Kulam, Pattanavar, Sembadavar), Siviyar, Siviar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Uttar Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar, Dhinwar, Dhewar, Kharwar, Khairwar Khirwar, Godia, Gond,
            Gariya, Guria, Raj Gond, Mallah, Bind, Manhji, Majhi, Majhwar,
            Jhimar Jhinwar, Jhir, Jheer Jhiwar, Nishad, Kahar, Riakwar,
            Kewat, Keot, Turah, Turaha, Tureha, Turaiha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">West Bengal</Card.Title>
              <Card.Text className='fw-bold'>
              Bind, Baidi, Chaia, Chain, Berchain, Duley, Dewar, Dhewar, Dhiver, Gond,
            Gondo, Gurrhi, Gonti, Jhalo- Malo, Malo, Kaibarta, Jaliya Kaibarta,
            Kotal, Keuta, Keweta, Keuta, Kevt, Kewet, Keyot, Keot, Kadma,
            KolaKharwar, Khirwar, Khairwar, Mallah, Meta, Namdas, Namsudra,
            Patni, Tiyar, Sardia.
              </Card.Text>
            </Card.Body>
          </Card>

    </Row>
    <br/>
    
    
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
        <Button className ="bg-primary fw-bold  m-3 rounded-pill ">Register Profile</Button>

      </div>
      <div className="col-lg-4">
        <img src={logo1} alt="icon" className='w-auto mx-auto' 
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


<br/>

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

 
      <div className="contact_srction layout_padding bg-light">
         <div className="container">
            <h2 className="contact_taital">Request A call For More Details:-</h2>
            <h3 className="contact_taital">Enter Details:-</h3>
            <div className="contact_srction_2">
               <div className="mail_main">
                  <div className="row">
                     <div className="col-md-6">
                        <input type="text" className="mail_text" placeholder="Name" name="Fame"/>
                        <input type="text" className="mail_text" placeholder="Phone Number" name="Phone"/>
                     </div>
                     <div className=" col-md-6 ">
                     <input type="text" className="mail_text" placeholder="SurName" name="Same"/>

                        <textarea className="massage-bt" placeholder="Write Something" rows="10" id="comment" name="Message"></textarea>
                     </div>
                  </div>
                  <div className=" send_bt "><a href="/">Send Request</a></div>
               </div>
            </div>
         </div>
      </div>


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


    </>
  )
}

export default Home;