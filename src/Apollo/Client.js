import ApolloClient from "apollo-boost";
import {defaults,resolvers} from "./LocalState";

export default new ApolloClient({
    uri: process.env.NODE_ENV ==="development" ? "http://localhost:4000" : "https://instagram-prisma-c31956cf67.herokuapp.com/instagram/prod",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
});