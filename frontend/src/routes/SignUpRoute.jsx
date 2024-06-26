import React from "react";
import SignUp from "../components/form/SignUp";
import ImageSlider from "../ui/ImageSlider";

function SignUpRoute() {
  return (
    <section className='route-container'>
      <ImageSlider />
      <SignUp />
    </section>
  );
}

export default SignUpRoute;
