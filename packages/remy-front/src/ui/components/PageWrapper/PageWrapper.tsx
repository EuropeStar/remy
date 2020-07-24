import React from "react"
import Header from "../Header"

export const PageWrapper = ({children}: React.PropsWithChildren<{}>): JSX.Element => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}