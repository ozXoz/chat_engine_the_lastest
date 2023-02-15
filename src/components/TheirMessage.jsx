const TheirMessage = ({lastMessage,message})=>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    // doing this will give us the boolean value which is going to tell us  if this first message by user

    return(
            // This is only if we have the first msg by the user
        <div className="message-row">
        {/* if is first msg by user and if it is you can use    */}
            {isFirstMessageByUser && (
                <div 
                
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                
                />

                
            )}

{message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
        </div>
    )
}

export default TheirMessage;