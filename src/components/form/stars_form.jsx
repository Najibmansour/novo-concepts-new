import { useForm } from "react-hook-form";
import { FormStars } from "./form_components/form_input";

const StarsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="">How satisfied are you with our services</h2>
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

      {/* Honeypot field, hidden from UI */}
      {/* <input
        type="text"
        style={{ display: "none" }}
        {...register("honeypot")}
        autoComplete="off"
      /> */}
    </form>
  );
};

export default StarsForm;
