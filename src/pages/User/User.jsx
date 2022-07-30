import React from 'react'
import { useAuth } from '../../contexts';
import "./User.css"

export const User = () => {

    const { authState: { userName, email }, signOutHandler } = useAuth();
    return (
            <main className="user__wrapper center__flex ">
                <div className="user__profile-sec border__rad-4px card__shadow padding-1rem margin-1rem">
                    <div>
                        <p>Profile details</p>
                        <p className='margin__tb-8px'><span className='txt__bold'>Full Name :</span> <span>{userName} </span></p>
                        <p><span>Email :</span> <span>{email} </span></p>
                    </div>
                    <button className='btns btn__secondary border__rad-4px' onClick={signOutHandler}>Logout</button>
                </div>
            </main>
            
    )
}
