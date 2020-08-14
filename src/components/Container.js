import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import Details from "../pages/Details";
import List from "../pages/List";
import { ERROR_IMAGE } from "../lib/Constants";

const Container = ({ data }) => {
  let content = null;
  if (data.error) {
    content = <Error message={"Sorry, some error happened"} image={ERROR_IMAGE} />;
  } else if (!data.fetched) {
    content = <Loader />;
  } else {
    content = (
      <Switch>
        <Route path="/details/:id">
          <Details items={data.response} />
        </Route>
        <Route path="/">
          <List items={data.response} />
        </Route>
      </Switch>
    );
  }

  return <ContainerBlock>{content}</ContainerBlock>;
};

const ContainerBlock = styled.div`
  padding: 50px;
`;

export default Container;
