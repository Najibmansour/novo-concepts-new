import FormInput, {
  CountrySelector,
  FormTextarea,
} from "./form_components/form_input";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "./form.css"
import { useEffect, useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);

    emailjs
      .send(
        "service_wpzxtfq",
        "template_u7fvc6k",
        {
          from_name: e.full_name,
          from_email: e.email,
          from_phone: e.phone,
          message: e.message,
          rating: e.rating,
          country: e.country
        },
        "HGCm8a_xcqlZN-HfI"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          // reload page
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


   const [countries, setCountries] = useState([]);

   const fetchCountries = async () => {
     try {
       const response = await fetch("https://restcountries.com/v3.1/all");
       if (!response.ok) {
         throw new Error("Failed to fetch countries");
       }
       const data = await response.json();
       setCountries(data);
     } catch (error) {
       console.log(error.message);
     }
   };

   useEffect(() => {
     fetchCountries();
   }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      
      <div className="form__grid">
        <div id="name" >
          <FormInput
            title="Full Name *"
            placeholder="Enter your Full Name"
            use_name="full_name"
            errorsOBJ={errors}
            registerOBJ={register}
            restrictions={{
              required: "Full Name is required",
            }}
          />
        </div>
        <div id="phone">
          <FormInput
            title="Phone "
            placeholder="Enter your Phone Number"
            use_name="phone"
            errorsOBJ={errors}
            registerOBJ={register}
            
          />
          
        </div>
        <div id="mail">
          <FormInput
            title="Email *"
            placeholder="Enter your email"
            use_name="email"
            errorsOBJ={errors}
            registerOBJ={register}
            restrictions={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
        </div>

        <div id="country">
          <CountrySelector
            title="Country"
            placeholder="Enter your Country"
            use_name="country"
            errorsOBJ={errors}
            registerOBJ={register}
            restrictions={{
              required: "Country is required",
            }}
            setValue={setValue}
          />
        </div>
        <div id="message">
          <FormTextarea
            title="Message"
            placeholder="Enter your Message"
            use_name="message"
            errorsOBJ={errors}
            registerOBJ={register}
            restrictions={{
              required: "Message is required",
            }}
          />
        </div>
      </div>

      <button>SEND</button>

      {/* Honeypot field, hidden from UI */}
      <input
        type="text"
        style={{ display: "none" }}
        {...register("honeypot")}
        autoComplete="off"
      />
    </form>
  );
};

export default ContactForm;
