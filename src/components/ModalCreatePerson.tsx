import React from 'react';
import { ICard } from './MyCard';

class CreatePerson extends React.Component {
  constructor(props: ICard) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      gender: '',
      age: '',
      country: '',
      birthday: '',
      sphere: 'sport',
      tel: '',
      mail: '',
      src: '',
      id: '',
      movie: 'false',
    };
  }

  render() {
    const validation = (e: React.FormEvent<HTMLInputElement>) => {
      const element = e.target as HTMLInputElement;
      element.style.border = '2px solid red';
    };

    const addPerson = () => {
      const res = localStorage.getItem('client');

      if (res) {
        const resJson = JSON.parse(res);
        resJson.push(this.state);
        localStorage.setItem('client', JSON.stringify(resJson));
      } else {
        localStorage.setItem('client', JSON.stringify([this.state]));
      }
    };

    return (
      <form className="modal-person">
        <div className="modal-item-container name-container">
          Name{' '}
          <input
            className="input input-modal-name"
            type="text"
            maxLength={20}
            placeholder="add a name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <div className="modal-item-container surname-container">
          Surname{' '}
          <input
            className="input input-modal-surname"
            type="text"
            maxLength={20}
            placeholder="add a surname"
            onChange={(e) => {
              this.setState({ surname: e.target.value });
              this.setState({ id: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <div className="modal-item-container age-container">
          Age{' '}
          <input
            className="input input-modal-age"
            type="number"
            max={100}
            placeholder="add an age"
            onChange={(e) => {
              this.setState({ age: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <div className="modal-item-container country-container">
          Country{' '}
          <input
            className="input input-modal-country"
            type="text"
            maxLength={10}
            placeholder="add a country"
            onChange={(e) => {
              this.setState({ country: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <div className="modal-item-container number-container">
          Tel number{' '}
          <input
            className="input input-modal-number"
            type="number"
            maxLength={11}
            placeholder="add a number"
            onChange={(e) => {
              this.setState({ tel: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <div className="modal-item-container mail-container">
          EMail{' '}
          <input
            className="input input-modal-mail"
            type="email"
            placeholder="add a mail"
            onChange={(e) => {
              this.setState({ mail: e.target.value });
            }}
            onInvalid={(e) => validation(e)}
            required={true}
          />
        </div>
        <span className="link-or-file">Link or file</span>
        <div className="photo-container">
          <div className="modal-item-container src-container">
            <input
              className="input input-modal-src"
              type="text"
              placeholder="add a link"
              onChange={(e) => {
                this.setState({ src: e.target.value });
              }}
            />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <span>or</span>
          <div className="modal-item-container file-container">
            <input
              className="input input-modal-file"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                const element = e.target as HTMLInputElement;
                if (element.files && element.files[0]) {
                  if (element.files[0].type.match('image.*')) {
                    const reader = new FileReader();
                    reader.onload = function (el) {
                      const element = el.target as FileReader | null;
                      if (element?.result) {
                        const src = element.result as string;
                        localStorage.setItem(
                          (document.querySelector('.input-modal-name') as HTMLInputElement).value,
                          src
                        );
                      }
                    };
                    reader.readAsDataURL(element.files[0]);
                  }
                }
              }}
            />
            <img className="test-img" src="" alt="" />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
        </div>
        <div className="other-info-container">
          <div className="modal-item-container date-container">
            Date of Birthday{' '}
            <input
              className="input input-modal-date"
              type="date"
              onChange={(e) => {
                this.setState({ birthday: e.target.value });
              }}
              onInvalid={(e) => validation(e)}
              required={true}
            />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container select-container">
            Choose a sphere{' '}
            <select
              className="select-sphere"
              onChange={(e) => {
                this.setState({ sphere: e.target.value });
              }}
              required={true}
            >
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
            <input
              className="input input-modal-starred"
              type="checkbox"
              onChange={(e) => {
                this.setState({ movie: e.target.checked });
              }}
              onInvalid={(e) => validation(e)}
            />
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
          <div className="modal-item-container gender-container">
            Choose a gender
            <label className="label-gender" htmlFor="gender">
              man
              <input
                name="gender"
                id="man"
                className="input input-modal-gender-man"
                type="radio"
                onChange={(e) => {
                  this.setState({ gender: e.target.id.toUpperCase()[0] });
                }}
                onInvalid={(e) => validation(e)}
                required={true}
              />
              woman
              <input
                name="gender"
                id="woman"
                className="input input-modal-gender-woman"
                type="radio"
                onChange={(e) => {
                  this.setState({ gender: e.target.id.toUpperCase()[0] });
                }}
                onInvalid={(e) => {
                  const element = e.target as HTMLInputElement;
                  (element.parentElement as HTMLLabelElement).style.border = '2px solid red';
                }}
                required={true}
              />
            </label>
            <img className="validation-cross" src="cross.svg" alt="cross" />
          </div>
        </div>
        <button
          type="submit"
          className="btn-add-new-person"
          onClick={function () {
            addPerson();
          }}
        >
          Add a new person
        </button>
      </form>
    );
  }
}

export default CreatePerson;
