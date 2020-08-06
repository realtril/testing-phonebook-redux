import React from "react";
import { connect } from "react-redux";

const Guest = (props) => {
  return (
    <div className="contact">
      <h2 className="contactName">{props.user.name}</h2>
      <p>{props.user.number}</p>
      <button
        id={props.user.id}
        className="delete"
        onClick={props.onDeleteGuest}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(Guest);
