/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import Styles from '../css/contact.module.css'
import { TiUserOutline, TiMail, TiMessage } from "react-icons/ti";

function TextInput({ type = 'text', label }) {
    const [value, setValue] = useState('');
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return (
      <div className={`${Styles.inputContainer} mb-4`}>
        <input autoComplete="off" name="name" type={type} value={value} onChange={handleChange} className="bg-light" required/>
        <label className={`${value && Styles.filled} d-flex align-items-center gap-2`} htmlFor={name}>
          {label}
        </label>
      </div>
    );
}

function EmailInput({ type = 'email', label }) {
    const [value, setValue] = useState('');
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return (
      <div className={`${Styles.inputContainer} mb-4`}>
        <input id="email_address" autoComplete="off" name="email" type={type} value={value} onChange={handleChange} className="bg-light" required/>
        <label className={`${value && Styles.filled} d-flex align-items-center gap-2`} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }

  function TextAreaInput({ type = 'text', label }) {
    const [value, setValue] = useState('');
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return (
      <div className={`${Styles.inputContainer} mb-4`}>
        <input autoComplete="off" name="message" type={type} value={value} onChange={handleChange} className="bg-light" style={{ height: '100px' }} required></input>
        <label className={`${value && Styles.filled} d-flex align-items-center gap-2`} htmlFor={name}>
          {label}
        </label>
      </div>
    );
};

export default function ContactSection() {
    return (
        <section className="container p-5 mb-5" id="contacto">
            <h1 className="m-0 text-center mx-auto mb-5 text-break" style={{fontWeight: '600', color: '#F23339'}}>Contáctanos</h1>
            <div className="d-flex justify-content-center mb-4 mx-auto">
                    <form action="https://api.web3forms.com/submit" method="POST" className="text-center" style={{ width: '100%', maxWidth: '500px' }}>
                        <input type="hidden" name="apikey" value="440a9ba4-d3bb-4677-b684-96b2a828af86"/>
                        <input type="hidden" name="subject" value="Nuevo mensaje de la pagina web"/>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                        <input type="checkbox" name="botcheck" className="d-none" />
                          <div>
                            <TextInput label={["Nombre", <TiUserOutline className="fs-5" style={{color: 'rgb(227,46,51, .7)', width: '15px'}} /> ]} />
                          </div>
                          <div>
                            <EmailInput label={["Correo ", <TiMail className="fs-5" style={{color: 'rgb(227,46,51, .7)', width: '15px'}} /> ]} />
                          </div>
                          <div>
                            <TextAreaInput label={["Mensaje", <TiMessage className="fs-5" style={{color: 'rgb(227,46,51, .7)', width: '15px'}} /> ]} />
                          </div>
                          <div>
                            <button button className="w-100 btn btn-block btn-lg text-light btn-danger" type="submit" value="Submit" style={{ backgroundColor: '#E32E33', fontWeight: '500'}}>Enviar</button>
                          </div>
                    </form>
            </div>
        </section>
    )
}
