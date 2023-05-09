import { useState } from "react";
import React from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // telling type script that value of user can be null or AuthUser
  const [user, setUser] = useState<AuthUser | null>(null); // initial value is null  but in future it can change
  // "Type assertion"
  //const [user, setUser] = useState<AuthUser>({} as AuthUser); // lying to typescript that empty {} is of type AuthUser, we are using this cause we are confident that soon after setup the userwill be iniitalize and won't be null again so this is called "Type assertion"
  //  using the above code out div will become like this "<div>User name is {user .name} </div>"
  const handleLogin = () => {
    setUser({
      name: "Samar",
      email: "Samar@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {" "}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;
