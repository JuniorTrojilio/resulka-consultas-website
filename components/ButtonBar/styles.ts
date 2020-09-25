import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { shade } from 'polished';
import { Props } from './index';


export const Container = styled.div<Props>`
  display: flex;  
  flex-direction: row;
  align-items: center;  

  Button {
    ${props =>
    props.buttonActive === 1 &&
    css`
      background-color: #e8685e;
      color: #fff;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.05, '#E8685E')};
        color: #fff;
      }
  `}

    & + Button {
        border-radius: 0;
        color: #818181;
        background-color: #fff;

        ${props =>
        props.buttonActive === 2 &&
        css`
          background-color: #e8685e;
          color: #fff;
          transition: background-color 0.2s;
          &:hover {
            background: ${shade(0.05, '#E8685E')};
            color: #fff;
          }
        `}
    }

    & + Button + Button{
        border-radius: 0 5px 5px 0;
        color: #818181;
        background-color: #fff;

        ${props =>
        props.buttonActive === 3 &&
        css`
          background-color: #e8685e;
          color: #fff;
          transition: background-color 0.2s;
          &:hover {
            background: ${shade(0.05, '#E8685E')};
            color: #fff;
          }
        `}
    }
  }
`;

export const Button = styled.button`
    outline: none;
    width: 80px;
    height: 30px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    cursor: pointer;
    color: #818181;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
    
    &:hover {
      background: #e8685e;
      color: #fff;
    }
`;