import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input)
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((event, index) => {
          const totalInterest =
            event.valueEndOfYear -
            event.annualInvestment * event.year -
            initialInvestment
          const totalAmountInvested = event.valueEndOfYear - totalInterest
          return (
            <tr key={index}>
              <td>{event.year}</td>
              <td>{formatter.format(event.valueEndOfYear)}</td>
              <td>{formatter.format(event.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
