import { useForm, SubmitHandler } from 'react-hook-form';
import { ICard } from '../types/interfaces';
import { addPerson, createID } from '../helpers/helpers';

function FormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICard>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<ICard> = (data) => {
    data.id = `${createID(data)}`;
    addPerson(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-person">
      <div className="modal-item-container name-container">
        Name
        <input
          {...register('name', {
            required: 'Name is require field!',
          })}
          className={'input input-modal-name'}
          type="text"
          placeholder="add a name"
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
      </div>
      <div className="modal-item-container mail-container">
        EMail
        <input
          {...register('mail', {
            required: 'Email is require field!',
            pattern: {
              value:
                // eslint-disable-next-line no-useless-escape
                /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
              message: 'Please enter valid Email',
            },
          })}
          className={'input input-modal-mail'}
          type="email"
          placeholder="add a mail"
        />
        {errors.mail && <div style={{ color: 'red' }}>{errors.mail.message}</div>}
      </div>
      <span className="link-or-file">File image</span>
      <div className="modal-item-container file-container">
        <input
          {...register('file', {
            required: 'File is require field!',
          })}
          className={'input input-modal-file'}
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
        {errors.file && <div style={{ color: 'red' }}>{errors.file.message}</div>}
      </div>
      <div className="other-info-container">
        <div className="modal-item-container date-container">
          Date of Birthday{' '}
          <input
            {...register('birthday', {
              required: 'Birthday is require field!',
            })}
            className={'input input-modal-date'}
            type="date"
          />
          {errors.birthday && <div style={{ color: 'red' }}>{errors.birthday.message}</div>}
        </div>
        <div className="modal-item-container select-container">
          Choose a sphere{' '}
          <select
            {...register('sphere', {
              required: 'Sphere is require field!',
            })}
            className={'select-sphere'}
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
          {errors.sphere && <div style={{ color: 'red' }}>{errors.sphere.message}</div>}
        </div>
        <div className="modal-item-container starred-container">
          Starred in a movie
          <input {...register('movie')} className="input input-modal-starred" type="checkbox" />
        </div>
        <div className="modal-item-container gender-container">
          Choose a gender
          <label className={'label-gender'} htmlFor="gender">
            man
            <input
              {...register('gender', {
                required: 'Gender is require field!',
              })}
              name="gender"
              id="M"
              className="input input-modal-gender-man"
              type="radio"
              defaultValue={'man'}
            />
            woman
            <input
              {...register('gender', {
                required: 'Gender is require field!',
              })}
              name="gender"
              id="W"
              className="input input-modal-gender-woman"
              type="radio"
              defaultValue={'woman'}
            />
          </label>
          {errors.gender && <div style={{ color: 'red' }}>{errors.gender.message}</div>}
        </div>
      </div>
      <input className="btn btn-reset" type="reset" value={'Reset'} />
      <button type="submit" className="btn-add-new-person">
        Add a new person
      </button>
    </form>
  );
}

export default FormCard;
