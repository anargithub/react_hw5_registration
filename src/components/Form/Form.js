import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const values = [
    {
      inputValue: firstName,
      placeholder: "First Name",
      name: setFirstName,
    },
    {
      inputValue: lastName,
      placeholder: "Last Name",
      name: setLastName,
    },
    {
      inputValue: email,
      placeholder: "Email",
      name: setEmail,
    },
  ];
  
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}

        {values.map((value, index) => {
          return (
            <Input
              key={index}
              value={value.inputValue}
              setInputValue={value.name}
              placeholder={value.placeholder}
              submitted={submitted}
            />
          );
        })}

        <Button buttonValue={"Register"} />
      </form>
    </div>
  );
}

// export default function Form() {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (values.firstName && values.lastName && values.email) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   return (
//     <div className="form-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">
//             Success! Thank you for registering
//           </div>
//         ) : null}

//         <Input
//           id="first-name"
//           placeholder="First Name"
//           name="firstName"
//           value={values.firstName}
//           onChange={handleInputChange}
//           error={
//             submitted && !values.firstName ? "Please enter a first name" : null
//           }
//         />

//         <Input
//           id="last-name"
//           placeholder="Last Name"
//           name="lastName"
//           value={values.lastName}
//           onChange={handleInputChange}
//           error={
//             submitted && !values.lastName ? "Please enter a last name" : null
//           }
//         />

//         <Input
//           id="email"
//           placeholder="Email"
//           name="email"
//           value={values.email}
//           onChange={handleInputChange}
//           error={submitted && !values.email ? "Please enter an email" : null}
//         />

//         <Button
//           buttonValue={"Register"}
//         />
//       </form>
//     </div>
//   );
// }
