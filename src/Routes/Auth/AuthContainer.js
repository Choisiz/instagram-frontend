import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT, LOG_IN } from "./AuthQueries";
import { toast} from "react-toastify";

export default () => {
    const [action, setAction] = useState("Login");
    const userName = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");

    const [requestSecretMutation] =useMutation(LOG_IN, {
        variables: {email: email.value}
    });
    const [createAcountMutation] = useMutation(CREATE_ACCOUNT,{
        variables: {
            email: email.value,
            userName: userName.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const onSubmit = async(e) => {
        e.preventDefault();
        if (action === "Login"){ //로그인 페이지일시

            if(email.value !==""){//메일을 작성했다면
                try{
                    const {data: {requestSecret}} = await requestSecretMutation();
                    if(!requestSecret) {//requestSecret이 없다면
                        toast.error("없는 계정입니다. 만들어주세요");
                        setTimeout(()=> setAction("signUp"),2000);
                    }else{ //requestSecret 있다면
                        toast.success("이메일을 확인해주세요");
                    }
                }catch{
                    toast.error("다시 시도해주세요");
                }
            }else{
                toast.error("이메일을 입력해주세요");
            }

        }else if(action ==="signUp"){ //회원가입 페이지일시
            if(
                email.value !=="" &&
                userName.value !=="" &&
                firstName.value !=="" &&
                lastName.value !==""
                ){
                    try{
                        const {data: {createAcount }} = await createAcountMutation();
                        if(!createAcount){
                            toast.error("회원가입을 할수 없습니다");
                        }else{
                            toast.success("축하합니다. 가입완료되었습니다");
                            setTimeout(()=> setAction("Login"),2000);
                        }
                    }catch(e){
                        toast.error(e.message);
                    }
                }else{
                    toast.error("모든 항목을 입력해주세요");
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
            onSubmit={onSubmit}/>
    );
};