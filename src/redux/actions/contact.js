import { CONTACT } from '../../const/redux';

export const contactSubmit = ({ name, surname, textarea }) => {

    return {
        type: CONTACT.SUBMIT,
        name,
        surname,
        textarea,
    };
};



export default {};