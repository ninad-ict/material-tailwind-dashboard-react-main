import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react';
import qs from "qs";
import axios from '../axios';


export default function Login(props) {

    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [warning,setWarning]=useState("");

    const handlecheckLogin=props.checkLogin;

    function handleLoginButton()
    {
        if(!login || !password)
        {
            setWarning("Enter Correct Credentials");
            return
        }

        const data = {Role: 'Associate',User:login,Pass:password };

        console.log(JSON.stringify(data));
        console.log(qs.stringify(data) );

        const config = {
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            }
          };

          let formdata = new FormData();
          formdata.append("Data",JSON.stringify(data));
        axios.post('LoginCheck.php', formdata, config).then((response) => {

        console.log("Response"+response.data.location);
        console.log("resource"+response.data.id);

        let answer=JSON.stringify(response.data);
        // answer=answer.trim;

        console.log("answer"+answer);


        if(!answer.includes("LoginFail") && !answer.includes("false"))
        {
            console.log("Login success->"+answer);
            localStorage.setItem("login", true);
            localStorage.setItem("associate",response.data.id);
            handlecheckLogin(true);
        }
        else
        {
            setWarning("Enter Correct Credentials");
        }

        }).catch(e=>console.log(e));

        // fetch('LoginCheck.php', {
        // method: 'POST', // or 'PUT'
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // Data: JSON.stringify(data),
        // })
        // .then(response => {console.log(response);response.json()})
        // .then(data => {
        // console.log('Success:', data);
        // })
        // .catch((error) => {
        // console.error('Error:', error);
        // });
    }


    return (
        <Page>  
            {/* <DefaultNavbar /> */}
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            FASLI Application
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Enter Name"
                                iconName="accessibility"
                                onChange={e=>{setLogin(e.target.value);setWarning("")}}
                                required
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                onChange={e=>{setPassword(e.target.value);setWarning("")}}
                                required
                            />
                        </div>
                        {/* <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div> */}
                    </CardBody>
                   {warning && <div className="mb-4 px-4 mx-auto my-auto flex">
                    <small className='mx-auto text-red-600'>{warning}</small>
                    </div>}
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={handleLoginButton}
                            >
                               Login
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            {/* <SimpleFooter /> */}
        </Page>
    );
}
