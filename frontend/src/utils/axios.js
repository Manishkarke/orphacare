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

// Report Api handling here
const addReportApiHandler = async ({
  lastSeenAddress,
  lastSeenTime, childImage,
  childEstimatedAge,
  remarks,
}) => {
  const response = await axios.post("/report/createMissingReport", {
    childLastSeenAddress: "a",
    childLastSeenTime: lastSeenTime,
    childAge: childEstimatedAge,
    remarks: remarks,
    longitude: 10,
    image: childImage,
    latitude: 10,
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response;
};

const getAllReportsApiHandler = async () => {
  const response = await customFetch.get("/report/getAllMissingReports");
  return response;
};

// Adoption api Handler
const getAllKidApiHandler = async () => {
  const response = await customFetch.get("kids-adoption/getAllKids");
  return response;
};

// Donation Api Handling
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
  signUpApiHandler,
  signInApiHandler,
  addReportApiHandler,
  getAllReportsApiHandler,
  getAllKidApiHandler,
  addDonationApiHandler,
  updateDonationAmount,
  getVolunteerList,
};
export default customFetch;
