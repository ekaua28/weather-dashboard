import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Loader = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #333;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.h2`
  font-size: 24px;
  color: #333;
  margin-left: 20px;
`;