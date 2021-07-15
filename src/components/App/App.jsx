import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';



export default function App () {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

   const deleteContact = contactId => {
    setContacts((state) => state.filter(contact=> contact.id !== contactId)
    )
  }

  const formSubmit = (data) => {
    setContacts([...contacts, data]);
  }


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <Form onSubmit={formSubmit} data={contacts} />
      <TitleBook>Contacts</TitleBook>
      <Filter onChange={(e) => setFilter(e.currentTarget.value)} value={filter}/>
      <ContactsList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
    </Container>
  )
}



