import { useState } from 'react';
import Chat from './Chat.jsx';
import ContactList from '../Contacts/ContactList.jsx';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [message, setMessage] = useState({
    0: '',
    1: '',
    2: '',
  })

  function handleChange(e){
    setMessage({
        ...message,
        [to.id]: e.target.value
    })
  }

  function handleClear(){
    setMessage({
        ...message,
        [to.id]: ''
    })
  }
  return (
    <div>
      <ContactList 
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat text={message[to.id]} onChange={handleChange} key={to.id} contact={to} onClear={handleClear} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
