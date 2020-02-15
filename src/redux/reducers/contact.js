import { CONTACT } from '../../const/redux';

const reducer = (state = {}, { name, surname, textarea, type }) => {
    switch (type) {
        case CONTACT.SUBMIT:
            return {
                    name, 
                    surname, 
                    textarea
                };              
        default:
            return state;
    }
};

export default reducer;