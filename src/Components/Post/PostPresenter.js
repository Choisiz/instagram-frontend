import React,{useState} from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import {Link} from "react-router-dom";
import { HeartEmpty, HeartFull, CommentIcon, Airplane } from "../Icons";
import FatText from "../FatText";
import TextareaAutosize from 'react-autosize-textarea';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
Modal.setAppElement('#root');

const Post =styled.div`
    ${props => props.theme.whiteBox}
    width: 100%;
    max-width: 600px;
    margin-bottom: 60px;
    user-select: none;
    a {
      color: inherit;
    }
`;

const Header =styled.div`
     
    padding: 15px;
    display: flex;
`; //Post Header부분

const UserColumn = styled.div`
    margin-left: 10px;
`; //name, lacation 부분

const Location = styled.div`
     display: block;
     margin-top: 5px;
     font-size: 12px;
`; //Location

const File = styled.div`
  padding-bottom: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`; //파일

const ModalOpen =styled.span`
    margin-top: 10px;
    font-weight: 400;
    opacity: 0.5;
    cursor: pointer;  
`;

const Button = styled.span`
    margin-right: 10px;
    cursor: pointer;
`;


const Meta = styled.div`
    padding: 15px;
`;

const Buttons = styled.div`
${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`; //버튼들

const Timestamp =styled.span`
    font-weight: 300;
    text-transform: uppercase;
    opacity: 0.5;
    display: block;
    font-size: 12px;
    margin: 10px 0px;
    padding-bottom: 10px;
    border-bottom: #B2B2B2 1px solid;
`; //작성 시간

const Textarea = styled(TextareaAutosize)`
        border:none;
        width: 100%;
        resize: none;
        font-size: 14px;
        &:focus {
            outline: none;
        }
`; //댓글
const Comments = styled.ul`
    margin-top: 10px;
`;
const Comment = styled.li`
    margin-bottom: 7px;
    span {
      margin-right: 5px;
    }
    display:flex;
    align-items: center;
`;

const Caption = styled.div`
  margin: 10px 0px;
`;

const CountText =styled.div`
   margin: 10px 0px;
   display: flex;
   flex-direction: column;
`;

const ModalContainer = styled.div`
    display: flex;
`;

const ModalFile = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
`;

const ModalContent = styled.div`
   width: 40%;
   list-style:none;
   padding: 10px;
   margin-left: 15px;
`;

const ModalAvatar =styled.div`
    display:flxed;
    padding-bottom: 20px;
    border-bottom: #B2B2B2 1px solid;
`;

const ModalComment = styled.li`
    margin: 15px 0px 40px 0px;
    span {
      margin-right: 10px;
    }
    display:flex;
    align-items: center;
`;

const ModalComments =styled.div`
    overflow: scroll;
    height:600px;
    width: 330px;
    ::-webkit-scrollbar{
      display: none;
    }
`;

const Forspacing = styled.div`
    margin-right: 10px;
`;

const NextArrow =(props) => { //사진 넘기기
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            display: "block",
            paddingRight: "60px",
            zIndex: "1"
        }}
        onClick={onClick}
      />
    );
  }
  
const PrevArrow =(props) => { //사진 뒤로
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block",
            paddingLeft: "40px",
            zIndex: "1",
            }}
        onClick={onClick}
      />
    );
  }

const settings = { //Slider setting
    dots: true,
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };




export default ( {
  user: {userName, avatar},
  location,
  files,
  isLiked,
  likeCount,
  commentCount,
  createdAt,
  newComment,
  toggleLike,
  onKeyPress,
  comments,
  newComments,
  caption,
  modalChange,
  modalOpen,
  modalClose
}) => (
    <Post>
        <Header>
            <Avatar size="sm" url={avatar} />
            <UserColumn>
              <Link to ={`/${userName}`}>
                <FatText text={userName}/>
              </Link>
                <Location>{location}</Location>
            </UserColumn>
        </Header>
        
        <Slider {...settings}>
             {console.log("f",files)}
            {files && files.map(file => <File key={file.id} src={file.url}/>)} 
        </Slider>
        
        <Meta>
            <Buttons>
                <Button onClick={toggleLike}>
                  {isLiked ? <HeartFull/> : <HeartEmpty/>}
                </Button>
                <Button><CommentIcon/></Button>
                <Button><Airplane/></Button>
            </Buttons>
            <CountText>
                <FatText text= { `좋아요 ${likeCount}개`} />
                <ModalOpen onClick={modalChange}>
                  {`댓글${commentCount}개 모두보기`}
                </ModalOpen>
                <Modal 
                  isOpen={modalOpen}
                  onRequestClose={modalClose}
                  style={{
                    overlay:{backgroundColor: "rgba( 255, 255, 255, 0.5 )"},
                    content: {
                      top: '18%',
                      left: '25%',
                      width: '50%',
                      height: '60%',
                      padding: '0px',
                      maxHeight: '650px',
                      overflow: 'hidden'
                    },
                  }}
                >
                  <ModalContainer>
                    <ModalFile>
                      <Slider {...settings}>
                        {files && files.map(file => <File key={file.id} src={file.url}/>)}
                      </Slider>
                    </ModalFile>
                    <ModalContent>
                      <ModalAvatar>
                          <Avatar size="sm" url={avatar}/>
                        <UserColumn>
                          <Link to ={`/${userName}`}>
                            <FatText text={userName}/>
                          </Link>
                          <Location>{location}</Location>
                        </UserColumn>
                      </ModalAvatar>
                      <ModalComments>
                    {comments.map(comment => (
                      <ModalComment key={comment.id}>
                        <Forspacing>
                          <Avatar size="sm" url={avatar}/>
                        </Forspacing>
                        <FatText text={comment.user.userName} />
                        {comment.text}
                      </ModalComment>
                    ))}
                    </ModalComments>
                    </ModalContent>
                  </ModalContainer>
                </Modal>
            </CountText>
            <Caption>
              <FatText text={userName}/> {caption}
            </Caption>
            {comments && (
              
              <Comments>
                {comments.length > 2 ? (
                  <Comment key={comments[comments.length-1].id}>
                    <FatText text={comments[comments.length-1].user.userName} />
                    {comments[comments.length-1].text}
                  </Comment>) : ("")
                }
                {newComments.map(comment => (
                  <Comment key={comment.id}>
                    <FatText text={comment.user.userName} />
                    {comment.text}
                  </Comment>
                ))}
              </Comments>
            )}
            <Timestamp>{createdAt}</Timestamp>
            <Textarea
              onKeyPress={onKeyPress}
              placeholder={"댓글 달기"}
              value ={newComment.value}
              onChange= {newComment.onChange} 
            />
        </Meta>
    </Post>
);