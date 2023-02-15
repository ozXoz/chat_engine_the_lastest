import {useState} from 'react';
import { sendMessage,isTyping } from 'react-chat-engine';
const MessageForm = (props)=>{
    const[value,setValue]=useState('');
    const {chatId,creds}=props;
    // Every handle submit in react u have to add event 
    const handleSubmit = (event)=>{
        event.preventDefault();

        // Trim the white space 
        const text =value.trim();
        // sendMessage comes from chat-engine and you have to pass 3 props .
        if(text.length>0) sendMessage(creds,chatId,{text});

        // we are resetting of the value

        setValue('');

    }
    const handleChange = (event)=>{
        // whatever user type anything we are graping and put in the value in  setvalue

        setValue(event.target.value)

        isTyping(props,chatId) // is user typing show ....

    }
    

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
            className="message-input"
            placeholder="Send a message ....."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            
            />
            {/* lets add image field ... */}
            <label htmlFor="upload-button">
                <span className='image-button'>

                </span>
            </label>
        </form>
    )
}

export default MessageForm;