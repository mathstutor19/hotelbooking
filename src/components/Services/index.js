import React from "react";
import Card from "../Card/index";

import Container from "../Container";
import {CardWrapper, Text, Title} from "./style";

const Service = (props) => {
    return (
        <div>
            <Container>
                <Title>Facilities Service</Title>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                </Text>
                <CardWrapper>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </CardWrapper>
            </Container>
        </div>
    );
};

export default Service;
