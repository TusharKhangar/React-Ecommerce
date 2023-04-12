
import React from 'react';
// import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
// import CustomButton from '../custom-button/custom-button.component';
import { 
    signInWithGooglePopup, createUserDocumentFromAuth,  } from '../../firebase/firebase-utils'
import SignUpForm from '../sign-up-form/sign-up-form.component'; 


// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//     handleSubmit = event => {
//         event.preventDefault();

//         this.setState({ email: '', password: '' })
//     }
//     handleChange = event => {
//         const { value, name } = event.target;

//         this.setState({ [name]: value })
//     }
// render() {
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div className="sign-in">
            <h2>I Already have an account</h2>
            <span>Sign in with your E-mail and Password</span>
            <button onClick={logGoogleUser}>Sign with google popup</button>
            <SignUpForm/>
        </div>
    )
};
// }
// 
// }
export default SignIn;