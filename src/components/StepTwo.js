const StepTwo = ({ name, email, password, setIsForm }) => {
  console.log(setIsForm);

  return (
    <>
      <div className="result-container">
        <span>{`Name : ${name}`} </span>
        <span>{`Email : ${email}`} </span>
        <span>{`Password : ${password}`} </span>
      </div>
      <button className="result-button" type="text" onClick={() => setIsForm(true)}>
        Edit your information
      </button>
    </>
  );
};

export default StepTwo;
