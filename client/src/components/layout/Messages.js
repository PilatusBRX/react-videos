import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useSelector} from 'react-redux';
import './messages.css';
const Messages = () => {
  const alertList = useSelector(state => state.messageList);
  const { alerts} = alertList;
  return (
   
    <div>
      { alerts.map((alert) => {
        return(
          <div key={alert.id} className={`alert alert-${alert.type}`}>
          <FaExclamationCircle /> {alert.msg}
          </div>
        )
      })}
    </div>
  );
};

export default Messages;



