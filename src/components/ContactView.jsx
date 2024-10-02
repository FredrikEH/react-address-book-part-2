import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ContactView({contacts, contact, setContact}){
    const {id} = useParams()
    
    useEffect(() => {
        if(contacts && id){
            const matchingContact = contacts.find((contact) => contact.id === parseInt(id, 10))
            setContact(matchingContact)
        }
    }, [contact, id])
   
    if(!contact){
        return <p>No such contact</p>
    }

    return(
        <main>
            <article>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>City: {contact.city}</p>
                <p>Street: {contact.street}</p>
            </article>
        </main>
    )
}

export default ContactView