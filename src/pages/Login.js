import Populer from "../components/Populer";
import LoginComponents from "../components/LoginComponents";

const Login = () => {
    return <LoginComponents />
}

export default Login
// import React from "react";
// import * as Components from "../components/LoginComponents";

// function  Login() {
//     const [signIn, toggle] = React.useState(true);
//     return(
//         <Components.Container>
//             <Components.SignUpContainer signinIn={signIn}>
//                 <Components.Form>
//                     <Components.Title>Create Account</Components.Title>
//                     <Components.Input type='text' placeholder='Name' />
//                     <Components.Input type='Email' placeholder='Email' />
//                     <Components.Input type='password' placeholder='Password' />
//                     <Components.Button>Sign Up</Components.Button>
//                 </Components.Form>
//             </Components.SignUpContainer>
//             <Components.SignInContainer signinIn={signIn}>
//                 <Components.Form>
//                     <Components.Title>Sign In</Components.Title>
//                     <Components.Input type='email' placeholder='Email' />
//                     <Components.Input type='Password' placeholder='Password' />
//                     <Components.Anchor href='#'>Forgot your Password?</Components.Anchor>
//                     <Components.Button>Sign In</Components.Button>
//                 </Components.Form>
//             </Components.SignInContainer>
//             <Components.OverLayContainer signinIn={signIn}>
//                 <Components.OverLay signIn={signIn}>
//                     <Components.LeftOverLayPanel signinIn={signIn}>
//                     <Components.Title>Welcome Back</Components.Title>
//                     <Components.Paragraph>
//                         To Keep connected with us Please login with your personal information
//                     </Components.Paragraph>
//                     <Components.GhostButton onClick={() => toggle(true)}>
//                         Sign In
//                     </Components.GhostButton>
//                     </Components.LeftOverLayPanel>

//                     <Components.RightOverLayPane signinIn={signIn}>
//                         <Components.Title>Hello Friend</Components.Title>
//                         <Components.Paragraph>
//                             Enter your personal details and start journey with us
//                         </Components.Paragraph>
//                             <Components.GhostButton onClick={() => toggle(false)}>
//                                 Sign Up
//                             </Components.GhostButton>
//                     </Components.RightOverLayPane>
//                 </Components.OverLay>
//             </Components.OverLayContainer>
//         </Components.Container>
//     )
// }

// export default Login