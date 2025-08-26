import React from 'react';

function ContactItemBody(props){
    return (
        <div className='contact-item_body'>
            <h3 className='contact-item_title'>{props.name}</h3>
            <p className='contact-item_username'>@{props.tag}</p>
        </div>
    );
}

export default ContactItemBody;