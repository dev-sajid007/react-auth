import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-2' style={{marginTop:'200px'}}>
                    <div className='card-body'>
                        <div className='col-md-12 mt-5'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email"  className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                            
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </div>
  )
}
