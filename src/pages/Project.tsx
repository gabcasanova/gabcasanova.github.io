//components
import Page from "../components/Page"

// libraries
import { Trans, useTranslation } from "react-i18next"
import { useParams } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Project = () => {
  const { t } = useTranslation()

  // Get project from URL parameter.
  const params = useParams()
  const currentProject = `projects.${params.projectName}`

  // Get pictures array from JSON.
  const pics = t(`${currentProject}.pics`, { returnObjects: true });
  const projectPics = Array.isArray(pics) ? pics : Object.values(pics); 
  const [currentPic, setCurrentPic] = useState(projectPics[0])

  // Create URLs with fontawesome icons.
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

  // Create pictures from JSON array.
  function picturesGallery() {
    return (
      <div className="mt-10 grid grid-cols-4 gap-5">
        {projectPics.map((pic, index) => (
          <div className="brightness-90 hover:brightness-100 hover:cursor-pointer duration-100"
              onClick={() => setCurrentPic(pic)}>
            <img className="w-fit h-[50px] xl:h-[84px] m-auto" 
                src={pic}
                alt={`Project image ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.project.title") }
      </h1>
      
      {/* Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Pictures */}
        <div>
          <div>
            <img className="m-auto w-fit max-h-[370px]" src={`${currentPic}`} />
          </div>

          { picturesGallery() }
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
    </Page>
  )
}

export default Project