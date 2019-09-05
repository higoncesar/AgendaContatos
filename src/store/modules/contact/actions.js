export function getContactsRequest() {
  return {
    type: '@contact/GET_CONTACTS_REQUEST',
  };
}

export function getContactsSuccess(data) {
  return {
    type: '@contact/GET_CONTACTS_SUCCESS',
    payload: { data },
  };
}

export function addContactRequest(data) {
  return {
    type: '@contact/ADD_CONTACT_REQUEST',
    payload: { data },
  };
}

export function addContactSuccess(data) {
  return {
    type: '@contact/ADD_CONTACT_SUCCESS',
    payload: { data },
  };
}

export function getContactEdit(data) {
  return {
    type: '@contact/GET_CONTACT_EDIT',
    payload: { data },
  };
}

export function editContactRequest(id, data) {
  return {
    type: '@contact/EDIT_CONTACT_REQUEST',
    payload: { id, data },
  };
}

export function editContactSuccess(data) {
  return {
    type: '@contact/EDIT_CONTACT_SUCCESS',
    payload: { data },
  };
}

export function deleteContactRequest(id) {
  return {
    type: '@contact/DELETE_CONTACT_REQUEST',
    payload: { id },
  };
}

export function deleteContactSuccess(id) {
  return {
    type: '@contact/DELETE_CONTACT_SUCCESS',
    payload: { id },
  };
}

export function showForm() {
  return {
    type: '@contact/SHOW_FORM',
  };
}

export function hideForm() {
  return {
    type: '@contact/HIDE_FORM',
  };
}
