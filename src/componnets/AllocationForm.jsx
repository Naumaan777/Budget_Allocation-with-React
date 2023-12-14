import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const AllocationForm = (props) => {
  const { dispatch, remaining } = useContext(AppContext)

  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [action, setAction] = useState('')

  const submitEvent = () => {
    if (cost > remaining) {
      alert('The value cannot exceed remaining funds  £' + remaining)
      setCost('')
      return
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    }
    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      })
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      })
    }

    setCost('')
  }

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="HR">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <div className="form-group mt-lg-0 mt-4 align-items-center d-flex">
            <input
              className="ms-5 input-group-prepend p-1 "
              required="required"
              type="number"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>

            <button className="btn btn-primary" onClick={submitEvent}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllocationForm
