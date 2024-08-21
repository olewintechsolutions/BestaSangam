import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const CasteList = () => {
  const states = [
    { title: "Andhra Pradesh", text: "Agnikula kshatriya, Bestha, Gangaputra, Gangavar, Neyyalla, Goondla, Jalari, Pattapu, Pali, Vadabalija, Vanne kapu, Palli Kapu, Jalkshatriya, Vanyekula Kshatriya." },
    { title: "Assam", text: "Bhoi, Mallah, Jhalo Malo, Jhalo, Malo, Malakar, Namsudra, Kaibarta, Patni, Kotal." },
    { title: "Bihar", text: "Bind, Dhimar Dheemar Dhivar Dhewar, Godia, Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar, Kherwar, Khagi, Kaibarta, Kahar, Manhji, Manjhi Majhwar, Nishad, Tiyar, Tyar, Tiar, Mallah." },
    { title: "Chandigarh", text: "Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar Kherwar, Khagi, Manhji, Manjhi Majhwar, Nishad, Tiyar, Tyar, Tiar, Mallah." },
    { title: "Delhi", text: "Dhimar, Dheemar, Dhinwar, Dhewar, Kewat, Keot, Nishad, Godia, Gond, Gariya, Guriya, Raj Gond, Kahar, Jhimar, Jhinwar, Jhiwar, Jhir, Jheer, Mallah, Turah, Turaha, Tureha, Turaiha." },
    { title: "Gujarat", text: "Bhoi, Dhinwar Bhoi, Gadhar Bhoi, KhadiBhoi, Khase Bhoi, Zinga Bhoi, Pardeshi Bhoi, Raj Bhoi, Dhiwar, Dheemar, Dhimar, Dhivar, Dhevra, Gond, Raj Gond, Koli, Mahadev Koli, Malhar Koli, Donger Koli, Kolcha, Kolga, Tokre Koli, Kirat, Keer, Kewat, Kevat, Kahar, Dhuria Kahar, Gondia Kahar, Khairwar, Mallah, Malhar, Machhendra, Machhawa, Nishad, Tindel, Palewar." },
    { title: "Goa", text: "Nayaka." },
    { title: "Jammu & Kashmir, Haryana & Himachal Pradesh", text: "Dhimar, Jhimar, Kahar, Dheemar, Jhinwar, Mallah, Dhivar, Jhiwar, Jhir, Dhewar, Jheer." },
    { title: "Kerala", text: "Dhevara (Arya, Vala, Mukkuva, Mukaya, Bhoi, Mulaya, Aravathi Male Araya), Meenugara, Manigara, Mogera." },
    { title: "Karnataka", text: "Ambiga, Bestha, Mogaveera, Kabbaligas, Bharika, Barikera, Marakula, Bhoyi, Bhovi, Mogera, Bheesmakula, Melanta, Jamadar, Gangaputra, Meddera, Gangamatha, Gangakula, Machida, Gange Makkalu, Machimar, Gaurimatha, Machala, Gangarassur, Machava, Goni Kara, Gond, Raj Gond, Mudiraja, Nayka, Harikanthra Naykara, Jalagera Nayaka, Kabbera, Neeraganti, Korach, Nalekera, Koli, Parivara, Sunagara, Sephaliga, Kharvi, Soothkula, Meenugara, Manigara, Thoreya, Vanyekula Kshatriya, Siviyar." },
    { title: "Madhya Pradesh", text: "Dhimar, Dheemar, Dhivar, Dhewar, Dewar, Bhoi (Jhinga), Godia, Gond, Gariya, Guria, Raj Gond, Kewat, Kevat, Kharwar, Khairwar, Kherwar, Keer, Kahar, Mallah, Manhji, Majhi, Majhwar, Nishad, Raikwar, Turha, Turah, Turaha, Tureha, Turaiha, Tiyar, Tyar, Tiar." },
    { title: "Maharashtra", text: "Bhoi, Dhinwar Bhoi, Gadhar Bhoi, KhadiBhoi, Khase Bhoi, Zinga Bhoi, Pardeshi Bhoi, Raj Bhoi, Dhiwar, Dheemar, Dhimar, Dhivar, Daivar, Koli Dhor, Mahadev Koli, Malhar Koli, Donger Koli, Koleha Kolcha, Kolga, Tokre Koli, Kahar, Dhuria Kahar, Godia Kahar, Gond Kahar, Kirat, Keer, Kewat, Kevat, Kharwar, Khairwar, Machhendra, Machhawa, Manzi, Gond, Raj Gond, Tindel, Palewar, Manzi, Malhar, Nishad." },
    { title: "Manipur", text: "Namsudra, Patni." },
    { title: "Meghalaya & Mizoram", text: "Jhalo- Malo, Jhalo, Malo, Kaibartta, Jaliya, Namsudra, Patni, Bhoi." },
    { title: "Odisha", text: "Dewar, Dhewar, Dhivar, Bhoi, Bhovi, Gond, Gondo, Jalia, Jaliya, Jhalo- Malo, Mala, Zala, Kaibartta, Kaibarta Jalia, Keuta, Kewata, Keute, Kevt, Namdas, Namsudra, Kharwar, Khairwar, Khirwar, Tiyar, Tiar, Tior, Koli, Malhar." },
    { title: "Punjab", text: "Dhewar, Jhimar, Jhinwar, Jhiwar, Jhir, Jheer, Kahar, Mallah." },
    { title: "Rajasthan", text: "Dhimar, Dheemar, Dhivar, Bhoi, Gond, Godia, Gariya, Guria, Raj Gond, Kahar, Kewat, Keot, Jhimar, Jhinwar, Jhiwar, Jhir, Jheer, Keer, Mallah, Manhji, Majhi, Majhwar, Raikwar, Koli, Dhor, Tokre Koli, Kolcha, Kolgha." },
    { title: "Tripura", text: "Jalkaibatta, Kahar, Keot, Namsudra, Patni." },
    { title: "Tamil Nadu", text: "Bostha, Bosthar, Narikanthra, Kharvi, Kebber, Kabbera, Meenugara, Manigara, Mukkavar, Mukkuvar, Mukayar, Parivara, Paravar, Meanevar (Partharaja, Kulam, Pattanavar, Sembadavar), Siviyar, Siviar." },
    { title: "Uttar Pradesh", text: "Dhimar, Dheemar, Dhinwar, Dhewar, Kharwar, Khairwar, Khirwar, Godia, Gond, Gariya, Guria, Raj Gond, Mallah, Bind, Manhji, Majhi, Majhwar, Jhimar, Jhinwar, Jhir, Jheer, Jhiwar, Nishad, Kahar, Riakwar, Kewat, Keot, Turah, Turaha, Tureha, Turaiha." },
    { title: "West Bengal", text: "Bind, Baidi, Chaia, Chain, Berchain, Duley, Dewar, Dhewar, Dhiver, Gond, Gondo, Gurrhi, Gonti, Jhalo- Malo, Malo, Kaibarta, Jaliya Kaibarta, Kotal, Keuta, Keweta, Keuta, Kevt, Kewet, Keyot, Keot, Kadma, Kola, Kharwar, Khirwar, Khairwar, Mallah, Meta, Namdas, Namsudra, Patni, Tiyar, Sardia." }
  ];

  return (
    <>
      <div className='my-5 col-8 mx-auto ' >
        <h3 className='text-center fw-bold m-3'>List of Caste & Sub-Castes in India</h3>
        <p className='text-center text-primary fw-bold m-3'>Below are the list of caste comes under Besta Community based on States & Region across  India.</p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 text-center m-4 col-9 mx-auto ">
        {states.map((state, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <h3 className=" text-bg-dark fs-6">{state.title}</h3>
                <p className="fs-6">{state.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CasteList;
