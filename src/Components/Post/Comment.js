import { gql, useMutation } from "@apollo/client";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import { Link } from "react-router-dom";

return (
    {comments && (
        <Comments>

          {comments.map( comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.userName} />
              {comment.text}
            </Comment>
          ))}
          
          {selfComments.map( comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.userName} />
              {comment.text}
            </Comment>
          ))}
          
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
          onKeyPress={onKeyPress}
          placeholder={"댓글 달기"}
          value ={newComment.value}
          onChange= {newComment.onChange} 
      />
)