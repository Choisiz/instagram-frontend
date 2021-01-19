import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./input";
import useInput from "../Hooks/useInput";
import {Compass, HeartEmpty,User ,Airplane, Home} from "./Icons";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "../SharedQueries";

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
   z-index: 2;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
    a{  
        font-family: 'Satisfy', cursive;
        color : #3A3637;
        font-size: 29px;
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



export default withRouter(({history}) => {
    const search = useInput("");
    const {data} = useQuery(ME);
    const onSearchSubmit = e => { //검색
        e.preventDefault();
        history.push(`/search?term=${search.value}`)
    };
    return (
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <Link to ="/#">
                        Instagram
                    </Link>
                </HeaderColumn>
                <HeaderColumn>
                    <form onSubmit={onSearchSubmit}>
                        <SearchInput 
                            value={search.value}
                            onChange={search.onChange}
                            placeholder="검색"
                        />
                    </form>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to ="/main">
                        <Home/>             
                    </HeaderLink>
                    <HeaderLink to ="/message">
                        <Airplane />
                    </HeaderLink>
                    <HeaderLink to ="/explore">
                        <Compass/>             
                    </HeaderLink>
                    <HeaderLink to ="/notifications">
                        <HeartEmpty/>
                    </HeaderLink>
                    {!data?.me ? (
                    <HeaderLink to ="/#">
                        <User/>
                    </HeaderLink> ) : ( 
                    <HeaderLink to ={data?.me?.userName}> 
                        <User/>
                    </HeaderLink>
                    )}
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    )
});