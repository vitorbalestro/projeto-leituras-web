const successfulNotificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const errorNotificationStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}


interface Props {
    message: string,
    notificationType: string
}

const Notification = ({ message, notificationType } : Props) => {
    if(message === '') return null
    return (
        notificationType === 'success' ?
        <div className='success' style={successfulNotificationStyle}>
            {message}
        </div> 
        : 
        <div className='error' style={errorNotificationStyle}>
            {message}
        </div> 
    )
}



export default Notification;