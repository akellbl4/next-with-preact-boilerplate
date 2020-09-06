import cx from "classnames/bind"

import css from "./Button.module.css"

const classnames = cx.bind(css)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	kind?: "button" | "rounded"
}
const Button: React.FC<ButtonProps> = ({
	kind = "button",
	children,
	...props
}) => {
	return (
		<button className={classnames(css.root, kind)} {...props}>
			{children}
		</button>
	)
}

export default Button
