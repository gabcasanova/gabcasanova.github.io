import { Link } from "react-router";
import Page from "../components/Page";

const Home = () => {
  function projectThumbnail(text: string, image: string) {
    return (
      <div>
        <Link to="/">
          <div className="h-[250px] text-white hover:brightness-90 transition duration-150"
               style={{backgroundImage: image, backgroundSize: "cover"}} />
          <p className="m-2 font-fredoka text-[18px] text-center">{ text }</p>
        </Link>
      </div>
    )
  }

  return (
    <Page>
      <h1 className="mb-10 uppercase font-fredoka">Web development</h1>

      <div className="grid grid-cols-5 gap-4">
        { projectThumbnail("PVic Games", "url(/img/pvic/thumb.png)") }
        { projectThumbnail("EduSyst",    "url(/img/edusyst/thumb.png)") }
      </div>
    </Page>
  );
};

export default Home;
