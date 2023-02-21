
const baseUrl = "http://localhost:4000/api/";
const ApiConstants = {
    signIn: `${baseUrl}/auth/signin`,

}

const navigationLinks = [
    {id: "01", name: "Home", route: "/" },
    {id: "02", name: "Report", route: "/report" },
    {id: "03", name: "Volunteer", route: "/volunteer" },
    {id: "04", name: "Donate", route: "/donate" },
    {id: "05", name: "About us", route: "/about" },
    {id: "06", name: "Blog", route: "/blog" }
]

export { navigationLinks, ApiConstants };