import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {withRouter} from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import {SEARCH} from "./SearchQueries";

export default withRouter(( {location: {search}} ) => {
    
    const term = decodeURI (search.split ( "=") [1]);
    const { data, loading } =useQuery(SEARCH, {
        skip: term === undefined,
        variables: {
            term
        }
    });
    console.log(term);
    console.log(data,loading);
    return <SearchPresenter term={term} loading={loading} data={data}/>;
});