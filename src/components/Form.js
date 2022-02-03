import Input from "./Input";
import Button from "./Button";
import { useState } from "react/cjs/react.development";

const Form = ({ pw1, pw2, name, email, setIsForm, setName, setEmail, setPassword1, setPassword2 }) => {
  const [pwdError, setPwdError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pw1 === pw2) {
      setIsForm(false);
    } else {
      setPwdError(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={name} setValue={setName} text="Name" type="text" placeholder="Jean Dupont" />
      <Input
        value={email}
        setValue={setEmail}
        text="Email"
        type="email"
        placeholder="jeandupont@lereacteur.io"
      />
      <Input
        error={pwdError}
        setValue={setPassword1}
        text="Password"
        type="password"
        placeholder="mot de passe"
      />
      <Input
        error={pwdError}
        setValue={setPassword2}
        text="Confirm your password"
        type="password"
        // placeholder="mot de passe"
      />
      {pwdError && <p>les mots de passe ne sont pas identiques</p>}
      <Button type="submit" value="Register" />
    </form>
  );
};

export default Form;
