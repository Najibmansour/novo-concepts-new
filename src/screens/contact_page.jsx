import ContactForm from "../components/form/form.jsx";
import "../components/form/form_components/form_inputs.css";

import IMG from "../assets/phone.png";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import './Services.css'
import Footer from "../components/Footer.js";

const ContactPage = () => {
  return (
    <>
      <div className='banner'>
    <Header />
    <Banner
    leftText={"Contact"}
    rightText={"Novo"}
    img={"https://i.imgur.com/rfN31GV.png"}
    />
  </div>
    <main>
      
      <h2 className="talk">
        LETS <br /> START
      </h2>
      <ContactForm></ContactForm>
      {/* <StarsForm></StarsForm> */}

      <img className="img__ctct" src={IMG} alt="phone" />
    </main>
    <Footer/>

    </>

  );
};

export default ContactPage;
