import ContactForm from "../components/form/form.jsx";
import "../components/form/form_components/form_inputs.css";
import Header from "../components/Header.js";
import './Services.css'
import Footer from "../components/Footer.js";

const ContactPage = () => {
  return (
    <>
      {/* <div >
    <Header />
    <Banner
    leftText={"Contact"}
    rightText={"Novo"}
    img={"https://i.imgur.com/rfN31GV.png"}
    />
  </div>
    <main className="main__container">
      
      <h2 className="talk">
        LETS <br /> START
      </h2>
      <ContactForm></ContactForm>
      <StarsForm></StarsForm>

      <img className="img__ctct" src={IMG} alt="phone" />
    </main>
    <Footer/> */}
      <div>
        <div className="form__banner">
          <Header></Header>
        </div>
        {/* <NewForm></NewForm> */}

        <div className="form__title">
          <h2 className="talk">LET ‘ S START</h2>
        </div>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContactPage;
