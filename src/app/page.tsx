import HomeComponent from "@/components/home-components/home-compontents";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="text-center mb-10">
          <span className="text-3xl font-bold">Tic-tac-toe</span>
        </div>

        <HomeComponent />
      </div>
    </>
  );
};

export default Homepage;
