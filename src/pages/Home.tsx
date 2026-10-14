import Page from "../components/Page";

import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation()

  function projectThumbnail(
    text: string, 
    image: string, 
    link: string, 
    centerImage: boolean = false 
  ) {
    return (
      <div>
        <Link to={`/project/${link}`}>
          <div 
            className="h-[250px] text-white hover:brightness-90 transition duration-150"
            style={{
              backgroundImage: image, 
              backgroundSize: "cover",
              backgroundPosition: centerImage ? "center" : undefined
            }} 
          />
          <p className="m-2 font-fredoka text-[18px] text-center">{ text }</p>
        </Link>
      </div>
    )
  }

  return (
    <Page>
      {/* Section title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.home.games") }
      </h1>

      {/* Game Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        { projectThumbnail("ARTIUS: Pure Imagination",        "url(/img/artius/thumb.png)",      "artius",      true) }
        { projectThumbnail("Ednaldo Pereira: MESCLADASSO",    "url(/img/ednaldo/thumb.png)",     "ednaldo",     true) }
        { projectThumbnail("Serious Lord of the Rings Bros.", "url(/img/seriouslotr/thumb.png)", "seriouslotr", true) }
        { projectThumbnail("Shoelace!",                       "url(/img/shoelace/thumb.png)",    "shoelace",    true) }
        { projectThumbnail("Meet Metris",                     "url(/img/meetmetris/thumb.png)",  "meetmetris",  true) }
      </div>

      {/* Section title */}
      <h1 className="mt-10 mb-10 uppercase font-fredoka text-center xl:text-left">
        { t("pages.home.web") }
      </h1>

      {/* Web Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        { projectThumbnail("Sonic Megamix Mania", "url(/img/sonicmegamix/thumb.png)", "sonicmegamix") }
        { projectThumbnail("Lucia Ippolito",      "url(/img/lucia/thumb.png)",        "lucia")        }
        { projectThumbnail("Portfolio",           "url(/img/portfolio/thumb.png)",    "portfolio")    }
        { projectThumbnail("PVic Games",          "url(/img/pvic/thumb.png)",         "pvic")         }
        { projectThumbnail("EduSyst",             "url(/img/edusyst/thumb.png)",      "edusyst")      }
      </div>
    </Page>
  );
};

export default Home;