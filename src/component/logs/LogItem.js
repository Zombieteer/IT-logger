import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'
import Moment from 'react-moment'

export const LogItem = ({ log, deleteLog, setCurrent }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ?
                        'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID# {log.id}</span> Last Updated by{' '}
                    <span className="black-text">{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={() => deleteLog(log.id)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
}


export default connect(null, { deleteLog, setCurrent })(LogItem)