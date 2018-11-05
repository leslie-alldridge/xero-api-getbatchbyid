import React from 'react';

function BatchDetail(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Batch ID</th>
          <th>Date String</th>
          <th>Payment Quantity</th>
          <th>Reference</th>
          <th>Total Amount</th>
        </tr>
        {props.batches &&
          props.batches.map(batch => {
            return (
              <tr>
                <td>{batch.BatchPaymentID}</td>
                <td>{batch.DateString}</td>
                <td>{batch.Payments.length}</td>
                <td>{batch.Reference}</td>
                <td>{batch.TotalAmount}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default BatchDetail;
