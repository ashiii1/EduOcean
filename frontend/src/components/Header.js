import {
	Styledheader,
	Nav,
	Rightcontainer,
	Menu,
	
	
	Logo,
} from "./styles/Header.styled";
import MainNavbar from "./MainNavbar";
import { Button, GetButton } from "./styles/Button.styled";
import { useState } from "react";
import { FlexContainer } from "./styles/FlexContainer.styled";
import { Flex } from "./styled/Flex.styled";
import { LogoImg, Logotext } from "./styled/Logo.styled";
import { Link } from "react-router-dom";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
<div>
		{/* // <Styledheader> */}
		<MainNavbar/>
			<Nav>
				<Logo>
					<Flex logo>
						<LogoImg src="./images/logo-gradient.svg" alt="Quizup logo" />
						<Logotext>QuizUp</Logotext>
					</Flex>
				</Logo>

				<Rightcontainer onClick={() => setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</Rightcontainer>
				<Menu isOpen={isOpen}>
					
					<Link to={"/login"}>
						<Button>Login</Button>
					</Link>
				</Menu>
			</Nav>
			<FlexContainer bcg>
				<div>
					<h3 className=" text-black">100% SATISFACTION GUARANTEE</h3>

					<h1>Test your skills digitally from the comfort of your home.</h1>
					<p>
						Quality Mock tests and competitive Quizzes, now accessible at the
						click of a button.
					</p>
					<Link to={"/login"}>
						<GetButton>Get Started For Free</GetButton>
					</Link>
				</div>

				{/* <span>
					<Image src="./images/Hero image.svg" alt="hero" />
				</span> */}
			</FlexContainer>
		{/* // </Styledheader> */}
		</div>
	);
}
