import React, {useState} from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE,ADD_COMMENT } from "./PostQueries";
import { isApolloError } from "apollo-boost";
import { toast } from "react-toastify";

const PostContainer = ({
    id, user, location, caption, files, likeCount, isLiked, comments, createdAt 
    }) => {
    const [isLikedState, setIsLiked] =useState(isLiked);
    const [likeCountState, setLikeCount] =useState(likeCount);
    const comment = useInput(""); //코멘트 남기기(댓글)
    
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
        variables: {postId: id}
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT, {
        variables: {
            postId: id,
            text: comment.value
        }
    });

    const toggleLike = () => {
        toggleLikeMutation();
        if(isLikedState === true){
            setIsLiked(false);
            setLikeCount(likeCountState - 1);
        }else {
            setIsLiked(true);
            setLikeCount(likeCountState + 1);
        }
    };

    return (
        <PostPresenter 
            user = {user}
            location = {location}
            caption = {caption}
            files = {files}
            likeCount = {likeCountState}
            isLiked = {isLikedState}
            comments = {comments}
            createdAt = {createdAt}
            newComment = {comment}
            setIsLiked = {setIsLiked}
            setLikeCount ={setLikeCount}
            toggleLike={toggleLike}
        />
    );
};

PostContainer.propTypes = {

    id: PropTypes.string.isRequired,

    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        userName: PropTypes.string.isRequired
    }).isRequired,

    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,

    likeCount: PropTypes.number.isRequired,

    isLiked: PropTypes.bool.isRequired,

    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                avatar:PropTypes.string,
                userName: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,

    createdAt:PropTypes.string.isRequired,

    location: PropTypes.string,

    caption: PropTypes.string.isRequired
};

export default PostContainer;