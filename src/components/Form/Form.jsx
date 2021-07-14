import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoid from '../../utils/nanoid.js';
import { FormEl, Input, TitleInput, Button, } from './Form.styled.js';

export default class Form extends Component {
   static propTypes = {
     name: PropTypes.string,
     number: PropTypes.string,
    }
    state = {
    name: '',
    number: ''
    }

      handleSubmit = (e) => {
        e.preventDefault()
        const { name, number } = this.state;
        const { data } = this.props;
        const obj = {
            id: nanoid(),
                    name,
                    number,
        };
        const compare = this.checkContact(data, obj)
        if (compare) {
          alert(`${compare.name} is already in contacts`)
          return this.reset();
        }
          this.props.onSubmit(obj);
          this.reset();
  }

  checkContact = (contacts, obj) => {
    const { name } = obj;
    const normalizedName = name.toLowerCase();
     return contacts.find(contact => contact.name.toLowerCase().includes(normalizedName))
    }

    reset = () => {
        this.setState( {
    name: '',
    number: ''
    })
    }

      handleChange = (e) => {
            const { name, value } = e.currentTarget;
            this.setState({[name]: value,})
    }

    render() {
        const { name, number } = this.state;
        return (
             <FormEl onSubmit={this.handleSubmit}>
             <TitleInput>Name</TitleInput>
            <Input
             type="text"
             name="name"
             value={name}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             onChange={this.handleChange}
             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
             required
           />
           <TitleInput>Number</TitleInput>
           <Input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             onChange={this.handleChange}
             value={number}
             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
             required
           />
            <Button type="submit">Add contact</Button>
         </FormEl>
        )
    }
}
