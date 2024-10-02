import './App.css';
import {useEffect, useState} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import ContactsList from './components/ContactsList'
import ContactView from './components/ContactView'
import Form from './components/Form'

function App() {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState(null)

    const getContacts = async () => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/FredrikEH/contact`)
        const data = await response.json()
        setContacts(data)
    }    

    const postContact = async (contact) => {
        console.log('Test App postContact')
        const response = await fetch(
            `https://boolean-uk-api-server.fly.dev/FredrikEH/contact`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(contact)
            }

        )
        const data = await response.json()
        console.log(data)
        getContacts()
    }

    {/* 
    const deleteContact = async (contact) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/FredrikEH/contact/${id}`),
        {
            method: "DELETE"
        }
        getContacts()
    }
    */}
    
    
    useEffect(() => {
        getContacts()
    }, [])

    return (
        <>  
            <header>
                <h1>The Contacts Site</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Form">Add New Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts}/>} />
                <Route path="/contact/:id" element={<ContactView contacts={contacts} contact={contact} setContact={setContact} />} />
                <Route path="/form" element={<Form contact={contact} postContact={postContact} setContact={setContact}/>} />
            </Routes>
        </>
    );
}

export default App;
