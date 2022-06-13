import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function UserProfile() {
  const [userProfile, setUserProfile] = useState()

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json')
      .then((response) => {
        setUserProfile(response.data)
      });

  }, [userProfile])
  
    if(userProfile)
  return (
      <div className="container">
        <div className="row profile">
          <div className="col-md-4">
          </div>
          <div className="col-md-3">
            <div className="profile-sidebar">
              {/* SIDEBAR USERPIC */}
              <div className="profile-userpic">
                <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt={'user-img'} />
              </div>
              {/* END SIDEBAR USERPIC */}
              {/* SIDEBAR USER TITLE */}
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                  {userProfile.name}
                </div>
                <div className="profile-usertitle-job">
                  {userProfile.email}
                </div>
              </div>
              {/* END SIDEBAR USER TITLE */}
              {/* SIDEBAR BUTTONS */}
              <div className="profile-userbuttons">
                <button type="button" className={userProfile.gender=='Male'?"btn btn-primary btn-sm":"btn btn-pink btn-sm"}>{userProfile.gender}</button>
                <a type="button" className="btn btn-success btn-sm">{userProfile.contact_number}</a>
              </div>
              {/* END SIDEBAR BUTTONS */}
              {/* SIDEBAR MENU */}
              
              {/* END MENU */}
            </div>
          </div>
        </div>
      </div>
    )
else
    return 'User Loading'
}