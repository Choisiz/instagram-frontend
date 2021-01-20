import React from "react";
import styled from 'styled-components';
import Button from "../Button";

export default ({isFollowing, onClick}) => (
    <Button text={isFollowing ? "팔로우" : "팔로잉"} onClick={onClick}/>
);