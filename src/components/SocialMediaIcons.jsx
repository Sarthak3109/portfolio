import Linkedin from "../assets/li.png";
import Github from "../assets/gh.png";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/insta.png";
import leetcode from "../assets/leetcode.png"
import cf from "../assets/cf.png"

const SocialMediaIcons = () => {
    return (
        <div className="flex gap-10 justify-center md:justify-start my-10">

            <a
                href="https://leetcode.com/Sarthak_02/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="leetcode-link" src={leetcode} width={30} height={30}/>
            </a>

            <a
                href="https://codeforces.com/profile/Imperfect_mars"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="codeforces-link" src={cf} width={30} height={30} />
            </a>
            <a
                href="https://www.linkedin.com/in/sarthak-goel-68612a24a"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={Linkedin} width={30} height={30} />
            </a>

            <a
                href="https://github.com/Sarthak3109"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src={Github} width={30} height={30} />
            </a>
        </div>
    )
}
export default SocialMediaIcons;