import React from "react";
import { LoadingContainer, Loader, LoadingText } from "./LoadingScreen.styles"

const LoadingScreen = () => (
    <LoadingContainer>
        <Loader />
        <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
);

export default LoadingScreen;