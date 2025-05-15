import { useTranslation } from "react-i18next"
import imgMe from "../assets/img/me.jpg"
import qrCode from "../assets/img/linktree_qr_code.png"

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
          <img className="w-full max-w-[550px] h-fit" src={imgMe} />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-walkaway">{ t("pages.about.titleBig") }</h2>
          <p className="mt-7 text-justify font-fredoka break-words xl:break-normal">
            { t("pages.about.text") }
          </p>

          {/* Links */}
          <p className="mt-10 font-bold font-fredoka">{ t("pages.project.links") }:</p>
          <div>
            { socialLink("GitHub",    "https://github.com/gabcasanova") }
            { socialLink("LinkedIn",  "https://www.linkedin.com/in/gbcasanova/") }
            { socialLink("Instagram", "https://www.instagram.com/gbcasanova_dev/") }
            { socialLink("X/Twitter", "https://x.com/gbcasanova_dev") }
            { socialLink("Medium",    "https://gbcasanova.medium.com/") }
            { socialLink("Email",     "mailto:gabrielcasanova.contato@gmail.com") }
          </div>

          {/* QR Code */}
          <div className="self-center">
            <img className="mt-7 mb-2 max-w-[200px] " src={qrCode} />
            <p className="text-center font-fredoka hover:font-bold hover:underline">
              <a href="https://linktr.ee/gbcasanova">My Linktree</a>
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About