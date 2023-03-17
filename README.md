# auth-aws-amplify
## React Native Authentication Using AWS Cognito & Amplify
Authentication is a necessary feature for many applications in order to save data specific to a user, and allow access to specific screens. Its usually not worth it to create your own backend authentication system, since its way faster to use existing services, such AWS Cognito, allowing you to focus on features that bring value to your end-users.

In this article I will show you how to use Cognito for handling things such as sign in, sign up, account confirmation, and forgot password. React Navigation will help you create separate navigation for the authentication screens and the application screens. In order to simplify how we communicate to AWS from the app, we will use an npm package called AWS Amplify.
