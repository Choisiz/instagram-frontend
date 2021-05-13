import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/client";
import {
  CONFIRM_SECRET,
  CREATE_ACCOUNT,
  LOCAL_LOG_IN,
  LOG_IN,
} from "./AuthQueries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContainer = () => {
  const [action, setAction] = useState("Login");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const secret = useInput("");

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: email.value,
    },
  });
  const [createAcountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "Login") {
      //로그인 페이지일시
      if (email.value !== "") {
        //메일을 작성했다면
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            //requestSecret이 없다면
            toast.error("없는 계정입니다. 만들어주세요");
            setTimeout(() => setAction("signUp"), 2000);
          } else {
            //requestSecret 있다면
            toast.success("이메일을 확인해주세요");
            setAction("confirm");
          }
        } catch {
          toast("다시 시도해주세요");
        }
      } else {
        toast.error("이메일을 입력해주세요");
      }
    } else if (action === "signUp") {
      //회원가입 페이지일시
      if (
        email.value !== "" &&
        userName.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        //회원가입 양식을 모두 작성했다면
        try {
          const {
            data: { createAcount },
          } = await createAcountMutation();
          if (!createAcount) {
            toast.error("회원가입을 할수 없습니다");
          } else {
            toast.success("축하합니다. 가입완료되었습니다");
            setTimeout(() => setAction("Login"), 2000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("모든 항목을 입력해주세요");
      }
    } else if (action === "confirm") {
      //확인 페이지 일시
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("비밀번호를 찾을 수 없습니다");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
