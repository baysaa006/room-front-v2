import Logo from "./logo";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="my-4 flex flex-col justify-center items-center align-middle md:w-full ">
        <div className="flex flex-row justify-between align-middle gap-4 items-center  md:w-1/2 px-6 w-full">
          <h6 className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
            ©{new Date().getFullYear()} Toom AI.
          </h6>
          <div className="flex flex-col   items-start">
            <h6 className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
              Холбоо барих
            </h6>
            <ul className="flex mt-2 w-full">
              <li>
                <a
                  className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  href="#0"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="ml-2">
                <a
                  className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  href="#0"
                >
                  <MdEmail size={26} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
