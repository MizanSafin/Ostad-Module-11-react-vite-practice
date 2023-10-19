import React, { useState } from "react";

function ConditionalRendering() {
  const [isLogin, setIsLogin] = useState(false);
  let marks = 66;

  const handleChange = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <button onClick={handleChange}>change</button>
      {/* conditional rendering == IIFE */}
      <div>
        {(() => {
          if (marks >= 90 && marks <= 100) {
            return <h2>You have got A+ 🙋‍♀️</h2>;
          } else if (marks >= 70 && marks < 90) {
            return <h2>You have got A 😁</h2>;
          } else {
            return <h2>You have got 🥚</h2>;
          }
        })()}
        {}
      </div>
      {/* conditional rendering ==logical and and operator */}
      {isLogin ? <button>Log Out</button> : <button>LogIn</button>}
    </div>
  );
}

export default ConditionalRendering;
