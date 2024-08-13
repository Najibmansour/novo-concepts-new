import FormInput, {
  FormStars,
  FormTextarea,
} from "./form_components/form_input";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        title="Full Name"
        placeholder="John Doe"
        use_name="full_name"
        errorsOBJ={errors}
        registerOBJ={register}
        restrictions={{
          required: "First Name is required",
        }}
      />

      <FormInput
        title="Email"
        placeholder="johndoe@mail.com"
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

      <FormInput
        title="Phone"
        placeholder="+961 xx xxx xxx"
        use_name="phone"
        errorsOBJ={errors}
        registerOBJ={register}
        restrictions={{
          required: "Phone number is required",
        }}
      />
      <div>
        <h2 className="talk">SEND US A MESSAGE</h2>
        <FormTextarea
          className=""
          title="Message"
          placeholder="..."
          use_name="message"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "Message is required",
          }}
        />
      </div>
      <h2 className="talk">How was your experience?</h2>
      <FormStars
        title=" "
        placeholder="Doe"
        use_name="rating"
        errorsOBJ={errors}
        registerOBJ={register}
        restrictions={{
          max: {
            value: 5,
            message:
              "Wow thank you, but unfortunatly we cant have a rating above 5",
          },
          min: {
            value: 0,
            message: "Cant rate less than 0",
          },
          required: "Rating is required",
        }}
      />

      <button>SUBMIT</button>
      <div>
        {Object.keys(errors).length > 0 && (
          <ul>
            {Object.keys(errors).map((errorKey) => (
              <li key={errorKey}>{errors[errorKey].message}</li>
            ))}
          </ul>
        )}
      </div>

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
