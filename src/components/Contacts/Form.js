import React, { Component } from 'react';
import { connect} from 'react-redux'

import { contactSubmit } from '../../redux/actions/contact'
import '../../styles/Contacts.css';
import {every, values} from 'lodash';

class Form extends Component {
   
    //   this.state = {name: '', surname: '', textarea: ''};
  
    //   this.onChangeName = this.onChangeName.bind(this);
    //   this.onChangeSurname = this.onChangeSurname.bind(this);
    //   this.onChangeTextarea = this.onChangeTextarea.bind(this);
    //   this.onSubmit = this.onSubmit.bind(this);
    // }
    // onChangeName(event){
    //   this.setState({name: event.target.value});
    // }
    
    // onChangeSurname(event) {
    //   this.setState({surname: event.target.value});
    // }
    // onChangeTextarea(event) {
    //     this.setState({textarea: event.target.value});
    //   }
    state = {
      formData: {
        name: '',
        surname: '',
        textarea: '',
      },
      formValidation: {
        name: {isValid: true, errorMessage: null},
        surname: {isValid: true, errorMessage: null},
        textarea: {isValid: true, errorMessage: null},
      },
      buttonEnabled: false,
    
    };        
    onChangeName = (event) => {
      const {value} = event.target;
      const nextFormValidation = this.validateName(value);
      const nextState = {
        ...this.state,
        formData: {...this.state.formData, name: value},
        formValidation: nextFormValidation
      };
  
      this.setState({
        ...nextState,
        buttonEnabled: this.isValidForm(nextState)
      });
    };
  
    validateName = name => {
      let isValid = true;
      let errorMessage = null;
  
      if (name.length === 0) {
        isValid = false;
        errorMessage = 'Поле не должно быть пустым';
      } else if (name.length > 10) {
        isValid = false;
        errorMessage = 'Длина строки больше 10';
      }
      return {
        ...this.state.formValidation,
        name: {isValid, errorMessage}
      };
    };

    onChangeSurname = (event) => {
      const {value} = event.target;
      const nextFormValidation = this.validateSurname(value);
      const nextState = {
        ...this.state,
        formData: {...this.state.formData, surname: value},
        formValidation: nextFormValidation
      };
  
      this.setState({
        ...nextState,
        buttonEnabled: this.isValidForm(nextState)
      });
    };
  
    validateSurname = surname => {
      let isValid = true;
      let errorMessage = null;
  
      if (surname.length === 0) {
        isValid = false;
        errorMessage = 'Поле не должно быть пустым';
      } else if (surname.length > 15) {
        isValid = false;
        errorMessage = 'Длина строки больше 15';
      }
      return {
        ...this.state.formValidation,
        surname: {isValid, errorMessage}
      };
    };

    onChangeTextarea = (event) => {
      const {value} = event.target;
      const nextFormValidation = this.validateTextarea(value);
      const nextState = {
        ...this.state,
        formData: {...this.state.formData, textarea: value},
        formValidation: nextFormValidation
      };
  
      this.setState({
        ...nextState,
        buttonEnabled: this.isValidForm(nextState)
      });
    };

    validateTextarea = textarea => {
      let isValid = true;
      let errorMessage = null;
  
      if (textarea.length === 0) {
        isValid = false;
        errorMessage = 'Поле не должно быть пустым';
      } else if (textarea.length > 50) {
        isValid = false;
        errorMessage = 'Длина строки больше 50';
      }
      return {
        ...this.state.formValidation,
        textarea: {isValid, errorMessage}
      };
    };

    onSubmit = () => {
      console.log('submit')
      this.props.contactSubmit(
        this.state.formData
      );
    }

    isValidForm = nextState => {
      const {formValidation, formData} = nextState;
  
      const isValid = every(values(formValidation), {isValid: true}); 
      const isRequiredFilled = every([formData.name], (value) => (!!value)); 
  
      return isValid && isRequiredFilled;
    };

    showAlert = (text) => {
      alert(text);
    }
  
        render() {
          const {formData: {name, surname, textarea}, formValidation, buttonEnabled} = this.state;
          const { contact } = this.props;

          if (typeof contact.name !== 'undefined' && contact.name) {
            let alert = `Имя: ${contact.name} \n\r`;

            alert += `Фамилия: ${contact.surname}\n\r`;
            alert += `Ваше сообщение: ${contact.textarea}`;
            

           this.showAlert(alert);
          }

          return (
            <div className='form_wrapper'>
              <div className='form_name'>
                <label className='form_name'> Имя
                  <input
                  type="text"
                  value={name}
                  placeholder='Иван'
                  name="name"
                  required
                  onChange={this.onChangeName}
                /></label>
                {!formValidation.name.isValid && <span>{formValidation.name.errorMessage}</span>}
              </div>

              <div className='form_surname'>
                <label className='form_name'> Фамилия
                  <input
                  type="text"
                  placeholder='Иванов'
                  value={surname}
                  name="surname"
                  onChange={this.onChangeSurname}
                /></label>
                {!formValidation.surname.isValid && <span>{formValidation.surname.errorMessage}</span>}
              </div>

              <div className='form_textarea'>
              <label className='form_textarea'> Сообщение  <input
                  type="text"
                  placeholder='Ваше сообщение'
                  value={textarea}
                  name="textarea"
                  onChange={this.onChangeTextarea}
                /> </label>
              {!formValidation.textarea.isValid && <span>{formValidation.textarea.errorMessage}</span>}
              </div>

              <button className='form_btn'
                type='submit'
                disabled={!buttonEnabled}
                onClick={this.onSubmit}               
              >Отправить сообщение
              </button>
            </div>
          );
        }

  }
  const mapStateToProps = (state) => {
    return {
        contact: state.contact
    };
};

export default connect(mapStateToProps, {
  contactSubmit
})(Form);