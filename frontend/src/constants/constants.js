import { teamMem } from "../assets";

const navigationLinks = [
    { id: "01", name: "Home", route: "/" },
    { id: "02", name: "Report", route: "/report" },
    { id: "03", name: "Volunteer", route: "/volunteer" },
    { id: "04", name: "Donate", route: "/donate" },
    { id: "05", name: "About us", route: "/about" },
    { id: "06", name: "Blog", route: "/blog" },
    { id: "07", name: "Sign In", route: "/signin" },
]

const teamMember = [
    { photoPath: teamMem, name: 'Ram Kumar thapa', post: 'Founding Member' },
    { photoPath: teamMem, name: 'Bimal Gharti Magar', post: 'Founding Member' },
    { photoPath: teamMem, name: 'Shankar Shah', post: 'Founding Member' }
]

const googleMapsApi = 'AIzaSyBLEaTTrzYWeyeL_0JVU2uPOxQTR08BCrg';

export { navigationLinks, teamMember, googleMapsApi };