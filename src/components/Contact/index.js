import React from 'react';
import { useDispatch } from 'react-redux';

import * as ContactActions from '~/store/modules/contact/actions';

import { Content } from './style';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <Content>
      <img src={`https://ui-avatars.com/api/?name=${contact.name}`} alt="" />
      <h3>{contact.name}</h3>
      <strong>E-mail</strong>
      <p>{contact.email}</p>
      <strong>Fone</strong>
      <p>{contact.phone}</p>

      <div>
        <button
          type="button"
          className="btn-delete"
          onClick={() =>
            dispatch(ContactActions.deleteContactRequest(contact.id))
          }
        >
          Deletar
        </button>

        <button
          type="button"
          className="btn-edit"
          onClick={() => {
            dispatch(ContactActions.getContactEdit(contact));
            dispatch(ContactActions.showForm());
          }}
        >
          Editar
        </button>
      </div>
    </Content>
  );
}
