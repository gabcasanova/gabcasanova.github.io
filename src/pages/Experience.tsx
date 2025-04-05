import imgDot from "../assets/img/dot.png"

import Page from "../components/Page"

import { useTranslation } from "react-i18next"

type ExperienceProps = {
  institution: string,
  img: string,  
  date: string,
  location: string,
  role: string,
  text: string
}

const Experience = () => {
  const { t } = useTranslation()

  // Get information from JSON.
  const companies = t("pages.experience.companies", { returnObjects: true })
  const companyListing = Array.isArray(companies) ? companies : Object.values(companies);

  const academic = t("pages.experience.academic", { returnObjects: true })
  const academicListing = Array.isArray(academic) ? academic : Object.values(academic); 

  // Template experience div.
  function experienceSection(props: ExperienceProps, key: number) {
    return (
      <div className="font-fredoka mb-5" key={key}>
        <div className="flex items-center">
          {/* Institution Logo */}
          <img className="h-[70px] w-[70px] mr-3 border-1 p-1" src={props.img} />

          {/* Institution name, date of work and location */}
          <div>
            <p className="font-bold">{ props.institution }</p>
            <p>{ props.date }</p>
            <p className="text-gray-500" >{ props.location }</p>
          </div>
        </div>

        <div className="mt-3 flex">
          {/* Dot and line graphic */}
          <div className="w-[70px] p-2 flex flex-col items-center">
            <img className="w-[12px]" src={imgDot} />
            <div className="border-s-3 h-full border-gray-700" />
          </div>

          <div className="flex-1">
            {/* Role in the institution and main text */}
            <p className="font-bold">{ props.role }</p>
            <p className="text-justify">{ props.text }</p>
          </div>
        </div>        
      </div>
    )
  }

  // Create experience section from array.
  function createExperience(experienceArray: ExperienceProps[]) {
    return (
      <div>
        {experienceArray.map((institution, index) => (
          experienceSection(institution, index)
        ))}
      </div>
    )
  }

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.experience.title") }
      </h1>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="mb-10 text-4xl font-walkaway">{ t("pages.experience.career") }</h2>
          { createExperience(companyListing) }
        </div>

        <div>
          <h2 className="mb-10 text-4xl font-walkaway">{ t("pages.experience.education") }</h2>
          { createExperience(academicListing) }
        </div>
      </div>
    </Page>
  )
}

export default Experience