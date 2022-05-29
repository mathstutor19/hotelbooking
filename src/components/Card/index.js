import React from "react";
import {CardText, CardTitle, CardWrappper} from "./styled";
import Image1 from "../../assets/image/service1.jpg";
const Card = () => {
    return (
        <>
            <CardWrappper>
                <img src={Image1} alt="firts" width="100" height="50" />
                <CardTitle>Private Workspace</CardTitle>
                <CardText>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                </CardText>
            </CardWrappper>
        </>
    );
};
export default Card;
