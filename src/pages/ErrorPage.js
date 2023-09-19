import React from "react";
import "./../styles/error.css";
import Button from "../components/button/Button";
const ErrorPage = () => {
  return (
    <div id="notfound" className="bg-slate-400">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops!</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Sorry, the page you requested was not found</h2>
        <Button
          isNavLink={true}
          url="/"
          className="bg-blue-400 text-black font-bold uppercase h-[50px] py-3 select-none text-xl px-5 rounded-md"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
