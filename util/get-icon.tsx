import Linkedin from "../assets/icons/icons8-linkedin.svg";
import Github from "../assets/icons/icons8-github.svg";
import Medium from "../assets/icons/icons8-medium.svg";
import Twitter from "../assets/icons/icons8-twitter.svg";

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <Linkedin />;
    case "twitter":
      return <Twitter />;
    case "medium":
      return <Medium />;
    case "github":
      return <Github />;
  }
};

export default getIcon;
