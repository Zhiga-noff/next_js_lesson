import type {PropsWithChildren} from "react";

const Layout = ({children}:PropsWithChildren) =>{
    return <div><h1>Dashboard</h1>{children}</div>
}

export default Layout