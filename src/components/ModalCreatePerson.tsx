import React from 'react';
import { ICard } from './MyCard';

class CreatePerson extends React.Component<any, any> {
  constructor(props: ICard) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      age: '',
      country: '',
      telNumber: '',
      email: '',
      photoLink: '',
      id: '',
    };
  }

  render() {
    const validated = (): void => {
      const inputs = document.querySelectorAll(
        '.modal-person .input'
      ) as NodeListOf<HTMLInputElement>;
      let total = 0;
      inputs.forEach((input) => (input.value ? total++ : total));
      if (total === 7) {
        const res = localStorage.getItem('client');
        if (res) {
          const resJson = JSON.parse(res);
          resJson.push(this.state);
          localStorage.setItem('client', JSON.stringify(resJson));
        } else {
          localStorage.setItem('client', JSON.stringify([this.state]));
        }
        clearInputs();
      } else {
        const crosses = document.querySelectorAll(
          '.validation-cross'
        ) as NodeListOf<HTMLImageElement>;
        inputs.forEach((input, index) => {
          if (input.value.length === 0) {
            crosses[index].classList.add('show');
          }
        });
      }
    };

    const clearInputs = (): void => {
      const inputs = document.querySelectorAll(
        '.modal-person .input'
      ) as NodeListOf<HTMLInputElement>;
      inputs.forEach((input) => (input.value = ''));
    };

    const hideCross = (title: string, value: string) => {
      const cross = document.querySelector(`.${title}-container .validation-cross`);
      if (value.length > 0) {
        cross?.classList.remove('show');
      }
    };

    return (
      <div className="modal-person">
        <div className="modal-item-container name-container">
          Name{' '}
          <input
            className="input input-modal-name"
            type="text"
            placeholder="add a name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
              hideCross('name', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container surname-container">
          Surname{' '}
          <input
            className="input input-modal-surname"
            type="text"
            placeholder="add a surname"
            onChange={(e) => {
              this.setState({ surname: e.target.value });
              hideCross('surname', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container age-container">
          Age{' '}
          <input
            className="input input-modal-age"
            type="text"
            placeholder="add an age"
            onChange={(e) => {
              this.setState({ age: e.target.value });
              hideCross('age', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container country-container">
          Country{' '}
          <input
            className="input input-modal-country"
            type="text"
            placeholder="add a country"
            onChange={(e) => {
              this.setState({ country: e.target.value });
              hideCross('country', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container number-container">
          Tel number{' '}
          <input
            className="input input-modal-number"
            type="text"
            placeholder="add a number"
            onChange={(e) => {
              this.setState({ telNumber: e.target.value });
              hideCross('number', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container mail-container">
          EMail{' '}
          <input
            className="input input-modal-mail"
            type="text"
            placeholder="add a mail"
            onChange={(e) => {
              this.setState({ email: e.target.value });
              hideCross('mail', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <div className="modal-item-container src-container">
          Photo link{' '}
          <input
            className="input input-modal-src"
            type="text"
            placeholder="add a link"
            onChange={(e) => {
              this.setState({ photoLink: e.target.value });
              hideCross('src', e.target.value);
            }}
          />
          <img className="validation-cross" src="cross.svg" alt="cross" />
        </div>
        <button
          type="button"
          className="btn-add-new-person"
          onClick={function () {
            validated();
            // window.location.pathname = '/';
          }}
        >
          Add a new person
        </button>
      </div>
    );
  }
}

export default CreatePerson;
