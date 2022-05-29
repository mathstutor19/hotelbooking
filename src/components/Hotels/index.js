import React from "react";
import Image from "../../assets/image/Hotel.jpg";
import Buttons from "../Buttons/index";
import {Left, Text, Title, Wrapper} from "./style";
const Hotel = () => {
    return (
        <Wrapper>
            <img src={Image} alt="hotel" />
            <Left>
                <Title>Finest Luxury Hotels & Resort</Title>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </Text>
                <Buttons paddingTop={10} paddingLeft={22} radius={35} border>
                    Sign In
                </Buttons>
                <Buttons primary paddingTop={16} paddingLeft={32} radius={8}>
                    Explore More
                </Buttons>
                <Buttons primary paddingTop={16} paddingLeft={32} radius={50}>
                    Subscribe
                </Buttons>
                <Buttons
                    primary
                    paddingTop={5}
                    paddingLeft={15}
                    radius={50}
                    color>
                    Details
                </Buttons>
            </Left>
        </Wrapper>
    );
};

export default Hotel;
