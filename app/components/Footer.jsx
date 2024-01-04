import Image from "next/image";
import React from "react";
import UsFlag from "../../public/us.png";
import Gpay from "../../public/Group 136188.svg";
import MasterCard from "../../public/Group 136190.svg";
import Paypal from "../../public/Group 136192.svg";
import Amex from "../../public/Group 136193.svg";
import ApplePay from "../../public/Group 136194.svg";
import Opay from "../../public/Group 136195.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-white md:flex justify-between">
          <div className="flex flex-col">
            <h1 className="md:text-xl text-base font-bold">
              BE THE FIRST TO KNOW
            </h1>
            <p className="md:text-base text-sm mt-2">
              Sign up for updates from metta muse.
            </p>
            <div className="flex gap-4 md:mt-8 mt-4">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="p-2 md:px-8 px-6 "
              />
              <button className="text-[#BFC8CD] border border-[#BFC8CD] py-2 px-3 md:py-2 md:px-8 rounded-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-bold">CONTACT US</h1>
            <p className="mt-2">+44 221 133 5360</p>
            <p className="mt-2 text-sm">customercare@mettamuse.com</p>
            <h1 className="text-xl font-bold mt-3">CURRENCY</h1>
            <div className="flex gap-1 mt-2">
              <p className="text-base font-bold">USD</p>
            </div>
            <p className="mt-2 text-sm md:text-right">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr className=" bg-white mt-6" />

        {/* 2 */}
        <div className="flex ">
          <div className="mt-10 flex flex-col lg:flex-row lg:gap-[275px]">
            <div className="flex flex-col gap-8 text-center lg:flex-row lg:text-left">
              <div>
                <strong className=" text-2xl text-white"> mettā muse </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a className="text-white text-base" href="/">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Artisans
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Boutiques
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      EU Compliances Docs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-2xl text-white">QUICK LINKS</strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a className="text-white text-base" href="/">
                      Orders & Shipping
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Join/Login as a Seller
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Payment & Pricing
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      Return & Refunds
                    </a>
                  </li>

                  <li>
                    <a className="text-white text-base" href="/">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-base" href="/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-base" href="/">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto max-w-sm lg:max-w-none">
              <h1 className=" text-xl md:mt-2 mt-4 md:text-left text-center font-bold text-white">
                FOLLOW US
              </h1>
              <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">
                <a
                  className="text-white border p-1 w-8 h-8 rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="w-5  h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-white border p-1 w-8 h-8 rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="w-5  h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <h1 className=" text-xl font-bold text-white mt-8">
                  mettā muse Accepts
                </h1>

                <div className="flex gap-2 mt-4">
                  <Image src={Gpay} alt="card1" />
                  <Image src={MasterCard} alt="card2" />
                  <Image src={Paypal} alt="card3" />
                  <Image src={Amex} alt="card4" />
                  <Image src={ApplePay} alt="card5" />
                  <Image src={Opay} alt="card6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-8">
          <p className="text-center text-xs/relaxed text-white">
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
