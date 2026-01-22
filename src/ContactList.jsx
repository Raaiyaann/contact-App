import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  // properti contacts ini nanti digunakan untuk menyimpan properti lain sepert name, tag, dan imageUrl
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
