import React from 'react'

export const ProductsCard = () => {
    return (
        <div className="container p-4">
         <div className="row">
           <div className="col-md-6">
             <div className="card">
               <div className="card-body">
    
                 <h1 className="h4">Add Task</h1>
    
                 <div>
                 <div className="form-group">
                     <input type="text" id="task-title" className="form-control" className="Task Title" placeholder="Task Title"
                        autofocus/>
                </div>

                <div className="form-group">
                    <textarea id="task-description" rows="3" className="form-control" placeholder="Task Description"></textarea>
                </div>
                    <button className="btn btn-primary" id="btn-task-form">Save</button>
                </div>
            
              </div>
            </div>
          </div>
          <div className="col-md-6" id="tasks-container"></div>
        </div>
      </div>
    )
}
