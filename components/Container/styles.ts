import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface Props{
    hasError?:boolean;
  }

export const Container = styled.div<Props>`
${props =>
    props.hasError &&
    css`
      -webkit-animation: swing 1s ease;
      animation: swing 1s ease;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;

      Input {
        border: 2px solid #e74c3c;
        border-right: none;
      }

      Button {
        border: 2px solid #e74c3c;
        border-left: none;        
      }
  `}
 

  @keyframes swing {
    15% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

  }
`; 