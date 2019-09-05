import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Content, Header } from './styles';

import Contact from '~/components/Contact';
import ButtonAddContact from '~/components/ButtonAddContact';
import FormContact from '~/components/FormContact';

import * as ContactActions from '~/store/modules/contact/actions';

export default function Main() {
  const contacts = useSelector(state => state.contact.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactActions.getContactsRequest());
  }, [dispatch]);

  return (
    <>
      <Header>
        <h1>Agenda</h1>
      </Header>
      <Content>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
        <FormContact />
        <ButtonAddContact />
      </Content>
    </>
  );
}
