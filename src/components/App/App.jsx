import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';



export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContacts = (e) => {
    const { value } = e.currentTarget
    setFilter(value);
  }

  const formSubmit = (data) => {
    setContacts([...contacts, data]);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  const deleteContact = contactId => {
    setContacts((state) => {
      console.log(state);
      state.filter(contact => contact.id !== contactId)
    })
  }

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <Form onSubmit={formSubmit} data={contacts} />
      <TitleBook>Contacts</TitleBook>
      <Filter value={filter} onChange={findContacts} />
      <ContactsList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
    </Container>
  )
}


// export class App extends Component {

//   state = {
//   contacts: [],
//   filter: '',
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts')
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

  // deleteContact = contactId => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  //   }))
  // }


// {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
