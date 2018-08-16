module.exports = {
  columns: [
    { name: 'userName', from: 0, to: 10 },
    { name: 'menuOption', from: 10, to: 40 },
    { name: 'transactionType', from: 40, to: 43 },
    { name: 'transactionCode', from: 43, to: 46 },
    { name: 'transactionNumber', from: 46, to: 55 },
    { name: 'sequenceNumber', from: 55, to: 60 },
    { name: 'displaySku', from: 60, to: 85 },
    { name: 'caseNumber', from: 85, to: 105 },
    { name: 'pktControlNumber', from: 105, to: 115 },
    { name: 'units', from: 115, to: 124 },
    { name: 'fromLocationType', from: 124, to: 125 },
    { name: 'fromLocation', from: 125, to: 149 },
    { name: 'toLocationType', from: 149, to: 150 },
    { name: 'toLocation', from: 150, to: 174 },
    { name: 'startDate', from: 174, to: 183 },
    { name: 'startTime', from: 183, to: 190 },
    { name: 'endDate', from: 190, to: 199 },
    { name: 'endTime', from: 199, to: 206 },
    { name: 'salesChannel', from: 206, to: 208 },
    { name: 'ftpFileName', from: 208, to: 216 }
  ],
  header: false,
  useHeader: false,
  useQuotes: false
};
