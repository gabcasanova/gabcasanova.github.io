import { PropsWithChildren } from "react"
import Navbar from "./Navbar"
import { useTranslation } from "react-i18next"

const Page = (props: PropsWithChildren) => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />

      {/* Page content */}
      <main className="flex-grow w-screen max-w-[1500px] p-10">
        {props.children}
      </main>

      <footer className="w-full p-7 bg-gray-200 text-center font-fredoka">
        &copy;{currentYear} { t("footer.text") }
      </footer>
    </div>
  )
}

export default Page