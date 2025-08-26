import React from 'react';

function ContactItemImage(props){
    return (
        <div className='contact-item_image'>
            <img src={props.imageUrl} alt="gambar kontak" />
        </div>
    );
}

export default ContactItemImage;