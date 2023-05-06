import React from "react";

// use types when building applications and interfaces when building libraries
type GreetProps = {
  name: string;
  messageCount?: number; // this tell typescript that messageCount prop is optional
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have 
          ${messageCount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
};

export default Greet;
