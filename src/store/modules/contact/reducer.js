const INITIAL_STATE = {
  data: [],
  loading: true,
  formVisible: false,
  contactEdit: null,
};

export default function contact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contact/GET_CONTACTS_SUCCESS':
      return { ...state, loading: false, data: action.payload.data };

    case '@contact/ADD_CONTACT_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };
    }

    case '@contact/GET_CONTACT_EDIT': {
      return {
        ...state,
        contactEdit: action.payload.data,
      };
    }

    case '@contact/EDIT_CONTACT_SUCCESS': {
      const data = state.data.map(item => {
        if (item.id === action.payload.data.id) {
          return {
            ...action.payload.data,
          };
        }
        return item;
      });
      return { ...state, data };
    }

    case '@contact/DELETE_CONTACT_SUCCESS': {
      const data = state.data.filter(item => item.id !== action.payload.id);
      return { ...state, data };
    }

    case '@contact/SHOW_FORM':
      return { ...state, formVisible: true };

    case '@contact/HIDE_FORM':
      return { ...state, formVisible: false, contactEdit: null };

    default:
      return state;
  }
}
