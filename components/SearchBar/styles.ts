import styled from '@emotion/styled';

interface Props {
  hasError?: boolean;
}

export const SearchBar = styled.input<Props>`
  outline: none;
  height: 50px;
  width: 75vw;
  max-width: 580px;
  min-width: 180px;
  padding: 15px;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;  
`;