const successfulNotificationStyle = {
    color: 'white',
    background: 'dodgerblue',
    fontSize: 15,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
}

const errorNotificationStyle = {
    color: 'white',
    background: 'red',
    fontSize: 20,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
    marginTop: 10
}


interface Props {
    message: string,
    notificationType: string
}

const Notification = ({ message, notificationType } : Props) => {
    if(message === '') return null
    return (
        notificationType === 'success' ?
        <div className='success appearing-vanishing-notification' style={successfulNotificationStyle}>
            {message}
        </div> 
        : 
        <div className='error' style={errorNotificationStyle}>
            {message}
        </div> 
    )
}



export default Notification;