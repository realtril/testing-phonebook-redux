import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import Guest from "../Guest";
import AddGuest from "../AddGuest";
import { connect } from "react-redux";
import "../Notifications/AlertAnimation.css";

class GuestList extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onDeleteGuest = (event) => {
    const id = event.target.id;
    const { contacts: contactList } = this.state;
    const contacts = contactList.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  onAddPerson = (personData) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, personData],
    }));
  };

  isNameExist(name) {
    const result = this.state.contacts.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (result) {
      return false;
    } else {
      return true;
    }
  }

  onchange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.state.contacts.filter((person) => {
      return person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });

    return (
      <div className="phoneBookList">
        <AddGuest
        // onAddPerson={this.onAddPerson}
        // isNameExist={this.isNameExist}
        // state={this.state}
        />
        <div className="Guest">
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onchange}
            className="filter"
            placeholder="Find contact by name"
          />
          <TransitionGroup className="Guests">
            {filteredContacts.map((user, index) => {
              return (
                <CSSTransition
                  key={uuidv4()}
                  timeout={250}
                  classNames="Guests-item-fade"
                  unmountOnExit
                >
                  <Guest
                    user={user}
                    key={uuidv4()}
                    onDeleteGuest={this.onDeleteGuest}
                    index={index}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default GuestList;

// AddGuest.propTypes = {
//   onAddPerson: PropTypes.func.isRequired,
//   isNameExist: PropTypes.func.isRequired,
//   state: PropTypes.shape({
//     contacts: PropTypes.array,
//     filter: PropTypes.string,
//   }),
// };
