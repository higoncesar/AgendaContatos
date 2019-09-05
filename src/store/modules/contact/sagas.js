import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './actions';
import api from '~/services/api';

export function* getContacts() {
  try {
    const { data } = yield call(api.get, '/contacts');

    yield put(Actions.getContactsSuccess(data));
  } catch (error) {
    // console.log('erro');
  }
}

export function* addContact({ payload }) {
  try {
    const { data } = yield call(api.post, '/contacts', {
      id: Math.random(),
      ...payload.data,
    });
    yield put(Actions.addContactSuccess(data));
  } catch (error) {
    console.tron.log(error);
  }
}

export function* editContact({ payload }) {
  try {
    const { data } = yield call(api.put, `/contacts/${payload.id}`, {
      ...payload.data,
    });

    yield put(Actions.editContactSuccess(data));
  } catch (error) {
    console.tron.log(error);
  }
}

export function* deleteContact({ payload }) {
  try {
    yield call(api.delete, `/contacts/${payload.id}`);
    yield put(Actions.deleteContactSuccess(payload.id));
  } catch (error) {
    // console.log('erro');
  }
}

export default all([
  takeLatest('@contact/GET_CONTACTS_REQUEST', getContacts),
  takeLatest('@contact/ADD_CONTACT_REQUEST', addContact),
  takeLatest('@contact/EDIT_CONTACT_REQUEST', editContact),
  takeLatest('@contact/DELETE_CONTACT_REQUEST', deleteContact),
]);
