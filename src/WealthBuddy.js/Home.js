import CreateSavings from './CreateSavings'
import TransactionHistory from './TransactionHistory'
import Vacation from './Vacation'




const Home = () => {

const stocks = [

        {
            "titleName":"Contribution",
            "name": "Vacation",
            "savingsID": "e090ce43-315b-4852-bcca-ee5a1f4223ba",
            "amountToSave": 50000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2022-03-08T00:00:00",
            "startDate": "2022-02-26T00:00:00",
            "savingsType": 1,
            "status": 1,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 5000.000000000000000000,
            "isPaused": false
        },
        {
            "titleName":"Contribution",
            "name": "Testing Personal Target",
            "savingsID": "72824131-b4ae-49d0-bcae-29e553deb51c",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2500.000000000000000000,
            "totalInterestEarned": 10.616438356164383561643835616,
            "estimatedTerminationDate": "2022-02-23T00:00:00",
            "startDate": "2022-02-20T00:00:00",
            "savingsType": 1,
            "status": 2,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "lastPaymentDate": "2022-02-20T00:00:00",
            "isPaused": true
        },
        {
            "titleName":"Total saved",
            "name": "G Challenge Weekly",
            "savingsID": "c6a1f776-ab92-4c89-aceb-9fdcfc70abb2",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/22fe2b2b-46ab-4971-8a87-72da6085e09b.jpeg",
            "interestRate": 12.50,
            "schedule": 2,
            "installmentalContribution": 250.000000000000000000,
            "isPaused": false
        },
        {
            "titleName":"Total saved",
            "name": "G challenge week",
            "savingsID": "286c453f-3910-4df7-9b02-87ae6d9844e2",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/897b9d7a-5030-446b-99b2-7248e80e9a95.jpeg",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 166.666666666666666667,
            "isPaused": false
        },
        {
            "titleName":"Total saved",
            "name": "G challenge",
            "savingsID": "87c9042a-16a7-4e31-80c4-1f805fa4c1b5",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/e8db900b-60b2-46e8-b980-5a274df81582.jpeg",
            "interestRate": 12.50,
            "schedule": 3,
            "installmentalContribution": 500.000000000000000000,
            "isPaused": false
        },
        {
            "titleName":"Total saved",
            "name": "GroupTargetTest2",
            "savingsID": "d16d61ac-3f62-437c-bf10-a8bb5b83b090",
            "amountToSave": 10000.000000000000000000,
            "amountSaved": 3333.333333333333333334,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:45:51.57",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 1666.666666666666666667,
            "lastPaymentDate": "2021-02-23T23:46:04.65",
            "isPaused": false
        },
        {
            "titleName":"Total saved",
            "name": "CheckTargetTest",
            "savingsID": "d5393a07-6b61-46fd-9948-ed3d1404b55e",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 1666.666666666666666666,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:33:26.8333333",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 833.333333333333333333,
            "lastPaymentDate": "2021-02-24T00:00:00",
            "isPaused": false
        },
        {
            "titleName":"Total saved",
            "name": "TestChallengeCheck",
            "savingsID": "1ed6b0ce-92c9-4e6c-8b3e-2ccb94fba89b",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2000.000000000000000001,
            "totalInterestEarned": 0.684931506849315069,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:00:36.87",
            "savingsType": 5,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "isPaused": false
        }
    
    
]

// const transaction = 
// [
//     {
//         "amount": 1000.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-03-02T14:13:33.97",
//         "name": "Test2",
//         "savingsType": 2,
//         "customerName": "Rosh Abayomi",
//         "id": "b483b3f3-03a4-45d1-97dd-8ac06bd5ec4c",
//         "lastModifiedDate": "2022-03-02T14:13:33.97"
//     },
//     {
//         "amount": 20000.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-03-02T14:12:38.88",
//         "name": "Testr",
//         "savingsType": 2,
//         "customerName": "Rosh Abayomi",
//         "id": "d34fc293-0f2d-45a8-b9c5-c8a9ed96b9b9",
//         "lastModifiedDate": "2022-03-02T14:12:38.88"
//     },
//     {
//         "amount": 500.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-02-20T18:05:08.7833333",
//         "name": "Testing Personal Target",
//         "savingsType": 1,
//         "customerName": "Rosh Abayomi",
//         "id": "8763cd26-3426-4d21-bb54-ae513b05166a",
//         "lastModifiedDate": "2022-02-20T18:05:08.7833333"
//     },
//     {
//         "amount": 500.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-02-20T18:02:56",
//         "name": "Testing Personal Target",
//         "savingsType": 1,
//         "customerName": "Rosh Abayomi",
//         "id": "7ad406f0-29e7-4cba-8387-997a5c3dc65a",
//         "lastModifiedDate": "2022-02-20T18:02:56.0366667"
//     },
//     {
//         "amount": 500.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-02-20T18:02:01.7966667",
//         "name": "Testing Personal Target",
//         "savingsType": 1,
//         "customerName": "Rosh Abayomi",
//         "id": "03d97cf8-2b8f-4083-bdde-0b8ece2be01e",
//         "lastModifiedDate": "2022-02-20T18:02:01.7966667"
//     },
//     {
//         "amount": 500.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-02-20T17:58:03.18",
//         "name": "Testing Personal Target",
//         "savingsType": 1,
//         "customerName": "Rosh Abayomi",
//         "id": "85350527-11f0-4e1a-99fc-0a6b64967991",
//         "lastModifiedDate": "2022-02-20T17:58:03.18"
//     },
//     {
//         "amount": 500.000000000000000000,
//         "action": 2,
//         "creationDate": "2022-02-20T17:44:16.7966667",
//         "name": "Testing Personal Target",
//         "savingsType": 1,
//         "customerName": "Rosh Abayomi",
//         "id": "ed6e4533-480b-4e3c-bd32-9329e5c63dff",
//         "lastModifiedDate": "2022-02-20T17:44:16.7966667"
//     },
//     {
//         "amount": 2000.000000000000000001,
//         "action": 1,
//         "creationDate": "2021-02-26T00:00:10.4866667",
//         "name": "TestChallengeCheck",
//         "savingsType": 5,
//         "customerName": "Rosh Abayomi",
//         "id": "000a772c-d274-4dbd-a8c0-2a3c89efbd90",
//         "lastModifiedDate": "2021-02-26T00:00:10.4866667"
//     },
//     {
//         "amount": 1.369863013698630138,
//         "action": 1,
//         "creationDate": "2021-02-26T00:00:10.4833333",
//         "name": "TestChallengeCheck",
//         "savingsType": 5,
//         "customerName": "Rosh Abayomi",
//         "id": "3c9f9464-b058-4400-92c8-0e7752cb31ac",
//         "lastModifiedDate": "2021-02-26T00:00:10.4833333"
//     },
//     {
//         "amount": 666.666666666666666667,
//         "action": 2,
//         "creationDate": "2021-02-25T00:00:04.24",
//         "name": "TestChallengeCheck",
//         "savingsType": 5,
//         "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
//         "customerName": "Rosh Abayomi",
//         "id": "e6f3eb87-05a6-4e1d-967c-3dc8aa7f7c57",
//         "lastModifiedDate": "2021-02-25T00:00:04.24"
//     },
//     {
//         "amount": 666.666666666666666667,
//         "action": 2,
//         "creationDate": "2021-02-24T00:17:32.63",
//         "name": "TestChallengeCheck",
//         "savingsType": 5,
//         "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
//         "customerName": "Rosh Abayomi",
//         "id": "aa890ed7-e012-480d-b99e-f0140f1e2791",
//         "lastModifiedDate": "2021-02-24T00:17:32.63"
//     },
//     {
//         "amount": 833.333333333333333333,
//         "action": 2,
//         "creationDate": "2021-02-24T00:06:10.86",
//         "name": "CheckTargetTest",
//         "savingsType": 4,
//         "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
//         "customerName": "Rosh Abayomi",
//         "id": "8fde239e-41e3-4ca5-b530-16cf0c7d8007",
//         "lastModifiedDate": "2021-02-24T00:06:10.86"
//     },
//     {
//         "amount": 1666.666666666666666667,
//         "action": 2,
//         "creationDate": "2021-02-23T23:45:59.6966667",
//         "name": "GroupTargetTest2",
//         "savingsType": 4,
//         "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
//         "customerName": "Rosh Abayomi",
//         "id": "0e74cbfa-a084-4822-9f56-86b66e3a09f5",
//         "lastModifiedDate": "2021-02-23T23:45:59.6966667"
//     },
//     {
//         "amount": 666.666666666666666667,
//         "action": 2,
//         "creationDate": "2021-02-23T23:19:35.11",
//         "name": "TestChallengeCheck",
//         "savingsType": 5,
//         "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
//         "customerName": "Rosh Abayomi",
//         "id": "038684a3-cc3d-40f9-b57b-beb11ff6953a",
//         "lastModifiedDate": "2021-02-23T23:19:35.11"
//     }
// ]
    
    return( 
       <div className="border border-danger bg-light">
              
        <TransactionHistory/>
        <CreateSavings/>

        { 
             stocks.map(stock => <Vacation data={stock}/>)
        }


       </div>
    )

} 
export default Home