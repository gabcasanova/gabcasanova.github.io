import Page from "../components/Page"

import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <div className="flex flex-col flex-grow justify-center items-center">
        <h2 className="text-9xl font-walkaway">404</h2>
        <p className="text-2xl font-fredoka">{ t("pages.notfound.text") }</p>

        <Link className="mt-7 font-fredoka text-blue-500 text-center xl:text-left 
                         hover:font-bold hover:underline" 
                         to="/" >
          { t("pages.notfound.return") }
        </Link>
      </div>
    </Page>
  )
}

export default NotFound