import axios from "axios";

const accessToken = localStorage.getItem("access_token");

// Defining a base url
const customFetch = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    Authorization: `bearer ${accessToken}`,
  },
});

// Registration and Signin api handling here
const signUpApiHandler = async (
  name,
  address,
  emailAddress,
  phoneNumber,
  password,
  role
) => {
  const response = await customFetch.post("auth/signup", {
    name,
    address,
    emailAddress,
    phoneNumber,
    password,
    role,
  });
  return response;
};

const signInApiHandler = async (emailAddress, password) => {
  const response = await customFetch.post("auth/signin", {
    emailAddress,
    password,
  });
  return response;
};

// Report Api handling here
const addReportApiHandler = async ({
  lastSeenAddress,
  lastSeenTime,
  childImage,
  name,
  childEstimatedAge,
  remarks,
}) => {
  const response = await axios.post(
    "http://localhost:4000/api/report/createMissingReport",
    {
      childLastSeenAddress: "a",
      childLastSeenTime: lastSeenTime,
      childAge: childEstimatedAge,
      remarks: remarks,
      longitude: 10,
      image: childImage,
      name: name,
      latitude: 10,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${accessToken}`,
      },
    }
  );
  return response;
};

const getAllReportsApiHandler = async () => {
  const response = await customFetch.get("/report/getAllMissingReports");
  return response;
};

// Get a Single report
const getAReportApiHandler = async (id) => {
  const response = await customFetch.get(`/report//getMissingReport/${id}`);
  return response;
};

// Adoption api Handler
const getAllKidApiHandler = async () => {
  const response = await customFetch.get("kids-adoption/getAllKids");
  return response;
};

// Donation Api Handling
// Donate Api Handlers
const addDonationApiHandler = async ({
  weight,
  age,
  donationType,
  donateAmount,
}) => {
  const response = await customFetch.post("donation/createDonation", {
    weight,
    age,
    donationType,
    donateAmount,
  });

  return response;
};

// CreateDonation Amount
const createDonationAmountApiHandler = async (donateAmount) => {
  const response = await customFetch.post(
    "/donation/createDonationAmount",
    donateAmount
  );
  return response;
};

// Get all donation lists
const getAllDontionApiHandler = async () => {
  const response = await customFetch.get("/donation/getAllDonations");
  return response;
};

// Update donation
const updateDonationAmount = async (id, donationAmount) => {
  console.log("Update Amount function is called.");
  const response = await customFetch.post("/donation/updateDonation", {
    id,
    donationAmount,
  });
  return response;
};

// Volunteer API Handling
const getVolunteerList = async () => {
  const response = await customFetch.get("/volunteer/getAllVolunteers");
  return response;
};

export {
  // For Registration and log in
  signUpApiHandler,
  signInApiHandler,

  // For Reports
  addReportApiHandler,
  getAllReportsApiHandler,
  getAReportApiHandler,

  // for Kid Adoptions
  getAllKidApiHandler,

  // FOr donations
  addDonationApiHandler,
  createDonationAmountApiHandler,
  getAllDontionApiHandler,
  updateDonationAmount,
  
  // for Voluteer list
  getVolunteerList,
};
export default customFetch;
