import actionTypes from "./contactsActionTypes";

const onDeleteGuest = (event) => ({
  type: actionTypes.DELETE,
  payload: event.target.id,
});

const onAddPerson = (personData) => ({
  type: actionTypes.ADD,
  payload: personData,
});

const isNameExist = (name) => ({
  type: actionTypes.CHECK,
  payload: name,
});

const onchange = (e) => ({
  type: actionTypes.CHANGE,
  payload: e,
});

export default {
  onDeleteGuest,
  onAddPerson,
  isNameExist,
  onchange,
};
