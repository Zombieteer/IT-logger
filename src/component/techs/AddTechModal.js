import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTech } from '../../actions/techAction'

export const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please Enter a the First and Last Name' })
        } else {
            const tech = {
                firstName,
                lastName
            }
            addTech(tech)
            M.toast({ html: `${firstName} technician has been added` })
            // Clear Fields
            setFirstName('')
            setLastName('')
        };
    }

    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor='firstName' className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} />
                        <label htmlFor='lastName' className="active">
                            Last Name
                        </label>
                    </div>
                </div>


            </div>
            <div className='modal-footer'>
                <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue btn'>Enter</a>
            </div>
        </div >
    )
}


export default connect(null, { addTech })(AddTechModal)