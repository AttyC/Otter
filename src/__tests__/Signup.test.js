import React from 'react';
import { mount } from 'enzyme';
import validate from '../components/LoginFormValidationRules';

describe('Validate Signup form', () => {

  describe('areAllValuesValid', () => {
    it('should return an empty object if the values are valid', () => {
      const mockValues = {
        name: 'AcmeAnvils',
        email: 'wile.coyote@monumentvalley.com',
        confirmEmail: 'wile.coyote@monumentvalley.com',
      };
      const testValue = validate(mockValues)

      expect(testValue).toEqual({});
    });

    it('should return errors.name if the name is too short', () => {
      const mockValues = {
        name: 'A',
        email: 'wile.coyote@monumentvalley.com',
        confirmEmail: 'wile.coyote@monumentvalley.com',
      }
      const testValue = validate(mockValues)
      expect(testValue).toEqual({name: "Name must be 3 or more characters"})

    });
    it('should return errors.email if the email is not formatted correctly', () => {
      const mockValues = {
        name: 'AcmeAnvils',
        email: 'wile.coyote@monumentvalley',
        confirmEmail: 'wile.coyote@monumentvalley',
      }
      const testValue = validate(mockValues)
      expect(testValue).toEqual({email: "Email address is invalid", confirmEmail: "Email address is invalid" })

    });

    it('should return errors.confirmEmail if the emails do not match', () => {
      const mockValues = {
        name: 'AcmeAnvils',
        email: 'wile.coyote@monumentvalley.com',
        confirmEmail: 'road.runner@eatmydust.com',
      }
      const testValue = validate(mockValues)
      expect(testValue).toEqual({confirmEmail: "Email addresses must match"})

    });


    it('calls onSubmit prop function when form is submitted', () => {
      const onSubmitFn = jest.fn();
      const wrapper = mount(<form onSubmit={onSubmitFn}/>);
      const form = wrapper.find('form');
      form.simulate('submit');
      expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });
  });
});
