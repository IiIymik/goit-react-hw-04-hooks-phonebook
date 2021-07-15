import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';



export default function App() {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
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

  
  //  const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  // }


  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <Form onSubmit={formSubmit} data={contacts} />
      <TitleBook>Contacts</TitleBook>
      <Filter onChange={(e) => setFilter(e.currentTarget.value)} value={filter}/>
      <ContactsList contacts={contacts} onDeleteContact={deleteContact} />
    </Container>
  )
}



// {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
