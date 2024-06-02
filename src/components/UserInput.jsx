export default function UserInput({ input, handleInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    input
    
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={(event) =>
              handleInput('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={(event) =>
              handleInput('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={expectedReturn}
            onChange={(event) =>
              handleInput('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={duration}
            onChange={(event) => handleInput('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  )
}
