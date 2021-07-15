import React from 'react';
import { List, Item, ButtonDel } from './ContactsList.styled.js'

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id} >{name}: {number}
                    <ButtonDel type="button" onClick={() => onDeleteContact(id)}>Delete</ButtonDel>
                </Item>
            ))}
        </List>
    )
}

export default ContactsList
