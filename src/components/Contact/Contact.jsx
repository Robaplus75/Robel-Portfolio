import "../../styles/Contact.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export default function Contact(){
	return (
		<div class="contact-container">
			<div class="contactInfo">
				<div>
					<h2>Contact Info</h2>
					<ul class="info">
						<li>
							<span><i class='bx bx-map'></i></span>
							<span>
								Gerji MebratHail<br />
								Addis Ababa<br />
								Ethiopia
							</span>
						</li>

						<li>
							<span><i class='bx bx-envelope' ></i></span>
							<span>robelwon75@gmail.com</span>
						</li>

						<li>
							<span><i class='bx bx-phone-call' ></i></span>
							<span>+251-939596285</span>
						</li>
					</ul>
				</div>

				<ul class="sci">
					<li>
						<a href="https://linkedin.com" target="_blank">
							<FaLinkedin className="social-icon" />
						</a>
					</li>
					<li>
						<a href="https://github.com" target="_blank">
							<FaGithub className="social-icon" />
						</a>
					</li>
					<li>
						<a href="https://t.me/kingsforme" target="_blank">
							<FaTelegram  className="social-icon" />
						</a>
					</li>
				</ul>
			</div>

			<div class="contactForm">
				<h2>Send a Message</h2>
				<div class="formBox">
					<div class="inputBox w50">
						<input type="text" required />
						<span>First Name</span>
					</div>
					<div class="inputBox w50">
						<input type="text" required />
						<span>Last Name</span>
					</div>
					<div class="inputBox w50">
						<input type="email" required />
						<span>Email Addresss</span>
					</div>
					<div class="inputBox w50">
						<input type="text" required />
						<span>Mobile Number</span>
					</div>
					<div class="inputBox w100">
						<textarea required></textarea>
						<span>write your message here...</span>
					</div>
					<div class="inputBox w100">
						<input type="submit" value="Send" />
					</div>
				</div>
			</div>
		</div>
	)
}