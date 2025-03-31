import { Link } from "react-router";
import Page from "../components/Page";

const Home = () => {
  function projectThumbnail(text: string, image: string) {
    return (
      <div>
        <Link to="/">
          <div className="h-[250px] text-white"
               style={{backgroundImage: image, backgroundSize: "cover"}} />
          <p className="m-2 font-fredoka text-[18px] text-center">{ text }</p>
        </Link>
      </div>
    )
  }

  return (
    <Page>
      <div className="grid grid-cols-5 gap-4]">
        { projectThumbnail("EduSyst", "url(/img/edusyst/4.png)") }
      </div>
    </Page>
  );
};

export default Home;
