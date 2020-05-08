// import React, { Component, Fragment } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// // import { media } from '../style/media';
// // import { Valid, Invalid } from './Icons';

// const Container = styled.div`
//   background: transparent;
//   height: 100%;
//   width: 100%;
//   border: transparent;
//   border-radius: 20px;
// `;

// const CombinedFieldContainer = styled.div`
//   position: relative;
//   background-color: white;
//   border: transparent;
//   border-radius: 10px;
//   margin-bottom: 0.8em;
//   padding-left: 0.5em;

//   width: 100%;
//   > div {
//     top: calc(70% - 22px);
//   }
// `;

// const FormWrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;

// `;

// const Label = styled.label`
//   display: block;
//   font-size: 0.81em;
//   font-weight: 500;
//   margin: 0 0 0.8em 1.2em;
// `;

// const InputField = styled.input`
//   box-sizing: border-box;
//   font-size: 1em;
//   height: 3em;
//   padding: ${props =>
//     props.isCombinedFields ? '0.7em 0.3em 0.5em 0.3em' : '0.8em 1em'};
//   border-radius: 10px;
//   border: ${props =>
//     props.isCombinedFields
//       ? 'transparent'
//       : '1px solid rgba(249, 249, 249, 1)'};
//   margin-bottom: 0.8em;
//   min-width: ${props => (props.isContactField ? '20em' : 'auto')};
//   text-align: ${props => (props.isCombinedFields ? 'center' : 'left')};

//   width: ${props => {
//     if (props.isCombinedFields) {
//       return '15%';
//     }
//     return '100%';
//   }};


//   &:focus {
//     outline: none;
//     border: ${props => props.theme.inputFocus} 1px solid;
//   }

//   ::-webkit-contacts-auto-fill-button {
//     visibility: hidden;
//     display: none !important;
//     pointer-events: none;
//     position: absolute;
//     right: 0;
//   }

//   ::-webkit-inner-spin-button,
//   ::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
// `;



// const InputFieldWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `;


// export default class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this); 
//   }

//   handleNameChange(event) {
//     this.props.onNameChange(event);
//   }

//   handleEmailChange(event) {
//     this.props.onEmailChange(event);
//   }

//   renderForm() {
//       return (
//         <section>

//           <InputFieldWrapper>
//             <InputField
//               name="Name"
//               onChange={this.handleNameChange}
//               placeholder="First name"
//               type="text"
//               value={name}
//             />
//             {this.renderIcons(
//               this.props.isNameValidationIconHidden,
//               this.props.isNameValid
//             )}
//           </InputFieldWrapper>
//           <Spacer />
//           <InputFieldWrapper>
//             <InputField
//               onChange={this.handleEmailChange}
//               name="Email"
//               placeholder="Your email address"
//               type="text"
//               value={isEmailValidationIconHidden}
//             />
//             {this.renderIcons(
//               this.props.isEmailValidationIconHidden,
//               this.props.isEmailValid
//             )}
//           </InputFieldWrapper>
//         </section>
//       );
//     }
//   }

  

// Form.propTypes = {
//   accountNumberHeader: PropTypes.string,
//   companyName: PropTypes.string,
//   contactDetailsHeader: PropTypes.string,
//   day: PropTypes.string,

//   email: PropTypes.string,
//   formHasFieldsForPersonalDetails: PropTypes.bool,
//   formWidth: PropTypes.string,
//   hasCompanyName: PropTypes.bool,
//   hasContactDetails: PropTypes.bool,
//   hasDateField: PropTypes.bool,
//   hasHeader: PropTypes.bool,
//   hasSortcode: PropTypes.bool,
//   hasTitleDropdown: PropTypes.bool,
//   isCompanyNameValidationIconHidden: PropTypes.bool,
//   isCompanyNameValid: PropTypes.bool,
//   isDateValid: PropTypes.bool,
//   isDateValidationIconHidden: PropTypes.bool,
//   isEmailValid: PropTypes.bool,
//   isEmailValidationIconHidden: PropTypes.bool,
//   isNameValid: PropTypes.bool,
//   isNameValidationIconHidden: PropTypes.bool,
//   isSurnameValid: PropTypes.bool,
//   isSurnameValidationIconHidden: PropTypes.bool,
//   isTelephoneValid: PropTypes.bool,
//   isTelephoneValidationIconHidden: PropTypes.bool,
//   month: PropTypes.string,
//   name: PropTypes.string,
//   onCompanyNameChange: PropTypes.func,
//   onDayChange: PropTypes.func,
//   onEmailChange: PropTypes.func,
//   onMonthChange: PropTypes.func,
//   onNameChange: PropTypes.func,
//   onSurnameChange: PropTypes.func,
//   onTelephoneChange: PropTypes.func,
//   onTitleSelection: PropTypes.func,
//   onYearChange: PropTypes.func,
//   personalDetailsHeader: PropTypes.string,
//   surname: PropTypes.string,
//   telephone: PropTypes.string,
//   year: PropTypes.string,
//   accountNumber: PropTypes.string,
//   bankDetailsHeader: PropTypes.string,
//   businessNameForBankAccount: PropTypes.string,
//   businessNameForBankAccountHeader: PropTypes.string,
//   formHasFieldsForBankAccountDetails: PropTypes.bool,
//   isAccountNumberValid: PropTypes.bool,
//   isAccountNumberValidationIconHidden: PropTypes.bool,
//   isBusinessNameForBankAccountValid: PropTypes.bool,
//   isBusinessNameForBankAccountValidationIconHidden: PropTypes.bool,
//   isSortcodeAValid: PropTypes.bool,
//   isSortcodeBValid: PropTypes.bool,
//   isSortcodeCValid: PropTypes.bool,
//   isSortcodeAValidationIconHidden: PropTypes.bool,
//   isSortcodeBValidationIconHidden: PropTypes.bool,
//   isSortcodeCValidationIconHidden: PropTypes.bool,
//   onAccountNumberChange: PropTypes.func,
//   onBusinessNameForBankAccountChange: PropTypes.func,
//   onSortcodeAChange: PropTypes.func,
//   onSortcodeBChange: PropTypes.func,
//   onSortcodeCChange: PropTypes.func,
//   onSoleOrMultipleAuthChange: PropTypes.func,
//   sortcodeA: PropTypes.string,
//   sortcodeB: PropTypes.string,
//   sortcodeC: PropTypes.string,
//   sortcodeHeader: PropTypes.string
// };

