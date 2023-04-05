import React from 'react';
// import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
// import CustomButton from '../custom-button/custom-button.component';
import {signInWithGooglePopup ,createUserDocumentFromAuth} from '../../firebase/firebase-utils'



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
        const signIn = () => {
            const logGoogleUser = async () =>{
                const {user} = await signInWithGooglePopup();
               const userDocRef = await createUserDocumentFromAuth(user);
            }

        return (     
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your E-mail and Password</span>
                <button onClick={logGoogleUser}>
                    Sign with google popup
                </button>
                {/* <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} 
                    label='Password'required />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={logGoogleUser}>{' '}Sign In With Google {' '}</CustomButton>
                </form> */}
            </div>
        )
    };
    // }
    // 
// }
export default signIn;