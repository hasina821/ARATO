/*eslint-disable*/
import React,{useState} from "react";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img className="w-1/2" src="https://www.presidence.gov.mg/images/logo-gris1.png"></img>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                
              </li>
              <Link
                to="/auth/login"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
              >
                <button
                  className="bg-green-600 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Connecter
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
