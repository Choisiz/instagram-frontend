import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserPost from "../../Components/UserPost";
import SquarePost from "../../Components/SquarePost";

const Wrapper =styled.div`
    height: 50vh;
    text-align: center;
`;

const Section =styled.div`
    margin-bottom: 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, 160px);
    gird-template-rows: 160px;
    gird-auto-rows: 160px;
`;

const SearchPresenter = ({term, loading, data}) => {
    if(term === undefined){
        return (
            <Wrapper>
                <FatText text={"찾을 수 없습니다."}/>
            </Wrapper>
        );
    }else if(loading === true){
        return(
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    }else if(data && data.searchUser && data.searchPost){
        return(
            <Wrapper>
                <Section>
                    {data.searchUser.length === 0 ? (
                        <FatText text={"유저를 찾을 수 없습니다."}/>
                        ) : (
                        data.searchUser.map(user => (
                            <UserPost
                                key={user.id}
                                userName={user.userName}
                                isFollowing={user.isFollowing}
                                url={user.avatar}
                                isSelf={user.isSelf}
                                id={user.id}
                            />
                        ))
                    )}
                </Section>
                <Section>
                    {data.searchPost.length === 0 ? (
                        <FatText text="게시물을 찾을 수 없습니다"/>
                    ) : (
                        data.searchPost.map(post => (
                            <SquarePost 
                                likeCount={post.likeCount}
                                commentCount={post.commentCount}
                                file={post.files[0]}
                            />
                        ))
                    )}
                </Section>
            </Wrapper>
        );
    }
};

SearchPresenter.propTypes = {
    term: PropTypes.string,
    loading: PropTypes.bool
};

export default SearchPresenter;