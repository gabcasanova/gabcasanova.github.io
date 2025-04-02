import { Trans, useTranslation } from "react-i18next"
import { useParams } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Page from "../components/Page"
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

const Project = () => {
  const { t } = useTranslation()
  const params = useParams()

  const currentProject = `projects.${params.projectName}`

  console.log(t("projects.simulacrum.name"))

  function projectLink(icon: IconDefinition, text: string, link: string) {
    return (
      <p className="font-fredoka">
        <FontAwesomeIcon className="mr-2" icon={icon} />

        <a className="hover:font-bold hover:underline"
           href={link}
           target="_blank">
          {text}
        </a>
      </p>
    )
  }

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.project.title") }
      </h1>

      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2">
          {/* Main picture */}
          <div>
            
          </div>

          {/* Text */}
          <div>
            {/* Title */}
            <h2 className="text-4xl font-walkaway">{ t(`${currentProject}.name`) }</h2>
            <p className="text-gray-400 font-fredoka">
              { t(`${currentProject}.type`) } &bull; { t(`${currentProject}.year`) }
            </p>

            {/* Main Text */}
            <p className="mt-7 text-justify font-fredoka ">
              <Trans i18nKey={t(`${currentProject}.text`)} components={{ br: <br /> }} />
            </p>

            {/* Tech stack */}
            <div className="mt-7">
              <p className="font-bold font-fredoka">{ t("pages.project.stack") }:</p>
              <img className="mt-2" src={`https://skillicons.dev/icons?i=${t(`${currentProject}.stack`)}`}  />
            </div>

            {/* Links */}
            <div className="mt-7">
              <p className="font-bold font-fredoka">{ t("pages.project.links") }:</p>
              { projectLink(faEarthAmericas, t("pages.project.site"), t(`${currentProject}.links.site`)) }
              { projectLink(faGithub, t("pages.project.git"), t(`${currentProject}.links.git`)) }
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>

        </div>
      </div>
    </Page>
  )
}

export default Project