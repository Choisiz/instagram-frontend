import React, {useState} from "react";
import Modal from "react-modal";
import styled from "styled-components";


export const Modal = () => {

  const [modalOpen, setModelOpen] =useState(false);

  const modalChange = () => { //모달창열기
    if(modalOpen === false){
        setModelOpen(true);
    }else{
        setModelOpen(true);
    }

  const modalClose =() => { //모달창 닫기
    setModelOpen(false);
  }
}

  return(
      <Modal isOpen={modalOpen} onRequestClose={modalClose}>
      </Modal>
  )
}