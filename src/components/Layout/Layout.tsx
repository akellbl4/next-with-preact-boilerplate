import Link from "next/link"
import classnames from "classnames"

import css from "./Layout.module.css"
import isActiveLink from "utils/is-active-link"
import { useRouter } from "next/router"

export interface LayoutProps {
	showHeader?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => {
	const { asPath } = useRouter()

	return (
		<div className={css.root}>
			{showHeader && (
				<header className={css.header}>
					<nav>
						<Link href="/">
							<a
								className={classnames(css.navLink, {
									[css.navLinkActive]: isActiveLink("/", asPath),
								})}
							>
								Home page
							</a>
						</Link>
						<Link href="/contacts">
							<a
								className={classnames(css.navLink, {
									[css.navLinkActive]: isActiveLink("/contacts", asPath),
								})}
							>
								Contacts
							</a>
						</Link>
						<Link href="/about">
							<a
								className={classnames(css.navLink, {
									[css.navLinkActive]: isActiveLink("/about", asPath),
								})}
							>
								About
							</a>
						</Link>
					</nav>
				</header>
			)}
			<main>{children}</main>
		</div>
	)
}

export default Layout
