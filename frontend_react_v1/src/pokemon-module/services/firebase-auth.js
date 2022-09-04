import app from '../configurations/firebase-config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

class AuthServices{
  signup(user) {
    return createUserWithEmailAndPassword(auth, user.user.email, user.user.password)
      .then(response => ({user: response.user}))
      .then(user.user.isLoggedin = true, user.user.msg = 'User created successfully')
      .catch(error => user.user.msg = error.message);
  }
  login(user) {
    return signInWithEmailAndPassword(auth, user.user.email, user.user.password)
      .then(response => ({user: response.user}))
      .then(user.user.isLoggedin = true, user.user.msg = 'User logged in successfully')
      .catch(error => user.user.msg = error.message);
  }
  logout() {
    signOut(auth)
      .then(() => console.log('User is logged out'))
      .catch(error => console.log(error));
  }
}

export default new AuthServices();