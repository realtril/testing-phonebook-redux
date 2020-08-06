import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import AlertMessage from "./Notifications/AlertMessage";
import { connect } from "react-redux";
import actions from "../Redux/contacts/contactsActions";
import "./Notifications/AlertAnimation.css";

class AddGuest extends Component {
  state = {
    name: "",
    number: "",
    alertOn: false,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  postNum = () => {
    if (this.props.isNameExist(this.state.name)) {
      this.props.onAddPerson(this.state);
      this.setState({ name: "", number: "" });
    } else {
      this.setState({ alertOn: true });
    }
  };

  clearAlert = () => {
    this.setState({ alertOn: false });
  };

  render() {
    return (
      <>
        <div className="phoneBookApp">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="logo-slideIn"
            unmountOnExit
          >
            <h1 className="logo">
              <span role="img" aria-label="cool">
                😎
              </span>
              Phonebook
              <span role="img" aria-label="cool">
                😎
              </span>
            </h1>
          </CSSTransition>
          <div className="addContactForm">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputHandler}
              placeholder="Name"
            />
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.inputHandler}
              placeholder="Number"
            />
            <button className="addGuest" onClick={this.postNum}>
              Add Guest
            </button>
            <CSSTransition
              in={this.state.alertOn}
              timeout={300}
              classNames="wrapper"
              unmountOnExit
            >
              <AlertMessage
                name={this.state.name}
                clearAlert={this.clearAlert}
              />
            </CSSTransition>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.contacts.items,
});

const mapDispatchToProps = {
  onAddPerson: actions.onAddPerson,
  isNameExist: actions.isNameExist,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);