// Form.defaultProps = {
//   accountNumberHeader: '',
//   companyName: '',
//   contactDetailsHeader: '',
//   day: '',
//   email: '',
//   formHasFieldsForPersonalDetails: false,
//   formWidth: '',
//   hasCompanyName: false,
//   hasContactDetails: false,
//   hasDateField: false,
//   hasHeader: false,
//   hasSortcode: false,
//   hasTitleDropdown: false,
//   isDateValid: true,
//   isCompanyNameValid: true,
//   isCompanyNameValidationIconHidden: false,
//   isDateValidationIconHidden: false,
//   isEmailValid: true,
//   isEmailValidationIconHidden: false,
//   isNameValid: true,
//   isNameValidationIconHidden: false,
//   isSurnameValid: true,
//   isSurnameValidationIconHidden: false,
//   isTelephoneValid: true,
//   isTelephoneValidationIconHidden: false,
//   onTitleSelection: null,
//   month: '',
//   name: '',
//   onCompanyNameChange: null,
//   onDayChange: null,
//   onEmailChange: null,
//   onMonthChange: null,
//   onNameChange: null,
//   onSurnameChange: null,
//   onTelephoneChange: null,
//   onYearChange: null,
//   personalDetailsHeader: '',
//   surname: '',
//   telephone: '',
//   year: '',
//   accountNumber: '',
//   bankDetailsHeader: '',
//   businessNameForBankAccount: '',
//   businessNameForBankAccountHeader: '',
//   formHasFieldsForBankAccountDetails: false,
//   isAccountNumberValid: null,
//   isAccountNumberValidationIconHidden: null,
//   isBusinessNameForBankAccountValid: false,
//   isBusinessNameForBankAccountValidationIconHidden: null,
//   isSortcodeAValid: null,
//   isSortcodeBValid: null,
//   isSortcodeCValid: null,
//   isSortcodeAValidationIconHidden: null,
//   isSortcodeBValidationIconHidden: null,
//   isSortcodeCValidationIconHidden: null,
//   onAccountNumberChange: null,
//   onBusinessNameForBankAccountChange: null,
//   onSortcodeAChange: null,
//   onSortcodeBChange: null,
//   onSortcodeCChange: null,
//   onSoleOrMultipleAuthChange: null,
//   sortcodeA: '',
//   sortcodeB: '',
//   sortcodeC: '',
//   sortcodeHeader: ''
// };



import React from 'react';
import axios from 'axios';

class UserNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };

    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);

  }


  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  addToSubscribers = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/contacts', {
      name: this.state.name,
      email: this.state.email
    })

    .then(response => {
      console.log(response, 'Subscriber added');
      alert('Subscriber added');
      // this.props.loadUsersFromServer()
    })
   .catch(err => {
     console.log(err, 'User not added, try again');
     alert(err,'User not added, try again');
   });


    this.setState({
      name: '',
      email: '',
      skills: '',
      experience: '',
      bio: '',
      file: ''
    });
  };

  render() {
    return (

      <div>
        <form id='user-form' onSubmit = {this.addToSubscribers}>
          <label htmlFor='name'>
          Name:</label>
          <input type='text' onChange={this.nameChange} value={this.state.name} id='username' placeholder='enter your name...' required />
          <label htmlFor='email'>
          Email:</label>
          <input type='text' onChange={this.emailChange} value={this.state.email} id='email' placeholder='enter your email address...' required />

          <input type="submit" value ="Submit" />
        </form>
      </div>
    );
  }
}

export default UserNewForm;
