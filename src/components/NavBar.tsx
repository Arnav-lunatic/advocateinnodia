import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function NavBar({ classname = "" }) {
    const url = window.location.pathname;

    return (
        <div>
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
                    <Button color="navButton" >Get Appointment</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink
                        color="navLink" href="/" active={url === "/"}>
                        Home
                    </NavbarLink>
                    <NavbarLink href="/about" active={url === "/about"}>About</NavbarLink>
                    <NavbarLink href="/services" active={url === "/services"}>Services</NavbarLink>
                    <NavbarLink href="/pricing" active={url === "/pricing"}>Pricing</NavbarLink>
                    <NavbarLink href="/contact" active={url === "/contact"}>Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}
