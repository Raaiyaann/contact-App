import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  // properti contacts ini nanti digunakan untuk menyimpan properti lain sepert name, tag, dan imageUrl
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
