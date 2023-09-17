import React from "react";
import { Navigate } from "React-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
