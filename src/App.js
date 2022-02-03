import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [isForm, setIsForm] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div className="app-container">
      {isForm && (
        <>
          <h1>Create account</h1>
          <Form
            name={name}
            email={email}
            pw1={password1}
            pw2={password2}
            setName={setName}
            setEmail={setEmail}
            setPassword1={setPassword1}
            setPassword2={setPassword2}
            setIsForm={setIsForm}
          />
        </>
      )}
      {!isForm && (
        <>
          <h1>Results</h1>
          <StepTwo name={name} email={email} password={password1} setIsForm={setIsForm} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
