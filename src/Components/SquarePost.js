import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { CommentIconFull, HeartFull } from "./Icons";

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear;
    svg {
        fill: white;
    }
`;

const Container = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    cursor: pointer;
    &:hover {
        ${Overlay} {
            opacity: 1;
        }
    }
`;

const Cky =styled.div`
width: 100%;
display: grid;
grid-gap: 30px;
grid-template-columns: repeat(3, 294px);
grid-template-rows: 294px;
grid-auto-rows: 294px;
border-top: 1px solid rgba(var(--b38,219,219,219),1);
padding-top: 53px;
`;

const Contents = styled.div`
    color: white;
    display: flex;
    align-items: center;
    &:first-child {
        margin-right: 20px;
    }
`;

const Number =styled.span`
    margin-left: 10px;
    font-size: 16px;
`;


export const SquarePost = ({likeCount, commentCount, files}) => (
    <Container src={files.url}>
        <Overlay>
            <Contents>
                <HeartFull/>
                <Number>{likeCount}</Number>
            </Contents>
            <Contents>
                <CommentIconFull/>
                <Number>{commentCount}</Number>
            </Contents>
        </Overlay>
    </Container>
)

export const ProfilePost = ({likeCount, commentCount, files}) => (
    <Cky>
    {files && files.map(file =>
    <Container src={file.url}>
        <Overlay>
            <Contents>
                <HeartFull/>
                <Number>{likeCount}</Number>
            </Contents>
            <Contents>
                <CommentIconFull/>
                <Number>{commentCount}</Number>
            </Contents>
        </Overlay>
    </Container>
    )}
    </Cky>
)


SquarePost.propTypes ={
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    file: PropTypes.object.isRequired
}