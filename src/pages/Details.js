import React, { useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Error from "../components/Error";
import { NOT_FOUND_IMAGE, PICSUM_URL } from "../lib/Constants";

const BIG_IMAGE_SIZE = `900/600`;

const Details = ({ items }) => {
  let { id } = useParams();

  const getItem = useCallback(() => {
    return items.find((d) => d.id === id);
  }, [items, id]);

  const item = getItem();

  if (!item) {
    return <Error message={"Sorry, item not found"} image={NOT_FOUND_IMAGE} />;
  }

  return (
    <DetailsBlock>
      <DetailsImageBlock>
        <DetailsImage src={`${PICSUM_URL}id/${id}/${BIG_IMAGE_SIZE}`} alt={item.author}></DetailsImage>
      </DetailsImageBlock>
      <Description>
        <Author>{item.author}</Author>
        <Original href={item.url}>Open original</Original>
      </Description>
    </DetailsBlock>
  );
};

Details.propTypes = {
  items: PropTypes.array.isRequired,
};

const Description = styled.div`
  width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Original = styled.a`
  color: #386bf3;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailsBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 900px;
  max-width: 80%;
  margin: 0 auto;
`;

const DetailsImageBlock = styled.div`
  min-height: 400px;
  width: 100%;
  background-color: #ccc;
  border-radius: 10px;
  font-size: 0;
`;

const DetailsImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Author = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: black;
`;

export default Details;
