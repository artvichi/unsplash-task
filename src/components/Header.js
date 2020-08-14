import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <HeaderBlock>
      <Logo
        onClick={() => {
          history.push("/");
        }}
      >
        Unsplash task
      </Logo>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 22px;
`;

const Logo = styled.div`
  cursor: pointer;
`;

export default Header;
