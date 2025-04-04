import { useTranslation } from "react-i18next"
import imgMe from "../assets/img/me.jpg"

import Page from "../components/Page"
import { SocialIcon } from "react-social-icons"

const About = () => {
  const { t } = useTranslation()

  function socialLink(text:string, url: string) {
    return (
      <a className="mt-3 max-w-[200px] flex items-center hover:font-bold hover:underline" 
         href={url} target="_blank">          
        <SocialIcon as="div" label={ text } url={ url } />
        <p className="ml-4 text-2xl font-fredoka">{ text }</p>
      </a>
    )
  }

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.about.title") }
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Picture */}
        <div className="flex justify-center">          
          <img className="w-full max-w-[550px]" src={imgMe} />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-walkaway">{ t("pages.about.titleBig") }</h2>
          <p className="mt-7 text-justify font-fredoka break-words xl:break-normal">
            { t("pages.about.text") }
          </p>

          <p className="mt-10 font-bold font-fredoka">{ t("pages.project.links") }:</p>
          <div>
            { socialLink("GitHub",    "https://github.com/gabcasanova") }
            { socialLink("LinkedIn",  "https://www.linkedin.com/in/gbcasanova/") }
            { socialLink("X/Twitter", "https://x.com/gabcasanova_dev") }
            { socialLink("Email",     "mailto:gabrielcasanova.contato@gmail.com") }
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About