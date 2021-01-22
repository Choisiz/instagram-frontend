import {gql} from "apollo-boost";

export const SEARCH =gql`
    query search($term: String!) {   
        searchUser(term: $term) {
            id
            avatar
            userName
            isFollowing
            isSelf
        }
        searchPost(term: $term) {
            id
            files {
                url
            }
            likeCount
            commentCount
        }
    }
`;