import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logActions'
import { getTechs } from '../../actions/techAction'
import M from 'materialize-css/dist/js/materialize.min.js'


export const AddLogModal = ({ addLog, getTechs, tech_options: { techs, loading } }) => {

    useEffect(() => {
        getTechs()
        // eslint-disabled-next-line
    }, [])

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please Enter a Message and Tech' })
        } else {
            const newLog = {
                message, attention, tech, date: new Date()
            }

            addLog(newLog);
            M.toast({ html: `Log added by ${tech}` })
            // Clear Fields
            setMessage('')
            setTech('')
            setAttention(false)
        };
    }

    return (
        <div id='add-log-modal' className="modal" style={modalstyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)} />
                        <label htmlFor='message' className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)} >
                            <option value="" disabled>Select Technician</option>
                            {!loading &&
                                techs !== null &&
                                techs.map(tech_op => (<option value={tech_op}>{tech_op.firstName} {tech_op.lastName}</option>))}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className='filled-in'
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue btn'>Enter</a>
            </div>
        </div >
    )
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

const modalstyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProp = state => ({
    tech_options: state.tech
})

export default connect(mapStateToProp, { addLog, getTechs })(AddLogModal)