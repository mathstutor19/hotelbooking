import styled from "styled-components";
export const Button = styled.button`
    display: inline-block;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    background: ${(props) => (props.primary ? " #3771C8" : "#FFF")};
    color: ${(props) => (props.primary ? "#fff" : "#100F2E")};
    cursor: pointer;
    border: ${(props) => (props.border ? "1px solid #999999" : "none")};
    user-select: none;
    /* padding: 24px ${(props) => (props.big ? "95px" : "48px")}; */
    padding: ${(props) => props.paddingTop + "px"};
    ${(props) => props.paddingLeft + "px"};
    border-radius: ${(props) => props.radius + "px"};
    &:hover {
        background: ${(props) => (props.primary ? "#0a203d" : "transparent")};
    }
`;
