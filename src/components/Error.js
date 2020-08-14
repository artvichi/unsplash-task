import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Error = ({ message, image }) => {
  return (
    <ErrorBlock>
      <div>
        <ErrorImageBlock>
          <img src={image} alt={"not found"} />
        </ErrorImageBlock>
        <div>{message}</div>
      </div>
    </ErrorBlock>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const ErrorBlock = styled.div`
  font-size: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ErrorImageBlock = styled.div`
  width: 100%;
  min-height: 300px;
  & img {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    min-height: 150px;
  }
`;

export default Error;
