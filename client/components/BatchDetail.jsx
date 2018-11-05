import React from 'react';

function BatchDetail(props) {
console.log(props);

  return (
    <div>
       {props.batches && props.batches.map(batch => <p>{batch.BatchPaymentID}</p>)}
       
    </div>
  );
}

export default BatchDetail;
