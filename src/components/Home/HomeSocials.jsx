import "../../styles/HomeSocials.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function HomeSocials(){
	return (
		<div className="home_socials">
			<a href="https://linkedin.com" target="_blank">
				<FaLinkedin className="social-icon" />
			</a>
			<a href="https://github.com" target="_blank">
				<FaGithub className="social-icon" />
			</a>
			<a href="https://t.me/kingsforme" target="_blank">
				<FaTelegram  className="social-icon" />
			</a>
		</div>
		)
}