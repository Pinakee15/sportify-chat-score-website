import React from 'react'

const Message = ({ userName, message }) => {
    return (
        <div className="chatbox__messages" ng-repeat="message in messages">
            <div className="chatbox__messages__user-message">
                <div className="chatbox__messages__user-message--ind-message">
                    <p className="name">{userName}</p>
                    <br />
                    <p className="message">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
