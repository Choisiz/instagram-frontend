import React from "react";
import {gql} from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import PrefilePresenter from "./ProfilePresenter";

const GET_USER =gql`
    query seeUser($userName: String!){
        seeUser(userName: $userName){
            id
            avatar
            userName
            fullName
            isFollowing
            isSelf
            bio
            followingCount
            followersCount
            postsCount
            posts {
                id
                files {
                    id
                    url
                }
                likeCount
                commentCount
            }
        }
    }
`;

export default withRouter(({match:  {params: {userName}}}) => {
    const {data, loading} = useQuery(GET_USER, {
        variables: {
            userName
        }
    })
    return <PrefilePresenter loading={loading} data={data}/>
});