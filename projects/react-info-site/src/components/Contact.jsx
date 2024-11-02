import React from "react";

export function Contact({image, name, number, email}){
    return (
        <div className="contact-card">
                <img src={image}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="../../public/ring-phone.png" />
                    <p>{number}</p>
                </div>
                <div className="info-group">
                    <img src="../../public/email.png" />
                    <p>{email}</p>
                </div>
            </div>
    )
}