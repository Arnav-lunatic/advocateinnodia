import { Button, createTheme, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, ThemeProvider } from "flowbite-react";

const navTheme = createTheme({
    navbar: {
        "root": {
            "base": "bg-zinc-900 px-2 py-2.5 sm:px-4",
        },
    }
})

export function NavBar({classname=""}) {
    return (
        <ThemeProvider theme={navTheme}>
            <Navbar
                className={`${classname} z-20`}
                applyTheme={{
                    root: { base: "replace" },
                }} fluid>
                <NavbarBrand href="#">
                    <img src="/logoWhite.png" className="mr-3 h-6 sm:h-9" alt="Advocate in Noida logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-bold text-zinc-900 bg-white px-2">Advocate</span>
                    <span className="self-center whitespace-nowrap text-2xl text-white ml-1">in Nodia</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button clearTheme className="hidden md:block border-2 border-white bg-transparent text-white font-bold px-4 py-2 rounded-md hover:bg-white hover:text-zinc-900 transition-all duration-300 cursor-pointer">Get Appointment</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink href="/" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#about">About</NavbarLink>
                    <NavbarLink href="#services">Services</NavbarLink>
                    <NavbarLink href="#pricing">Pricing</NavbarLink>
                    <NavbarLink href="#contact">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </ThemeProvider>
    );
}
