import "./App.css";
import NavBar from "./navbar";
import { Button } from "flowbite-react";
import Carouselcomponent from "./corousel";
import Accordion from "./accordion";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section
        id="welcome"
        className='bg-[url("/public/images/Background-pattern.svg")] pb-20'
      >
        <NavBar />
        
        <div className="h-56"></div>
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl my-2 font-semibold">
                Uniting the world one video call at a time
              </h1>

              <div className="text-sm text-slate-500">
                <p className="">
                  {" "}
                  Experience the future of communication with ClearLink -
                </p>
                <p>Where crystal-clear Video conferencing meets</p>
                <p>unparalled simplicity</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-2xl"
              >
                Start your free trail
              </button>
              <span className="text-[#5c8ddf]">
                <div className="ai-icon inline-block mr-1"></div>
                 Discover your AI assistant
              </span>
            </div>
            <div className="flex">
              <img src="Avatar-group.svg" alt="avatar group" />
              <div>
                <span>
                  <img className="inline-block" src="icons/5stars.svg" alt="" />
                  5.0
                </span>
                <div className="text-xs text-slate-400">
                  {" "}
                  from 3,000+ reviews
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eff8ff] rounded-md flex justify-center w-[450px] p-3 flex-col shadow-xl">
            <div className="w-[400px] grid grid-cols-3 gap-2">
              {/* <img src="" alt="" /> */}
              <div className="">
                {/* <!-- Image 1 --> */}
                <img src="images/animoji1.png" alt="Image 1" />
              </div>

              <div className="bg-[#d6bbfb] rounded-md">
                {/* <!-- Image 2 --> */}
                <img src="images/animoji2.png" alt="Image 1" />
              </div>

              <div className="">
                {/* <!-- Image 3 --> */}
                <img src="images/animoji3.png" alt="Image 1" />
              </div>

              <div className="bg-[#B3B8DB] rounded-md">
                {/* <!-- Image 4 --> */}
                <img src="images/animoji4.png" alt="Image 1" />
              </div>

              <div className="">
                {/* <!-- Image 5 --> */}
                <img src="images/animoji5.png" alt="Image 1" />
              </div>

              <div className="">
                {/* <!-- Image 6 --> */}
                <img src="images/animoji6.png" alt="Image 1" />
              </div>
            </div>
            <div className="flex gap-1 w-auto justify-center mt-4 mb-6 ">
              <div className="mic-icon cursor-pointer"></div>
            
              <div className="cam-icon cursor-pointer"></div>
              <div className="monitor-icon cursor-pointer"></div>
              <div className="smile-icon cursor-pointer"></div>
              <div className="chat-icon cursor-pointer"></div>
              <div className="settings-icon cursor-pointer"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center flex-col py-16">
          <h2 className="text-gray-600 text-center mb-3">
            join 1,500+ companies already video conferencing the ClearLink way
          </h2>
          <div className="flex justify-evenly">
            <img className="w-28" src="images/Shopify.svg" alt="coinbase" />
            <img className="w-28" src="images/Coinbase.svg" alt="coinbase" />
            <img className="w-28" src="images/Dropbox.svg" alt="Dropbox" />
            <img className="w-28" src="images/Intercom.svg" alt="interCom" />
            <img className="w-28" src="images/Marvel.svg" alt="marvel" />
            <img className="w-28" src="images/Automattic.svg" alt="Automatic" />
          </div>
        </div>
      </section>
      <section className="flex flex-col mb-5 ">
        <div className="ml-28">
          <h3 className="text-[#5c8ddf]">The clearLink Advantage</h3>
          <h1 className="text-3xl my-2 font-semibold">Why choose ClearLink</h1>
          <div className="text-sm text-gray-600">
            <p>
              in a world where connection is everything, ClearLink takes the
              lead, Our
            </p>
            <p>cutting-edge video confrencing app offers</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col  justify-evenly  ">
            <div className="flex flex-col  ">
              <div className="zapcam-icon"></div>
              <h1 className="text-lg font-medium">crystal-clear HD video</h1>
              <div className="text-sm text-gray-600">
                <p>No more pixelation or bluriness -just</p>
                <p>stunning, likelikfe clarity that brings your</p>
                <p>team closer in meetings</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="calender-icon"></div>
              <h1 className="text-lg font-medium">Scheduling made easy</h1>
              <div className="text-sm text-gray-600">
                <p>streamlining your agenda with clearLinks</p>
                <p>intuitive scheduling. set up meetings,</p>
                <p>sending invitatins, and recieving reminders in</p>
                <p>one place</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col">
              <div className="audio-icon"></div>
              <h1 className="text-lg font-medium">Noise- cancelling audio</h1>
              <div className="text-sm text-gray-600">
                <p>say goodbye to distractions with our </p>
                <p>advanced audio tech ffo crisp</p>
                <p>interruption-free conversation</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="lock-icon"></div>
              <h1 className="text-lg font-medium">Bank-grade security</h1>
              <div className="text-sm text-gray-600">
                <p>Your privacy is our priority with bank-</p>
                <p>grade security protocols safeguarding</p>
                <p>your meetings and data from unwanted </p>
                <p>intruders.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="images/Rectangle.svg" alt="people" />
          </div>
        </div>
      </section>
      <section>
        <Carouselcomponent />
      </section>
      <section>
        <div className=" grid grid-cols-2 gap-2 mt-4  p-24">
          <div className="">
            <h2 className="text-[#709be3] mt-0  text-sm my-4 cursor-pointer">
              support
            </h2>
            <h1 className="text-2xl font-bold ">
              FAQ<span>s</span>
            </h1>
            <p className="text-sm text-[#aeb3be]">
              Everything you need to know about the product and billing. Cant
              find the answer youre looking for? Please chat to our friendly
              team.
            </p>
          </div>
          <div>
            <Accordion />
          </div>
        </div>
      </section>
      <section className="flex justify-between mb-16">
        <div className="p-24">
          <h1 className="text-2xl font-bold my-3">
            Ready to clear the path to perfect communication?
          </h1>
          <div className="mb-4">
            <h2 className="text-sm text-gray-600 m-1  ">
              <div className="check-icon inline-block"></div> 30 days free trail
            </h2>
            <h2 className="text-sm text-gray-600 m-1">
              <div className="check-icon inline-block"></div> cancel at any
              ttime
            </h2>
            <h2 className="text-sm text-gray-600 m-1 ">
              <div className="check-icon inline-block"></div> Access to all
              features
            </h2>
            <h2 className="text-sm text-gray-600 m-1 ">
              <div className="check-icon inline-block"></div> personalized
              onboarding
            </h2>
          </div>
          <div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Talk to sales
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-2xl"
            >
              Start your free trail
            </button>
          </div>
        </div>
        <div>
          <img src="images/screen_mockup.svg" alt="guy" />
        </div>
      </section>
      <section className="flex justify-between p-24">
        <div>
          <h1 className="mb-3 text-xl font-semibold">
            <div className="group-icon"></div> ClearLink
          </h1>
          <p className="p-3 text-sm text-gray-600 font-medium mt-3">
            ClearLink is your gateway to effortless, high- quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Product
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Overview
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Features
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Solution
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Tutorials
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Pricing
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Company
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            About us
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Careers
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Press
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            News
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Contact
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Resorces
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Blog
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Events
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Help centre
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Tutorials
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Support
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Legal
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Terms
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Privacy
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Cookies
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Licenses
          </h2>
          <h2 className="text-sm text-gray-500 cursor-pointer my-3 font-semibold">
            Contact
          </h2>
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-[#3573ee]">Get the App</h2>
          <button
            type="button"
            className="text-white mt-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Get in Play Store
          </button>
          <button
            type="button"
            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              className="w-5 h-5 me-2 -ms-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            Get in App store
          </button>
        </div>
      </section>
      <footer className="bg-[#f9fafb] h-32 flex justify-evenly items-center">
        <h3 className="text-sm text-gray-600">
          © 2023 ClearLink. All rights reserved.
        </h3>
        <div className="flex justify-between">
          {/* <span></span> */}
          <SiFacebook className="text-gray-500 cursor-pointer text-lg mx-3" />
          <SiYoutube className="text-gray-500 cursor-pointer text-lg mx-3" />
          <SiGithub className="text-gray-500 cursor-pointer text-lg mx-3" />
          <SiInstagram className="text-gray-500 cursor-pointer text-lg mx-3" />
          <SiLinkedin className="text-gray-500 cursor-pointer text-lg mx-3" />
        </div>
      </footer>
    </>
  );
}

export default App;
