import { useState } from 'react'
import { validateMobileNumber } from '../services/userService'

export function RegistrationGate({ onRegister }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateMobileNumber(mobileNumber)) {
      setError('Enter a valid 10 digit mobile number.')
      return
    }

    onRegister(mobileNumber)
  }

  return (
    <div className="gate-backdrop" role="dialog" aria-modal="true">
      <form className="gate-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Welcome to Mayon</p>
        <h2>Enter your mobile number to start ordering</h2>
        <p>
          Returning customers are recognized automatically from this browser and
          can continue without entering details again.
        </p>
        <label>
          Mobile number
          <input
            inputMode="numeric"
            maxLength="10"
            pattern="[0-9]{10}"
            placeholder="9876543210"
            value={mobileNumber}
            onChange={(event) => {
              setError('')
              setMobileNumber(event.target.value.replace(/\D/g, '').slice(0, 10))
            }}
            autoFocus
          />
        </label>
        {error && <p className="form-status error">{error}</p>}
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}
