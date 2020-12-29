import {gql} from "apollo-boost";

export const LOG_IN = gql `
    mutation requestSecret($email: String!) {
        requestSecret(email: $email)
    }
`;

export const CREATE_ACCOUNT = gql `
     mutation createAcount(
        $userName: String!,
        $email: String!,
        $firstName: String,
        $lastName: String,
        ){
        createAcount(
            userName:$userName,
            email: $email,
            firstName: $firstName,
            lastName: $lastName,
            )
        }
`;