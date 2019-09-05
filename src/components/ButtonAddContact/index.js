import React from 'react';
import { useDispatch } from 'react-redux';

import { Content } from './style';
import * as ContactActions from '~/store/modules/contact/actions';

export default function ButtonAddContact() {
  const dispatch = useDispatch();
  return (
    <Content>
      <button type="button" onClick={() => dispatch(ContactActions.showForm())}>
        <i className="fa fa-fw fa-plus" />
      </button>
    </Content>
  );
}
