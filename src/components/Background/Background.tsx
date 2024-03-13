import React from "react";
import { BackgroundContainer, BackgroundImage } from "./Background.styles";
import { getBgImage } from "../../utils";

export const Background = () =>
(
    <BackgroundContainer>
        <BackgroundImage src={getBgImage()} alt="Background" />
    </BackgroundContainer>
)
