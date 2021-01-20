import {gql} from "apollo-boost";

export const SEARCH =gql`
    query search($term: String!){
        searchPost(term: $term){
            id
            files{
                url
            }
            likeCount
            location
            caption
            user{
                userName
            }
        }
        searchUser(term: $term){
            id
            avatar
            userName
            isFollowing
            isSelf
        }
    }
`;