import { PropsWithChildren } from "react"
import Navbar from "./Navbar"
import { useTranslation } from "react-i18next"

const Page = (props: PropsWithChildren) => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const langSelectAttr = "hover:underline hover:cursor-pointer hover:font-bold";
  const langSelectImgAttr = "w-[25px] h-fit mr-1 rounded-2xl";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />

      {/* Page content */}
      <main className="flex-grow w-screen max-w-[1500px] p-5 xl:p-10">
        {props.children}
      </main>

      {/* Footer */}
      <footer className="w-full p-6 bg-gray-200 text-center font-fredoka">
        <p><strong>&copy;{currentYear} { t("navbar.title") }.</strong> { t("footer.text") }</p>

        {/* Language selector */}
        <div className="flex justify-center items-center gap-3">
          <p>{ t("footer.lang") }</p>

          <div className="flex items-center"> {/* English */}
            <img className={langSelectImgAttr} src="https://flagsapi.com/US/flat/64.png" />
            <p className={langSelectAttr}
               onClick={() => i18n.changeLanguage("en")} >
              { t("footer.en")}
            </p>
          </div>

          <div className="flex items-center"> {/* Portuguese */}
            <img className={langSelectImgAttr} src="https://flagsapi.com/BR/flat/64.png" />
            <p className={langSelectAttr}
               onClick={() => i18n.changeLanguage("pt")}>
              { t("footer.pt") }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page