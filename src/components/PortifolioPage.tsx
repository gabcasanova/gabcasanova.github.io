//import React from 'react'

import { useTranslation } from "react-i18next";
import NavbarDesktop from "./NavbarDesktop";

const PortifolioPage = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page content */}
      <div className="m-15">
        <NavbarDesktop />
      </div>

      {/* Footer */}
      <div className="flex-grow" />
      <div className="bg-gray-200 p-10">
        <p className="font-fredoka font-semibold">
          &copy; {currentYear} {t("global.footer")}
        </p>
      </div>
    </div>
  );
};

export default PortifolioPage;
