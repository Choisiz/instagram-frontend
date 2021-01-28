import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton/FollowButtonContainer";
import {SquarePost} from "../../Components/SquarePost"; 
const Wrapper = styled.div`
    margin-height: 100vh;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;
    margin-left: 50px;
`;

const HeaderColumn =styled.div`
    &:not(:last-child){
        margin-right: 110px;
    }
`;

const UserNameRow =styled.div`
    display: flex;
    align-items: center;
`;

const UserName = styled.span`
    font-size: 27px;
    margin-right: 30px;
`;

const Counts = styled.ul`
    display: flex;
    margin: 18px 0px;
`;

const Count =styled.li`
    font-size: 16px;
    &:not(:last-child){
        margin-right: 70px;
    }
`;

const FullName = styled(FatText)`
    font-size: 17px;
`;

const Bio = styled.p`
    margin: 10px 0px;
`;

const Posts = styled.div`
width: 100%;
display: grid;
grid-gap: 30px;
grid-template-columns: repeat(3, 294px);
grid-template-rows: 294px;
grid-auto-rows: 294px;
border-top: 1px solid rgba(var(--b38,219,219,219),1);
padding-top: 53px;
`;


export default ({loading, data}) => {
    if(loading){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    }else if(!loading && data && data.seeUser){
        console.log(data.seeUser.posts);
        const {
            seeUser: {
                id,
                avatar,
                userName,
                fullName,
                isFollowing,
                isSelf,
                bio,
                followingCount,
                followersCount,
                postsCount,
                posts
            }
        } = data;
        return (
            <Wrapper>
            <Helmet>
                <title>
                    {userName}(@{fullName})  
                </title>
            </Helmet>
                <Header>
                    <HeaderColumn>
                        <Avatar size="lg" url={avatar}/>
                    </HeaderColumn>
                    <HeaderColumn>
                        <UserNameRow>
                            <UserName>{userName}</UserName>
                            {!isSelf && <FollowButton id={id} isFollowing={isFollowing}/>}
                        </UserNameRow>
                        <Counts>
                            <Count>
                            게시물 <FatText text={postsCount}/> 
                            </Count>
                            <Count>
                            팔로워 <FatText text={followersCount}/>
                            </Count>
                            <Count>
                            팔로우 <FatText text={followingCount}/>
                            </Count>
                        </Counts>
                        <FullName text= {fullName}/>
                        <Bio>{bio}</Bio>
                    </HeaderColumn>
                </Header>
                <Posts>
                    {posts && posts.map(post => (
                        <SquarePost
                            key={post.id}
                            likeCount={post.likeCount}
                            commentCount={post.commentCount}
                            files={post.files[0]}
                        />
                    ))}
                </Posts>
            </Wrapper>
        );
    }
    return null;
}