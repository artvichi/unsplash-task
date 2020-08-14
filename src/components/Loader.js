import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderBlock>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderBlock>
  );
};

const LoaderBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Loader;
