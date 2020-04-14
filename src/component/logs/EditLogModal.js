import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { updateLog, clearCurrent } from '../../actions/logActions'

export const EditLogModal = ({ current, updateLog, clearCurrent }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please Enter a Message and Tech' })
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLog(updLog);
            clearCurrent()
            M.toast({ html: `Log updated by ${tech}` })
            // Clear Fields
            setMessage('')
            setTech('')
            setAttention(false)
        };

    }

    return (
        <div id='edit-log-modal' className="modal" style={modalstyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)} />
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
                            <option value="Koi bhi 1">Koi bhi 1</option>
                            <option value="Koi bhi 2">Koi bhi 2</option>
                            <option value="Koi bhi 3">Koi bhi 3</option>
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

const modalstyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProp = (state) => ({
    current: state.log.current
})

export default connect(mapStateToProp, { updateLog, clearCurrent })(EditLogModal)