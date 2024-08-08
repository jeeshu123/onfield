import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-extrabold italic text-xl sm:text-3xl md:text-4xl text-center my-6">
        <span className="text-green-800">Sports</span>Plus
      </p>
      <ul className="flex text-xs flex-wrap justify-center gap-4 md:text-sm w-9/12 mx-auto md:w-1/2 py-10">
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Contact Us</p>
        </li>
        <li>
          <p>Career</p>
        </li>
        <li>
          <p>Community Guidelines</p>
        </li>
        <li>
          <p>Sitemap</p>
        </li>
        <li>
          <p>Get Help</p>
        </li>
      </ul>
      <div className="flex gap-4 justify-center">
        <FaFacebook color="#166534" />
        <FaX color="#166534" />
        <FaInstagram color="#166534" />
      </div>
    </div>
  );
}
