// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
//
// function SignIn() {
//
//   const [justifyActive, setJustifyActive] = useState('tab1');;
//
//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }
//
//     setJustifyActive(value);
//   };
//
//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
//
//       <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
//             Login
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
//             Register
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>
//
//       <MDBTabsContent>
//
//         <MDBTabsPane show={justifyActive === 'tab1'}>
//
//           <div className="text-center mb-3">
//             <p>Sign in with:</p>
//
//             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div>
//
//             <p className="text-center mt-3">or:</p>
//           </div>
//
//           <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
//
//           <div className="d-flex justify-content-between mx-4 mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>
//
//           <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
//           <p className="text-center">Not a member? <a href="#!">Register</a></p>
//
//         </MDBTabsPane>
//
//         <MDBTabsPane show={justifyActive === 'tab2'}>
//
//           <div className="text-center mb-3">
//             <p>Sign un with:</p>
//
//             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>
//
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div>
//
//             <p className="text-center mt-3">or:</p>
//           </div>
//
//           <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
//
//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//           </div>
//
//           <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
//
//         </MDBTabsPane>
//
//       </MDBTabsContent>
//
//     </MDBContainer>
//   );
// }
//
// export default SignIn;


import React, { useState } from "react";
import './SignInStyles.css'

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    //     catch the input from here
    }

    return (
        <div className="auth-form-container">
            <div className="new-constraints">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}

export default SignIn



