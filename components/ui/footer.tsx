import Logo from "./logo";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="my-4 flex flex-col justify-center items-center align-middle w-full">
        <div className="flex flex-row justify-between align-middle gap-4 items-center w-1/2">
          ©{new Date().getFullYear()} Toom AI.
          <div className="flex flex-col   items-start">
            <h6 className="text-sm text-slate-50 font-medium ">Холбоо барих</h6>
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
