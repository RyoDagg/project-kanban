import React,{useState} from 'react'

const Addproject = ({create}) => {
    const [name,setName]=useState('')
    const [des,setDes]=useState('')
  return (<div>
    <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Project</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Name</label>
                <input type="text" className="form-control" id="recipient-name" onChange={(event)=>{setName(event.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Description</label>
                <textarea className="form-control" id="message-text" onChange={(event)=>{setDes(event.target.value)}}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            
            <button type="button" className="btn btn-primary" 
            data-bs-dismiss="modal"
            onClick={()=>{create(name,des)}}
            >Add Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Addproject
