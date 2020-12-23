import React, { useState} from "react";
import styled from "styled-components";
import Input from "../Components/input";
import Button from "../Components/Button";
const Wrapper =styled.div`
 min-height:80vh;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const Box = styled.div`
${props => props.theme.whiteBox}
width: 100%;
max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;
const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor:pointer;
`;

const Form = styled(Box)`
   padding: 40px;
   padding-bottom: 30px;
   margin-bottom: 15px;
   form {
       width: 100%;
       input{
         width: 100%;
         &:not(last-child) {
            margin-bottom: 7px;
        }
       }
       button {
           margin-top: 10px;
       }
   }
`;

export default () => {
    const [action, setAction] =useState("Login");

    return (
        <Wrapper>
            <Form>
                { action ==="Login" ? (
                    <form>
                      <Input placeholder={"UserName"} />
                      <Input placeholder={"Password"} />
                      <Button text={"Login"}/>
                    </form>
                    ) : (
                    <form>
                        <Input placeholder={"FirstName"}/>
                        <Input placeholder={"LastName"}/>
                        <Input placeholder={"Email"}/>
                        <Input placeholder={"UserName"}/>
                        <Input placeholder={"Password"}/>
                        <Button text={"Sign Up"}/>
                    </form>    
                    ) 
                    }
            </Form>
            <StateChanger>
            {action === "Login" ? (
                <>
                Don't have an account?{" "}
                <Link onClick={ () => setAction("signUp")}>Sign Up</Link>
                </>
            ) : (
                <>
                Have an account?{" "}
                <Link onClick={ () => setAction("Login")}>Login</Link>
                </>
            )}
            </StateChanger>
        </Wrapper>
    ) 
}