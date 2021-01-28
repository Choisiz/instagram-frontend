import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserPost from "../../Components/UserPost";
import {SquarePost} from "../../Components/SquarePost";

const Wrapper =styled.div`
    height: 50vh;
    text-align: center;
`;

const Section =styled.div`
    margin-bottom: 20px;
    display: grid;
`;

const PostSection = styled(Section)`
    grid-gap: 30px;
    grid-template-columns: repeat(3, 294px);
    grid-template-rows: 294px;
    grid-auto-rows: 294px;
`;

const SearchPresenter = ({searchTerm, loading, data}) => {
    if(searchTerm === undefined){
        return (
            <Wrapper>
                <FatText text={"Search for something"}/>
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
                        <FatText text={"No User Found"}/>
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
                <PostSection>
                    {data.searchPost.length === 0 ? (
                        <FatText text="No photo Found"/>
                    ) : (
                        data.searchPost.map(post => (
                            <SquarePost
                                key={post.id}
                                likeCount={post.likeCount}
                                commentCount={post.commentCount}
                                files={post.files[0]}
                            />
                        ))
                    )}
                </PostSection>
            </Wrapper>
        );
    }
};

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    loading: PropTypes.bool
};

export default SearchPresenter;