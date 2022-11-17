import React from "react";
import PropTypes from 'prop-types';


export default function Test(props) {

    const unreadMessages = props.unreadMessages;

    return (
        <div>
            {unreadMessages.length > 0 &&
                <h1>You have {unreadMessages.length} unread messages.</h1>
}
        </div>
    )

}

Test.propTypes = {
    unreadMessages: PropTypes.array
  };