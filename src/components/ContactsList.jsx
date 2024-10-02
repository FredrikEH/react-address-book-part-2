import ContactItem from './ContactItem'

function ContactsList({contacts}){
    return(
        <section>
            <h3>Contacts</h3>
            <ul>
                {contacts.map((contact, index) => (
                    <ContactItem key={index} contact={contact}/>
                ))}
            </ul>
        </section>
        
    )
}

export default ContactsList