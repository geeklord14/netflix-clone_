import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser ,logout} from '../../features/counter/userSlice'
import { auth } from '../../firebase'
import Nav from '../Nav'
import PlansScreen from './PlansScreen'
import './ProfileScreen.css'

function ProfileScreen() {
const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                      alt = "" />
                      <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <h3>Plans</h3>
                      <div className="profileScreen__plans">
                     
                        <PlansScreen />
                          <button 
                          onClick={()=>auth.signOut()}
                          className="profileScreen__signout">
                          sign out
                          </button>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
