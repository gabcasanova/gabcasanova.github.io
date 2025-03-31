import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  // i18n always returns an object, even if it's an array; so 
  // we gotta convert from object to array.
  const links = t("navbar.links", { returnObjects: true });
  const pageLinks = Array.isArray(links) ? links : Object.values(links); 

  function navbarMobile() {
    return <div className="xl:hidden">Navbar mobile</div>;
  }

  // DESKTOP NAVBAR...
  function desktopButton(text: string, link: string) {
    const active = pathname === link; // check if it's the current page.

    return (
      <Link className={`mr-10 font-walkaway text-3xl 
                        hover:underline underline-offset-2 decoration-1 
                        hover:cursor-pointer transform transition duration-300
                        ${active ? `text-black` : `text-gray-400`}  `}
            to={link}>
        {text}
      </Link>
    )
  }

  function navbarDesktop() {
    return (
      <div className="hidden xl:flex items-end justify-between p-10 pr-0">
        <h1 className="font-walkaway text-6xl"> Gabriel Casanova </h1>
        <nav className="flex">
          {/* Create buttons for every link. */}
          {pageLinks.map((link, index) => (
            <div key={index}>
              { desktopButton(link.text, link.url) }
            </div>
          ))}
        </nav>
      </div>
    )
  }

  return (
    <header className="w-full max-w-[1500px]">
      { navbarMobile() }
      { navbarDesktop() }
    </header>
  );
};

export default Navbar;
