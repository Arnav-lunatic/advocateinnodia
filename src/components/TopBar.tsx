import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

// EmailPhoneTopBar.jsx
// Simple, accessible top bar showing email and phone.
// Tailwind CSS classes are used for styling.
// Props:
// - email (string) default: "hello@example.com"
// - phone (string) default: "+1-555-555-5555"
// - className (string) extra wrapper classes
// Usage: <EmailPhoneTopBar email="hi@site.com" phone="+91-9876543210" />

export function TopBar({
  email = "hello@example.com",
  phone = "+1-555-555-5555",
  className = "",
}) {
  return (
    <header className={`w-full ${className}`} aria-hidden={false}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 text-sm md:text-base font-medium hover:underline focus:outline-none"
              aria-label={`Email: ${email}`}
            >
              <MdOutlineAlternateEmail className="w-5 h-5" />
              <span className="truncate max-w-xs">{email}</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-sm md:text-base font-medium hover:underline focus:outline-none"
              aria-label={`Phone: ${phone}`}
            >
              <MdOutlineLocalPhone className="w-5 h-5" />
              <span className="truncate max-w-xs">{phone}</span>
            </a>
          </div>


          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <a
              href="https://www.facebook.com/advocateinnoida"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 focus:outline-none"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/jassingh1983/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 focus:outline-none"
              aria-label="Instagram"
            >
              <BsInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasvir-singh-341bb8200/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 focus:outline-none"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/jasvirs51881560"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 focus:outline-none"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
