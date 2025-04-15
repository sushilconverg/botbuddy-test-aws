"use client"

import { useEffect } from "react";
import { useUser } from "../UserContext";

function Layout(
    { children }: { children: React.ReactNode },
) {
    const { dispatch } = useUser();
    useEffect(() => {
        dispatch({ type: "SETPROJECT", payload: { projectName: "TechGenie" } })
    }, [])
    return (
        <>
            {children}
        </>
    );
}

export default Layout;
