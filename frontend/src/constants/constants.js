import { teamMem } from "../assets";

const navigationLinks = [
    { id: "01", name: "Home", route: "/" },
    { id: "02", name: "Report", route: "/report" },
    { id: "03", name: "Volunteer", route: "/volunteer" },
    { id: "04", name: "Donate", route: "/donate" },
    { id: "05", name: "About us", route: "/about" },
    { id: "06", name: "Sign In", route: "/signin" },
]

const teamMember = [
    { photoPath: teamMem, name: 'Ram Kumar thapa', post: 'Founding Member' },
    { photoPath: teamMem, name: 'Bimal Gharti Magar', post: 'Founding Member' },
    { photoPath: teamMem, name: 'Shankar Shah', post: 'Founding Member' }
]

const MapBoxApiKey = "pk.eyJ1IjoiZGV2ZW5kcmFzYWgiLCJhIjoiY2xnYjNlM3JvMTZ5aTN4cGkyM29xamRqdiJ9.fXRKtqUq-qwa0iz3VndW-A";

const messenger = {
    pageId: "106560697968888", appId: "561671326031331"
}

export { navigationLinks, teamMember, MapBoxApiKey, messenger };