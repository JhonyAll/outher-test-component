import React, { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode | ReactNode[]
}

const Button: FC<ButtonProps> = ({ children }) => {
    return <button style={{ "backgroundColor": "red", "padding": "1em" }}>{children}</button>
}

export default Button;