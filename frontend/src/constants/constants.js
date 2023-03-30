import { teamMem, vol1, vol2, vol3 } from "../assets";

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

const googleMapsApi = 'AIzaSyBLEaTTrzYWeyeL_0JVU2uPOxQTR08BCrg';

const volunteers = [
    { id: 1, name: "Rakesh Khadka", age: 26, imgPath: vol1 },
    { id: 2, name: "Rakesh Ksdbha", age: 26, imgPath: vol2 },
    { id: 3, name: "Rakesh Khadasdwa", age: 26, imgPath: vol3 },
    { id: 4, name: "Rakesh Khadkawe", age: 26, imgPath: vol1 },
    { id: 5, name: "Rakesh Khadkea", age: 26, imgPath: vol2 },
    { id: 6, name: "Rakesh Khadska", age: 26, imgPath: vol3 },
    // { id: 7, name: "Rakesh Khadkasx", age: 26, imgPath: 's' },
]

export { navigationLinks, teamMember, googleMapsApi, volunteers };