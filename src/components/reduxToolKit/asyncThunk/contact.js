import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:7000"
});

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetch",
  async() => {
    let response = await api.get("/contacts");
    return response.data;
  }
);


export const createContactThunk = createAsyncThunk(
  "contacts/create",
  async(newContact) => {
    let response = await api({ 
      url: "/contacts",
      data: newContact,
      method: "POST"  });
    return response.data;
  }
);


export const updateContactThunk = createAsyncThunk(
  "contacts/update",
  async(modifiedContact) => {
    let response = await api({ 
      url: `/contacts/${modifiedContact.id}`,
      data: modifiedContact,
      method: "PUT"  });
    return response.data;
  }
);


export const removeContactThunk = createAsyncThunk(
  "contacts/remove",
  async(contactId) => {
    let response = await api({ 
      url: `/contacts/${contactId}`,
      method: "DELETE"  });
    return response.data;
  }
);

