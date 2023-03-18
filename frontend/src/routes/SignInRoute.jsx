import React from "react";
import ImageSlider from "../ui/ImageSlider";
import SignIn from "../components/form/SignIn";

function SignInRoute() {
  return (
    <section className='route-container'>
      <ImageSlider />
      <SignIn />
    </section>
  );
}

export default SignInRoute;
