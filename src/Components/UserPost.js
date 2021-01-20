import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";
import { Link } from "react-router-dom";

const Post = styled.div`
    ${props => props.theme.whiteBox}
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const EAvatar =styled(Avatar)`
    margin-bottom: 15px;
`;

const ELink = styled(Link)`
    color: inherit;
    margin-bottom: 15px;
`;

const UserPost = ({userName, isFollowing, url, isSelf}) => (
    <Post>
        <EAvatar url={url} size={"md"}/>
        <ELink to={`/${userName}`}>
            <FatText text ={userName}/>
        </ELink>
        {!isSelf && <Button text={isFollowing ? "팔로우" : "팔로잉"} /> }
    </Post>
);

UserPost.propTypes = {
    userName: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired
};

export default UserPost;