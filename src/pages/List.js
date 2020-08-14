import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PICSUM_URL } from "../lib/Constants";

const IMAGE_SIZE = 400;

const List = ({ items }) => {
  return (
    <ListBlock>
      {items.map(({ id, author }) => {
        return (
          <ListItem key={id}>
            <Link to={`/details/${id}`} style={{ display: "inline-block", width: "100%", height: "100%" }}>
              <ItemContent style={{ backgroundImage: `url(${PICSUM_URL}${id}/${IMAGE_SIZE})` }}>
                <Cover />
                <AuthorSection>{author}</AuthorSection>
              </ItemContent>
            </Link>
          </ListItem>
        );
      })}
    </ListBlock>
  );
};

const ListBlock = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const AuthorSection = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0px;
  font-weight: bold;
  font-size: 14px;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemContent = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  background-color: #cccccc;
  position: relative;

  &:hover > div:first-child {
    display: block !important;
  }
`;

const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: none;
  border-radius: 5px;
`;

const ListItem = styled.div`
  display: flex;
  flex-basis: 24%;
  width: 24%;
  margin-right: 1%;
  margin-bottom: 35px;

  @media (max-width: 960px) {
    flex-basis: 32%;
    width: 32%;
  }

  @media (max-width: 768px) {
    flex-basis: 49%;
    width: 49%;
  }

  @media (max-width: 500px) {
    flex-basis: 100%;
    width: 100%;
    margin-right: 0%;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default List;
