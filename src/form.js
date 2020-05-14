import React, {useState} from 'react'
import emailjs from 'emailjs-com'


const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm('default_service', 'contact_form', e.target, 'user_xpP72yPUdaJz3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      ;}

const success=()=>{
    const [count, setCount] = useState(0)
return(
    <div>
        
    </div>
)
}
const Contact =()=>{
// const [name, setName] =useState("")
// const [email, setEmail]= useState("")
// const [message, setMessage]= useState("")




    return(
        <div>

            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            {/* <form action="mailto:clintsearl@gmail.com" method="get" enctype="text/plain">
                <label>Name
                    <input 
                    name="user_name" 
                    value={name} 
                    type='text' 
                    onChange={e=>setName(e.target.value)}/>
                </label>
                <label>Email
                    <input 
                    name="user_email"
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}></input>
                </label>
                <label>
                    Message
                    <textarea
                    name="user_message"
                    value={message}
                    onChange={e=>setMessage(e.target.value)}>
                    </textarea>
                </label>
                <input type="submit"/>
            </form> */}
        </div>
    )
}

export default Contact