import React, { useState } from "react";
import resort6 from "../assets/resort6.jpg";
import nishkarlogo from "../assets/nishkarlogo.png";
import { Link } from "react-router-dom";
import dining from "../assets/dining.jpg";
import games from "../assets/games.jpg";
import resort4 from "../assets/resort4.jpg";
import sunset1 from "../assets/sunset1.jpg";
import axios from "axios";
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/submit-form",
        formData
      );

      console.log(response.data); // Log the response from the server
      // Optionally, you can display a success message or redirect the user after successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors, display an error message to the user, etc.
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat relative">
        <img src={resort6} alt="resort" class=" w-screen h-screen " />
        <div className="absolute top-0 left-0 ">
          <img
            src={nishkarlogo}
            alt="logo"
            class="transition ease-in-out delay-150 bg-slate-300 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 ... rounded-full h-1/2 w-1/2 m-2 "
          />
        </div>
        <div class="absolute top-0 right-0 ">
          <nav class="bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                class="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="/"
                      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="relative">
                      <button onClick={toggleDropdown} className="">
                        Dropdown
                      </button>
                      {isOpen && (
                        <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                          <Link
                            to={"about"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            About the property
                          </Link>
                          <Link
                            to={"single"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Single room
                          </Link>
                          <Link
                            to={"deluxe"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Deluxe room
                          </Link>
                          <Link
                            to={"club"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Boat club
                          </Link>
                          <Link
                            to={"pool"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Swimming pool
                          </Link>
                          <Link
                            to={"park"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Park
                          </Link>
                          <Link
                            to={"cafeteria"}
                            className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                          >
                            Cafeteria
                          </Link>
                        </div>
                      )}
                    </div>
                  </li>

                  <li>
                    <Link
                      to={"/galary"}
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/info"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="absolute top-1/4 left-1/3 ">
          <div class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... text-3xl font-normal font-serif italic">
            Welcome to Nishkar lodge
          </div>
          <div class="pl-16 text-emerald-900 font-serif italic text-sm">
            Recharge,Relax,Repeat
          </div>
          <button class="transition ease-in-out delay-150 bg-emerald-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  py-2 px-4 rounded-lg ml-24 my-4">
            Book now
          </button>
        </div>
      </div>
      <div class="bg-orange-200">
        <div class=" flex flex-col md:flex-row">
          <img
            src={dining}
            alt="food area"
            class="  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-28 mt-28"
          />
          <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            Experience the perfect fusion of nature, luxury, and gastronomy at
            our resort's dining area. We invite you to join us for an
            unforgettable dining adventure. Whether you're a food enthusiast or
            looking for a casual dining spot, our dining area has something to
            satisfy every guest.
          </div>
        </div>
        <div class=" flex flex-col md:flex-row">
          <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            Make the most of your vacation at our resort with an array of
            thrilling activities and sports at our dedicated sports club.Come
            join us at our sports club and create unforgettable memories as you
            enjoy a vacation filled with excitement, relaxation, and endless
            fun.
          </div>
          <img
            src={games}
            alt="food area"
            class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-16 mt-28 "
          />
        </div>
        <div class=" flex flex-col md:flex-row">
          <img
            src={resort4}
            alt="food area"
            class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-28 mt-28"
          />
          <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            Whether you're seeking a tranquil retreat or a lively gathering
            spot, our swimming pool area is a hub of relaxation and socializing.
            It's the perfect place to make lasting memories with loved ones or
            simply bask in the beauty of your surroundings. Discover the epitome
            of relaxation and luxury at our resort's beautiful swimming pool.
            Join us for a dip, a sip, and a slice of paradise. Your perfect
            vacation awaits.
          </div>
        </div>
        <div class=" flex flex-col md:flex-row">
          <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            As day turns into night, our sunset images serve as a reminder of
            the tranquility and awe-inspiring moments that our resort promises
            to deliver. They invite you to unwind, reconnect with nature, and
            create lasting memories with loved ones.
          </div>
          <img
            src={sunset1}
            alt="food area"
            class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80 mx-28 mt-28"
          />
        </div>
      </div>
      <div class="">
        <div class="text-3xl text-rose-400 flex justify-center mt-8 mb-4">
          We'd love to hear from you!
        </div>
        <div class="max-w-md mx-auto border-2 border-rose-300 p-4 rounded-lg">
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  bg-orange-200 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-orange-200 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-orange-200 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-300 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="">
        <div class="text-3xl  flex justify-center mt-16">
          Better yet, Give us a Call!
        </div>
        <div class=" flex justify-center mt-8 text-lg text-orange-500 ">
          We love our customers, so feel free to visit during normal business
          hours.
        </div>
        <div class="flex justify-center text-lg text-orange-500 ">
          Email us on info@ratapani.in
        </div>
        <div class=" flex justify-center  text-lg text-orange-500 ">
          Ratapani Jungle Lodge, Kolar Dam, Dist, Veerpur, Lawa Khadi, Madhya
          Pradesh, India 9584551234
        </div>
        <div class=" flex justify-center text-lg text-orange-500 ">
          9584551234
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <div class="text-3xl ">Check-in & Check-out Time</div>
      </div>
      <div class=" flex justify-center my-3 text-orange-500">1 PM - 11 AM</div>
      <div className="w-full h-80 my-8">
        <iframe
          title="Google Map"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1140948.154800445!2d77.31316261939063!3d23.23658944730313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397e3c35219e272d%3A0x6e2b7010b50bd92!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1649428210222!5m2!1sen!2sin"
        ></iframe>
      </div>
      <div class="flex justify-center text-3xl p-3 bg-orange-200">
        Copyright © 2024 Ratapani Jungle Lodge - All Rights Reserved.
      </div>
    </>
  );
};

export default Home;
