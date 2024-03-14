const Notification = ({message, useSuccessStyle}) => {
    const sucessStyle = {
      color: 'green',
      background: 'lightgreen',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }
  
    const errorStyle = {
      color: 'red',
      background: 'lightred',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }
  
    const notificationStyle = useSuccessStyle ? sucessStyle : errorStyle
  
    if (message === null) {
        return null
    }
  
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
  }

  export default Notification