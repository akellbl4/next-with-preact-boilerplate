import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Router from "next/router"

export const getStaticProps: GetStaticProps<{ text: string }> = async () => {
	return {
		props: {
			layout: {
				showHeader: false,
			},
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
	}
}

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
	text,
}) => {
	return (
		<section>
			<button onClick={() => Router.push("/")}>Go to home page</button>
			<h1>About us</h1>
			<p>{text}</p>
		</section>
	)
}

export default About
