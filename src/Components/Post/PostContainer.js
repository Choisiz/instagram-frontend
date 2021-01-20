import React, {useState} from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE,ADD_COMMENT } from "./PostQueries";
import { useQuery } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { ME } from "../../SharedQueries";

const PostContainer = ({
    id, user, location, caption, files, likeCount, isLiked, comments, createdAt 
    }) => {
    const [isLikedState, setIsLiked] =useState(isLiked);
    const [likeCountState, setLikeCount] =useState(likeCount);
    const comment = useInput(""); //코멘트 남기기(댓글)
    const {data} = useQuery(ME);
    const [selfComments, setSelfComments] =useState([]);
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
        variables: {postId: id}
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT, {
        variables: {
            postId: id,
            text: comment.value
        }
    });

    const toggleLike = () => { //좋아요
        toggleLikeMutation();
        if(isLikedState === true){
            setIsLiked(false);
            setLikeCount(likeCountState - 1);
        }else {
            setIsLiked(true);
            setLikeCount(likeCountState + 1);
        }
    };

    const onKeyPress = async(e) => { //눌럿다 땠을때
        const {which} = e;
        if(which === 13){ //엔터코드
            e.preventDefault();
            try{
                const {data:{addComment}} =await addCommentMutation();
                setSelfComments([...selfComments, addComment]);
                comment.setValue("");
            } catch{
                toast.error("오류가 발생했습니다.");
            }
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
            onKeyPress={onKeyPress}
            selfComments={selfComments}
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