// import App from "next/app";
import type { AppProps } from "next/app"

import "styles/global.css"
import Layout from "components/Layout"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const { layout = {}, ...props } = pageProps

	return (
		<Layout {...layout}>
			<Component {...props} />
		</Layout>
	)
}

export default MyApp
