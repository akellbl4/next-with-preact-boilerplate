import { NextPage } from "next"

import Button from "components/Button"

const Home: NextPage = () => {
	return (
		<section>
			Hello World. <br />
			<Button onClick={() => alert("My finger is on the button")}>
				Push the button
			</Button>
		</section>
	)
}

export default Home
