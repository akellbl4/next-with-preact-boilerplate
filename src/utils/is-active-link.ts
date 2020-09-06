export default function isActiveLink(
	href: string,
	pathname: string,
	exact?: boolean
): boolean {
	if (exact) {
		return href === pathname
	}

	if (href === "/") {
		return pathname === "/"
	}

	return pathname.startsWith(href)
}
