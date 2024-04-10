import { fetchContactsThunk, createContactThunk, removeContactThunk, updateContactThunk } from "../thunks/contacts";

let contactsReducer = {

  add: (state, action) => {
    state.push(action.payload);
  },

  remove: (state, action) => {
    let index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },

  update: (state, action) => {
    let index = state.findIndex(contact => contact.id === action.payload.id);
    state[index].firstName = action.payload.firstName;
    state[index].lastName = action.payload.lastName;
    state[index].email = action.payload.email;
    state[index].phone = action.payload.phone;
  }
};

export let contactsExtraReducer = {

  [fetchContactsThunk.pending]: (state, action) => {
    state.data = [];
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  [fetchContactsThunk.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.status = action.meta.requestStatus; //fulfilled
    state.error = {};
  },

  [fetchContactsThunk.rejected]: (state, action) => {
    state.data = [];
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },


  [createContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  [createContactThunk.fulfilled]: (state, action) => {
    state.data.push(action.payload);
    state.status = action.meta.requestStatus; //fulfilled
    state.error = {};
  },

  [createContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },


  [updateContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  //contacts/update/fulfilled
  [updateContactThunk.fulfilled]: (state, action) => {
    let index = state.data.findIndex(contact => contact.id === action.payload.id);
    state.data[index].firstName = action.payload.firstName;
    state.data[index].lastName = action.payload.lastName;
    state.data[index].email = action.payload.email;
    state.data[index].phone = action.payload.phone;

    state.status = action.meta.requestStatus; //fulfilled
    state.error = {};
  },

  [updateContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },


  [removeContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  [removeContactThunk.fulfilled]: (state, action) => {
    let index = state.data.findIndex(contact => contact.id === action.payload);
    state.data.splice(index, 1);

    state.status = action.meta.requestStatus; //fulfilled
    state.error = {};
  },

  [removeContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  }
  
};

export default contactsReducer;
