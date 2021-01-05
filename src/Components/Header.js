import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import {gql} from "apollo-boost";
import Input from "./input";
import useInput from "../Hooks/useInput";
import {Compass, HeartEmpty,User ,Comment, Home} from "./Icons";
import { useQuery } from "@apollo/react-hooks";

const Header = styled.header`
   width: 100%;
   border: 0;
   background-color: white;
   border-bottom: ${props =>props.theme.boxBorder};
   border-radius: 0px;
   margin-bottom: 33px;
   display:flex;
   justify-content: center;
   align-items: center;
   padding: 12px 0px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
    a{  
        font-family: 'Satisfy', cursive;
        color : #231F20;
        font-size: 23px;
        font-weight: 600;
    }
`;

const HeaderColumn = styled.div`
   width: 33%;
   text-align: center;
   &:first-child {
       margin-right: auto;
       text-align: left;
   }
   &:last-child { 
       margin-left: auto;
       text-align: right;
   }
`;

const SearchInput = styled(Input)`
    background-color: ${props => props.theme.bgColor};
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    height: auto;
    text-align: center;
    width: 80%;
    &::placeholder {
        opacity: 0.8;
        font-weight: 200;
    }
`;

const HeaderLink =styled(Link)`
    &:not(:last-child){
        margin-right:24px;
    }
    
`;

const ME = gql`
    {
        me {
            user{
                userName
                }
        }
    }
`;

export default withRouter(({history}) => {
    const search = useInput("");
    const meQuery = useQuery(ME);
    console.log(meQuery);
    const onSearchSubmit = e => { //검색
        e.preventDefault();
        history.push(`/search?term=${search.value}`)
    };
    return (
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <Link to ="/">
                        Instagram
                    </Link>
                </HeaderColumn>
                <HeaderColumn>
                    <form onSubmit={onSearchSubmit}>
                        <SearchInput {...search} placeholder="검색"/>
                    </form>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to ="/main">
                        <Home/>             
                    </HeaderLink>
                    <HeaderLink to ="/message">
                        <Comment />
                    </HeaderLink>
                    <HeaderLink to ="/explore">
                        <Compass/>             
                    </HeaderLink>
                    <HeaderLink to ="/notifications">
                        <HeartEmpty/>
                    </HeaderLink>
                    <HeaderLink to ="/username">
                        <User/>
                    </HeaderLink>
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    )
});