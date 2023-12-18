import React from "react";


export function FormFooterLinks({infoText, children}) {
    return (
        <>
        <p className="text text_type_main-default text_color_inactive">
            {infoText} <span>{children}</span>
        </p>
        </>
    )
}