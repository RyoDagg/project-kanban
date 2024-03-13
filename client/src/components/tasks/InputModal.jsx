import React, { useState } from 'react'

export const InputModal = ({ addTask, role }) => {
    const [title, setTitle] = useState('');
    const [description, setDes] = useState('');
    return (

        <div className="modal fade" id={role + "Modal"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={(event) => { setTitle(event.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Description:</label>
                                <textarea className="form-control" id="message-text" onChange={(event) => { setDes(event.target.value) }} ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { addTask(title, description, role) }} >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}