import ApolloClient from "apollo-boost";
import {defaults,resolvers} from "./LocalState";

export default new ApolloClient({
    uri: 
        process.env.NODE_ENV === "production"
            ? "https://instagram0327-backend.herokuapp.com"
            : "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
});