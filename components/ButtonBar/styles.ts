import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { shade } from 'polished';

enum TipeSearch {
  tpNCM = 1,
  tpCFOP = 2,
  tpCEST = 3
}

interface Props{
  buttonActive?: TipeSearch;
}


export const BoxButton = styled.div<Props>`
  display: flex;  
  flex-direction: row;
  align-items: center;  

  Button {
    ${props =>
    props.buttonActive === 1 &&
    css`
      background-color: #D62D24;
      color: #fff;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.05, '#D62D24')};
        color: #fff;
      }
  `}

    & + Button {
        border-radius: 0;
        color: #4D4D4D;
        background-color: #fff;

        ${props =>
        props.buttonActive === 2 &&
        css`
          background-color: #D62D24;
          color: #fff;
          transition: background-color 0.2s;
          &:hover {
            background: ${shade(0.05, '#D62D24')};
            color: #fff;
          }
        `}
    }

    & + Button + Button{
        border-radius: 0 5px 5px 0;
        color: #4D4D4D;
        background-color: #fff;

        ${props =>
        props.buttonActive === 3 &&
        css`
          background-color: #D62D24;
          color: #fff;
          transition: background-color 0.2s;
          &:hover {
            background: ${shade(0.05, '#D62D24')};
            color: #fff;
          }
        `}
    }
  }
`;

export const ButtonBar = styled.button`
    outline: none;
    width: 80px;
    height: 30px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    cursor: pointer;
    color: #4D4D4D;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
    
    &:hover {
      background: #D62D24;
      color: #fff;
    }
`;