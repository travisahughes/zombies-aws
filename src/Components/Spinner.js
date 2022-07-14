import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  margin-left: 1rem;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
