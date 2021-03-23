import React from 'react';

import './Contact.css'

const name = 'Joy Spencer';
const avatar = 'https://randomuser.me/api/portraits/women/96.jpg';
const status = true;


const Contact = () => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <h4 className="name">{name}</h4>

                <div className="status">{status ?
                    <div>
                        <div className="status-online"></div>
                        <p className="status-text"> online</p>
                    </div>
                    :
                    <div>
                        <div className="status-offline"></div>
                        <p className="status-text">offline</p>
                    </div>}

                </div>
            </div>

        </div>
    )
}


export default Contact;
