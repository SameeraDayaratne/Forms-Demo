import { useState } from "react";
export default function StateLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isEditing ,setIsEditing] = useState({
    email:false, 
    password:false
  })

  let emailIsInvalid = isEditing.email && !data.email.includes('@'); 

  function handleInputBlur(identifier){
    setIsEditing(prev => {
        return(
            {
                ...prev,
                [identifier] : true
            }
        )
    })
  }

  function handleChange(identifier,value){
    setData(prevData => {
      return({
        ...prevData,
        [identifier] : value
      }
        
      )
    });


    setIsEditing(prev => {
        return(
            {
                ...prev,
                [identifier] : false
            }
        )
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={data.email} onBlur={()=> handleInputBlur('email')} onChange={(event) => handleChange('email',event.target.value)}/>
          <div className="control-error">
            {emailIsInvalid && <p>Enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={(event) => handleChange('password',event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
