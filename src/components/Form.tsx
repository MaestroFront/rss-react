import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    gender: '',
    birthday: '',
    sphere: 'sport',
    file: '',
    mail: '',
    src: '',
    id: '',
    movie: 'false',
    isNameValid: true,
  };

  nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  genderRef: React.RefObject<HTMLInputElement> = React.createRef();
  fileRef: React.RefObject<HTMLInputElement> = React.createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  sphereRef: React.RefObject<HTMLSelectElement> = React.createRef();
  mailRef: React.RefObject<HTMLInputElement> = React.createRef();
  movieRef: React.RefObject<HTMLInputElement> = React.createRef();

  showMessage = () => {
    const message = document.querySelector('.success-adding');
    message?.classList.add('show');
    setTimeout(() => message?.classList.remove('show'), 2000);
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({
      name: '',
      gender: '',
      birthday: '',
      sphere: 'sport',
      mail: '',
      src: '',
      id: '',
      movie: 'false',
      file: '',
    });
    const resObj = {
      name: this.nameRef.current?.value,
      gender: this.genderRef.current?.id.toUpperCase()[0],
      birthday: this.birthdayRef.current?.value,
      sphere: this.sphereRef.current?.value,
      mail: '',
      src: '',
      id: '',
      movie: 'false',
      file: this.fileRef.current?.value,
    };

    if (this.nameRef.current && this.nameRef.current.value.length < 10) {
      this.setState({
        isNameValid: false,
      });
    } else if (!this.state.isNameValid) {
      this.setState({
        isNameValid: true,
      });
    }

    // if (this.nameRef.current) {
    //   this.nameRef.current.value = '';
    // }
    const res = localStorage.getItem('client') as string;
    let total = 0;
    Object.values(this.state).forEach((item) => {
      if (`${item}`.length !== 0) total++;
    });
    // console.log(this.state);
    // console.log(total);
    if (total >= 6) {
      if (res) {
        const resJson = JSON.parse(res);
        resJson.push(this.state);
        localStorage.setItem('client', JSON.stringify(resJson));
      } else {
        localStorage.setItem('client', JSON.stringify([this.state]));
      }
      this.showMessage();
    }
  };

  validation = (e: React.FormEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    element.style.border = '2px solid red';
  };

  render() {
    return (
      <form className="modal-person">
        <div className="modal-item-container name-container">
          Name
          <input
            ref={this.nameRef}
            className={
              this.state.isNameValid
                ? 'input input-modal-name'
                : 'input input-modal-name input--error'
            }
            type="text"
            placeholder="add a name"
            onInvalid={this.validation}
          />
        </div>
        <div className="modal-item-container mail-container">
          EMail
          <input
            ref={this.mailRef}
            className="input input-modal-mail"
            type="email"
            placeholder="add a mail"
          />
        </div>
        <span className="link-or-file">File image</span>
        <div className="modal-item-container file-container">
          <input
            ref={this.fileRef}
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
        </div>
        <div className="other-info-container">
          <div className="modal-item-container date-container">
            Date of Birthday{' '}
            <input ref={this.birthdayRef} className="input input-modal-date" type="date" />
          </div>
          <div className="modal-item-container select-container">
            Choose a sphere{' '}
            <select ref={this.sphereRef} className="select-sphere" defaultValue={'first'}>
              <option value="first" disabled>
                Choose the right one
              </option>
              <option value="sport">sport</option>
              <option value="movie">movie</option>
              <option value="other">other </option>
            </select>
          </div>
          <div className="modal-item-container starred-container">
            Starred in a movie
            <input className="input input-modal-starred" type="checkbox" />
          </div>
          <div className="modal-item-container gender-container">
            Choose a gender
            <label className="label-gender" htmlFor="gender">
              man
              <input
                ref={this.genderRef}
                name="gender"
                id="man"
                className="input input-modal-gender-man"
                type="radio"
              />
              woman
              <input
                ref={this.genderRef}
                name="gender"
                id="woman"
                className="input input-modal-gender-woman"
                type="radio"
              />
            </label>
          </div>
        </div>
        <input className="btn btn-reset" type="reset" value={'Reset'} />
        <button
          type="submit"
          className="btn-add-new-person"
          onClick={(e) => {
            this.handleShow(e);
          }}
        >
          Add a new person
        </button>
      </form>
    );
  }
}

export default Form;
