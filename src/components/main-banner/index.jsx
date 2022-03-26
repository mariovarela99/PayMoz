import React from "react";
import LoginForm from "../forms/loginForm";
import { BannerTag } from "./styles";

function MainBanner() {
  return (
    <BannerTag>
      <LoginForm />
    </BannerTag>
  );
}

export default MainBanner;
