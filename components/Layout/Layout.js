import NavBar from "@components/Navbar/NavBar"



const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            { children }
        <footer>This is the footer</footer>
        </div>
    )
}

export default Layout