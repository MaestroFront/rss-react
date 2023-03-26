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
      date: '',
      id: '',
    };
  }

  render() {
    const validated = (): void => {
      const inputs = document.querySelectorAll(
        '.modal-person .input'
      ) as NodeListOf<HTMLInputElement>;
      const checkboxes = document.querySelectorAll(
        '.label-gender .input'
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
        if (checkboxes[0].checked === false && checkboxes[1].checked === false) {
          document.querySelector('.gender-container .validation-cross')?.classList.add('show');
        }
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
      const checkboxes = document.querySelectorAll(
        '.label-gender .input'
      ) as NodeListOf<HTMLInputElement>;
      if (value.length > 0) {
        cross?.classList.remove('show');
      }
      if (checkboxes[0].checked === true || checkboxes[1].checked === true) {
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
        <div className="other-info-container">
          <div className="modal-item-container date-container">
            Date of Birthday{' '}
            <input
              className="input input-modal-date"
              type="date"
              onChange={(e) => {
                this.setState({ date: e.target.value });
                hideCross('date', e.target.value);
              }}
            />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container select-container">
            Choose a sphere{' '}
            <select className="select-sphere">
              <option value="first" disabled>
                Choose the right one
              </option>
              <option value="sport">sport</option>
              <option value="movie">movie</option>
              <option value="other">other </option>
            </select>
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container starred-container">
            Starred in a movie
            <input className="input input-modal-starred" type="checkbox" />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container gender-container">
            Choose a gender
            <label className="label-gender" htmlFor="gender">
              man
              <input
                name="gender"
                className="input input-modal-gender-man"
                type="radio"
                onChange={(e) => hideCross('gender', e.target.value)}
              />
              woman
              <input
                name="gender"
                className="input input-modal-gender-woman"
                type="radio"
                onChange={(e) => hideCross('gender', e.target.value)}
              />
            </label>
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container file-container">
            Upload a file
            <input className="input input-modal-file" type="file" />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
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
