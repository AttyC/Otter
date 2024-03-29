
# Otter - Online Services

__Otter__  is an upcoming online service company.
  
Our app enables you to sign up to receive the latest information about the exciting services we are about to launch.

## Otter App

We are using [React](https://reactjs.org/) JavaScript library for the front end. It sends sign up information (name and email) to an API.
  
- Created with [Create React App](https://github.com/facebook/create-react-app).

- CSS styles with [Styled Components](https://styled-components.com/)

- Packages installed using [npm](https://www.npmjs.com/)
  
- Testing: [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/)  

#### How to use this code and view the app:

__To download and install the app:__
  
Open Terminal (or PC command line equivalent). Clone the repository and change into the Otter directory.
```
git clone https://github.com/AttyC/Otter
cd Otter
```
  
Run the following command to install dependencies:  
```
yarn install
```  

__To run and view the app in your browser__

```
yarn start
```
Now go to [http://localhost:3000/](http://localhost:3000/) and see the app running.

#### Running tests

__Tests cover validation of form fields and submission__
  
```
yarn test
```
#### Building the app for production

__To build the app for production__
```
yarn run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

