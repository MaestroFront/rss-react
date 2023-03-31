import React, { Component } from 'react';
import { addPerson } from '../helpers/helpers';

class Form extends Component {
  state = {
    name: '',
    gender: '',
    birthday: '',
    sphere: '',
    file: '',
    mail: '',
    src: '',
    id: '',
    movie: 'no',
    isNameValid: true,
    isMailValid: true,
    isFileValid: true,
    isBirthdayValid: true,
    isSphereValid: true,
    isGenderValid: true,
  };

  nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  genderManRef: React.RefObject<HTMLInputElement> = React.createRef();
  genderWomanRef: React.RefObject<HTMLInputElement> = React.createRef();
  fileRef: React.RefObject<HTMLInputElement> = React.createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  sphereRef: React.RefObject<HTMLSelectElement> = React.createRef();
  mailRef: React.RefObject<HTMLInputElement> = React.createRef();
  movieRef: React.RefObject<HTMLInputElement> = React.createRef();

  handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({
      name: '',
      gender: '',
      birthday: '',
      sphere: '',
      mail: '',
      id: '',
      movie: 'no',
      file: '',
    });

    const resObj = {
      name: this.nameRef.current?.value,
      gender: '',
      genderMan: this.genderManRef.current?.checked,
      genderWoman: this.genderWomanRef.current?.checked,
      birthday: this.birthdayRef.current?.value,
      sphere: this.sphereRef.current?.value,
      mail: this.mailRef.current?.value,
      id: this.nameRef.current?.value,
      movie: this.movieRef.current?.checked,
      file: this.fileRef.current?.value,
    };

    resObj.genderMan === true ? (resObj.gender = 'M') : (resObj.gender = 'W');

    if (this.nameRef.current && this.nameRef.current.value.length < 2) {
      this.setState({
        isNameValid: false,
      });
    } else if (!this.state.isNameValid) {
      this.setState({
        isNameValid: true,
      });
    }

    if (this.mailRef.current && !this.mailRef.current.value.includes('@' && ('.ru' || '.com'))) {
      this.setState({
        isMailValid: false,
      });
    } else if (!this.state.isMailValid) {
      this.setState({
        isMailValid: true,
      });
    }

    if (this.fileRef.current && this.fileRef.current.value === '') {
      this.setState({
        isFileValid: false,
      });
    } else if (!this.state.isFileValid) {
      this.setState({
        isFileValid: true,
      });
    }

    if (this.birthdayRef.current && this.birthdayRef.current.value === '') {
      this.setState({
        isBirthdayValid: false,
      });
    } else if (!this.state.isBirthdayValid) {
      this.setState({
        isBirthdayValid: true,
      });
    }

    if (this.sphereRef.current && this.sphereRef.current.value === 'nothing') {
      this.setState({
        isSphereValid: false,
      });
    } else if (!this.state.isSphereValid) {
      this.setState({
        isSphereValid: true,
      });
    }

    if (
      this.genderManRef.current &&
      this.genderWomanRef.current &&
      this.genderManRef.current.checked === false &&
      this.genderWomanRef.current.checked === false
    ) {
      this.setState({
        isGenderValid: false,
      });
    } else if (!this.state.isGenderValid) {
      this.setState({
        isGenderValid: true,
      });
    }

    if (
      this.nameRef.current &&
      this.nameRef.current.value !== '' &&
      this.genderManRef.current &&
      this.genderWomanRef.current &&
      (this.genderManRef.current.checked === true ||
        this.genderWomanRef.current.checked === true) &&
      this.birthdayRef.current &&
      this.birthdayRef.current.value !== '' &&
      this.mailRef.current &&
      this.mailRef.current.value.includes('@' && ('.ru' || '.com')) &&
      this.sphereRef.current &&
      (this.sphereRef.current.value === 'IT' ||
        this.sphereRef.current.value === 'movie' ||
        this.sphereRef.current.value === 'sport' ||
        this.sphereRef.current.value === 'other') &&
      this.movieRef.current &&
      this.fileRef.current &&
      this.fileRef.current.value !== ''
    ) {
      this.nameRef.current.value = '';
      this.genderManRef.current.checked = false;
      this.genderWomanRef.current.checked = false;
      this.birthdayRef.current.value = '';
      this.mailRef.current.value = '';
      this.sphereRef.current.value = 'nothing';
      this.movieRef.current.checked = false;
      this.fileRef.current.value = '';
      addPerson(resObj);
    }
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
          />
        </div>
        <div className="modal-item-container mail-container">
          EMail
          <input
            ref={this.mailRef}
            className={
              this.state.isMailValid
                ? 'input input-modal-mail'
                : 'input input-modal-mail input--error'
            }
            type="email"
            placeholder="add a mail"
          />
        </div>
        <span className="link-or-file">File image</span>
        <div className="modal-item-container file-container">
          <input
            ref={this.fileRef}
            className={
              this.state.isFileValid
                ? 'input input-modal-file'
                : 'input input-modal-file input--error'
            }
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
            <input
              ref={this.birthdayRef}
              className={
                this.state.isBirthdayValid
                  ? 'input input-modal-date'
                  : 'input input-modal-date input--error'
              }
              type="date"
            />
          </div>
          <div className="modal-item-container select-container">
            Choose a sphere{' '}
            <select
              ref={this.sphereRef}
              className={this.state.isSphereValid ? 'select-sphere' : 'select-sphere input--error'}
              defaultValue={'nothing'}
            >
              <option value="nothing" disabled>
                nothing
              </option>
              <option value="sport">sport</option>
              <option value="movie">movie</option>
              <option value="IT">IT</option>
              <option value="other">other </option>
            </select>
          </div>
          <div className="modal-item-container starred-container">
            Starred in a movie
            <input ref={this.movieRef} className="input input-modal-starred" type="checkbox" />
          </div>
          <div className="modal-item-container gender-container">
            Choose a gender
            <label
              className={this.state.isGenderValid ? 'label-gender' : 'label-gender input--error'}
              htmlFor="gender"
            >
              man
              <input
                ref={this.genderManRef}
                name="gender"
                id="M"
                className="input input-modal-gender-man"
                type="radio"
                defaultValue={'man'}
              />
              woman
              <input
                ref={this.genderWomanRef}
                name="gender"
                id="W"
                className="input input-modal-gender-woman"
                type="radio"
                defaultValue={'woman'}
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
