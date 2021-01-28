import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {withRouter} from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import {SEARCH_QUERY} from "./SearchQueries";

export default withRouter(( {location: {search}} ) => {
    
    const term = decodeURI(search.split("=")[1]);
    const { data, loading } =useQuery(SEARCH_QUERY, {
        skip: term === undefined,
        variables: {
            term
        }
    });
    console.log(data);
    console.log(term);
    
    
    return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});