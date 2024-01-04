import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import SearchIcon from "../../public/search-normal.png";
import HeartIcon from "../../public/heart.svg";
import CartIcon from "../../public/shopping-bag.svg";
import ProfileIcon from "../../public/profile.svg";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link legacyBehavior href="/">
              <a
                className="block  h-6 w-6 md:h-9 md:w-9 mr-10 md:mr-28"
                title="Home"
              >
                <Image src={Logo} alt="logo" />
              </a>
            </Link>
          </div>

          <div>
            <h1 className="md:text-[36px] text-[20px] font-extrabold">LOGO</h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="sm:flex gap-2 sm:gap-1 ">
              <div className="flex gap-2 pt-2 ">
                <Image
                  className="md:w-6 md:h-6 w-5 h-5 cursor-pointer"
                  src={SearchIcon}
                  alt="search"
                />
                <Image
                  className="md:w-6 md:h-6 w-5 h-5 cursor-pointer"
                  src={HeartIcon}
                  alt="heart"
                />
                <Image
                  className="md:w-6 md:h-6 w-5 h-5 cursor-pointer"
                  src={CartIcon}
                  alt="cart"
                />
                <Image
                  className="md:w-6 hidden md:h-6 cursor-pointergit "
                  src={ProfileIcon}
                  alt="profile"
                />
              </div>

              <div className="hidden md:block">
                <select
                  id="languageSelect"
                  name="language"
                  className="rounded bg-gray-100 p-2 text-gray-600 border-none"
                >
                  <option value="">Select</option>
                  <option value="english">ENG</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[40px] hidden md:block">
        <ul className="flex justify-center items-center text-[20px] font-bold gap-16">
          <li>
            <Link legacyBehavior href="/shop">
              <a>SHOP</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/skills">
              <a>SKILLS</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/stories">
              <a>STORIES</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a>CONTACT US</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
