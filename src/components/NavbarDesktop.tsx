//import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { SocialIcon } from "react-social-icons";

const NavbarDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      {/* Website title */}
      <div>
        <p className="text-7xl font-walkaway">Gabriel Casanova</p>
      </div>

      {/* Pages */}
      <div className="text-2xl flex items-end font-coolvetica">
        <ul>
          <li className="inline hover:underline">
            <Link to="/">{t("global.navbar.home")}</Link>
          </li>
          <li className="inline ml-12 hover:underline">
            <Link to="/">{t("global.navbar.education")}</Link>
          </li>
          <li className="inline ml-12 hover:underline">
            <Link to="/">{t("global.navbar.about")}</Link>
          </li>
        </ul>
      </div>

      {/* Social media */}
      <div className="flex items-center">
        <SocialIcon
          className="hover:brightness-80 duration-100"
          target="_blank"
          url="https://github.com/gabcasanova"
        />
        <SocialIcon
          className="hover:brightness-80 duration-100 ml-2"
          target="_blank"
          url="https://www.linkedin.com/in/gbcasanova/"
        />
        <SocialIcon
          className="hover:brightness-80 duration-100 ml-2"
          target="_blank"
          url="https://x.com/gabcasanova_dev"
        />
        <SocialIcon
          className="hover:brightness-80 duration-100 ml-2"
          target="_blank"
          url="mailto:con.casanovaproductions@gmail.com"
        />
      </div>
    </div>
  );
};

export default NavbarDesktop;
