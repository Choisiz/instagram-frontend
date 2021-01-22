import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { CommentIcon, HeartFull } from "./Icons";

const Container = styled.div``;

const Overlay = styled.div``;

const Contents = styled.div``;

const Number =styled.span``;

const SquarePost = ({likeCount, commentCount, file}) => (
    <Container bg={file}>
        <Overlay>
            <Contents>
                <HeartFull/>
                <Number>{likeCount}</Number>
            </Contents>
            <Contents>
                <CommentIcon/>
                <Number>{commentCount}</Number>
            </Contents>
        </Overlay>
    </Container>
)

SquarePost.propTypes ={
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    file: PropTypes.string.isRequired
}

export default SquarePost;