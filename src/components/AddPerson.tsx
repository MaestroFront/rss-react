import React from 'react';
import { Link } from 'react-router-dom';

export const AddPerson = function () {
  return (
    <>
      <Link className="link-add-person" to={'/add-person'}>
        Add a person
      </Link>
    </>
  );
};

export default AddPerson;
