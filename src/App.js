import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged, } from 'firebase/auth';
import { onSnapshot } from '@firebase/firestore';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    onAuthStateChanged(auth, async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
           console.log(this.state.currentUser)
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
      }
      ,this.unsubscribeFromAuth)
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
    <div>
    <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;








