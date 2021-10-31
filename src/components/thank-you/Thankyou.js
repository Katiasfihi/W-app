import React from "react";


import "./Thankyou.scss";


function Thankyou() {

 const mess = "Thank you for your message." 
  
  return (
    
    <div className="Login">
      <h1 className="kc-thank">Katia & Carol</h1>
        <h2 className="pop-message">{mess}</h2>
    </div>
  );
}
export default Thankyou;
