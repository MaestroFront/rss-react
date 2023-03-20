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
    return (
      <div className="modal-person">
        <div className="modal-item-container name-container">
          Name{' '}
          <input
            className="input input-modal-name"
            type="text"
            placeholder="add a name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="modal-item-container surname-container">
          Surname{' '}
          <input
            className="input input-modal-surname"
            type="text"
            placeholder="add a surname"
            onChange={(e) => this.setState({ surname: e.target.value })}
          />
        </div>
        <div className="modal-item-container age-container">
          Age{' '}
          <input
            className="input input-modal-age"
            type="text"
            placeholder="add an age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <div className="modal-item-container country-container">
          Country{' '}
          <input
            className="input input-modal-country"
            type="text"
            placeholder="add a country"
            onChange={(e) => this.setState({ country: e.target.value })}
          />
        </div>
        <div className="modal-item-container number-container">
          Tel number{' '}
          <input
            className="input input-modal-number"
            type="text"
            placeholder="add a number"
            onChange={(e) => this.setState({ telNumber: e.target.value })}
          />
        </div>
        <div className="modal-item-container mail-container">
          EMail{' '}
          <input
            className="input input-modal-mail"
            type="text"
            placeholder="add a mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="modal-item-container src-container">
          Photo link{' '}
          <input
            className="input input-modal-src"
            type="text"
            placeholder="add a link"
            onChange={(e) => this.setState({ photoLink: e.target.value })}
          />
        </div>
        <button
          type="button"
          className="btn-add-new-person"
          onClick={() => {
            const res = localStorage.getItem('client');
            if (res) {
              const resJson = JSON.parse(res);
              resJson.push(this.state);
              console.log(resJson);
              localStorage.setItem('client', JSON.stringify(resJson));
            } else {
              localStorage.setItem('client', JSON.stringify([this.state]));
            }
            window.location.pathname = '/';
          }}
        >
          Add a new person
        </button>
      </div>
    );
  }
}

export default CreatePerson;
