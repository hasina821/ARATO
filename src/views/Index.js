/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                MNDPT
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Numerisation
                </a>
                . Visons loin  à travers la transformation Digitale au sein de divers services publiques pour rendre notre efficacite plus sûre.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Github Star
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://imgs.search.brave.com/HF7McgxP6-RmrynFCb9cim0vXUOr1EbTxyhW7XbPTk0/rs:fit:1023:702:1/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTI3MzY3/Mi82NjkyL3YvOTUw/L2RlcG9zaXRwaG90/b3NfNjY5MjY4MjMt/c3RvY2staWxsdXN0/cmF0aW9uLW1hbGFn/YXN5LWdydW5nZS1m/bGFnLmpwZw"
          alt="..."
        />
      </section>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-green-600 fill-current"
              points="2560 0 2560 100 0 100"
              style={{color:"rgb(22 163 74)"}}
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="  hover:mt-4 duration-150 cursor-pointer relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg " style={{backgroundColor:'rgb(22 163 74)'}}>
                <img
                  alt="..."
                  src="https://imgs.search.brave.com/HWAwoEJ4PD6RHet9lW4KbD3yWWdiHHTLs2_tRUGBFs4/rs:fit:600:293:1/g:ce/aHR0cHM6Ly93d3cu/dml2ZXRpYy1ncm91/cC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTEvUHJv/Z3JhbW1lLUxvaGFy/YW5vLTIuZ2lm.gif"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="fill-current"
                      style={{color:"rgb(22 163 74)"}}
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Soyez prêt pour la digitalisation
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Cette applicatifs est complet pour repondre à votre besoin et en plus c'est une application qui va vous facilite la vie à travers ces fonctionnalités hors du commun
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-comment"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Bot Messanger
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Elle dispose d'une bot messanger qui va vous guider au lors du processus
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-money-check"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Back-office pour l'Admin
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Une interface qui va aider l'admin à gerer les differentes operations sur les demandes au sein d'un departement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-globe-americas"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Multilangue</h6>
                      <p className="mb-4 text-blueGray-500">
                        Cette application dispose d'une SI multilangue pour le rendre confortable.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="far fa-clipboard"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documenté
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Quoi de plus bon qu'une application bien documenté
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className=" bg-green-600 shadow-lg rounded-lg text-center p-8">
                      <a
                        alt="..."
                        className="fas fa-graduation-cap"
                      ></a>
                      <p className="text-lg text-white mt-4 font-semibold">
                        DEMANDE D'EQUIVALENCE
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="hover:mt-4 duration-150 bg-red-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <a
                        alt="..."
                        className="far fa-clipboard"
                      ></a>
                      <p className="text-lg text-white mt-4 font-semibold">
                        RENOUVELLEMENT DE CONTRAT DE TRAVAIL
                      </p>
                    </div>
                  </a>
                </div>
                <div className=" my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className=" bg-white shadow-lg rounded-lg text-center p-8">
                      <a
                        alt="..."
                      ></a>
                      <p className="text-lg text-black mt-4 font-semibold">
                        RECLASSEMENT JUDICIAIRE
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="hover:mt-4 duration-150 bg-green-600 shadow-lg rounded-lg text-center p-8 mt-8">
                      <a
                        alt="..."
                        className="fas fa-vote-yea"
                      ></a>
                      <p className="text-lg text-white mt-4 font-semibold">
                        PROCEDURE DE NOMINATION
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-tasks text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Services offerts
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                POCEDURE DE NOMINATION,RECLASSEMENT JUDICIAIRE,RENOUVELLEMENT DE CONTRAT DE TRAVAIL et le demande d'equivalence font partie de notre priorité.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
