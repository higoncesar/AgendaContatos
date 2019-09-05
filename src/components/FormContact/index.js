import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import * as ContactActions from '~/store/modules/contact/actions';

import { ModalContent } from './style';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(20,20,20,0.9)';

export default function FormContact() {
  const contactEdit = useSelector(state => state.contact.contactEdit);
  const formVisible = useSelector(state => state.contact.formVisible);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('nome é obrigatório'),
    email: Yup.string().email('E-mail inválido'),
    phone: Yup.string(),
  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function handleCloseModal() {
    dispatch(ContactActions.hideForm());
  }

  function handleSubmit(data, { resetForm }) {
    if (contactEdit) {
      dispatch(ContactActions.editContactRequest(contactEdit.id, data));
    } else {
      dispatch(ContactActions.addContactRequest(data));
    }
    dispatch(ContactActions.hideForm());
    resetForm();
  }

  return (
    <Modal
      isOpen={formVisible}
      style={customStyles}
      onRequestClose={handleCloseModal}
    >
      <ModalContent>
        {contactEdit ? <h1>Editar Contato</h1> : <h1>Adicionar Contato</h1>}

        <Form onSubmit={handleSubmit} schema={schema} initialData={contactEdit}>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="phone" type="text" placeholder="Telefone" />
          <div>
            <button type="button" onClick={() => handleCloseModal()}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  );
}
