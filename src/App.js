import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import { Authenticator } from "aws-amplify-react/dist/Auth";
// import { SignIn } from "aws-amplify-react";
import awsconfig from "./aws-exports";
import CustomSignIn from "./CustomSignIn";
Amplify.configure(awsconfig);

const App = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn headerText="My Custom Sign In Header" slot="sign-in" />
      <AmplifySignUp headerText="My Customer Sign Up Header" slot="sign-up" />

      <div>
        My App
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Authenticator hide={[SignIn]} amplifyConfig={awsconfig}>
//           <CustomSignIn />
//           <App />
//         </Authenticator>
//       </div>
//     );
//   }
// }
// export default App;
// export default withAuthenticator(App, true);
