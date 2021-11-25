import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  /* display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */

  ${props =>
    props.btnColor
      ? css`
          color: ${props.btnColor};
        `
      : css`
          color: inherit;
        `
    }
  ${props =>
    props.btnBg
      ? css`
          background-color: ${props.btnBg};
        `
      : css`
          background-color: #ddd;
        `
    }
`;

export default ButtonWrapper;
