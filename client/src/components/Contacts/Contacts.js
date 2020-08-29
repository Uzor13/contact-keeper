import React, {useContext, Fragment} from 'react';
import ContactItem from "./ContactItem";
import ContactContext from "../../Context/Contact/ContactContext";
import PropTypes from 'prop-types';

const Contacts = props => {
    const contactContext = useContext(ContactContext);


    const {contacts} = contactContext;
    return (
        <Fragment>
            {contacts.map(contact => (
                <ContactItem contact={contact} key={contact.id}/>
            ))}
        </Fragment>
    );
};

Contacts.propTypes = {
    
};

export default Contacts;
