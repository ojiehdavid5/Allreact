import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />

      {props.isRegistered===false&&      <input type="password" placeholder="Confirm Password" />
}
      <input type="password" placeholder="Password" />
      <button type="submit">{props.isRegistered===false?"register":"login"}</button>
    </form>
  );
}

export default Form;
