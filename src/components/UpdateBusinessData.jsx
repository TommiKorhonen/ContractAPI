import React, { useContext } from 'react'
import ContractFinder from '../api/ContractFinder'
import { ContractContext } from '../context/ContractContext';

const UpdateBusinessData = () => {
    const { contractId } = useContext(ContractContext);
    const businessDataPut = async () => {
        try {
            const response = await ContractFinder.put(`/${contractId}`, {
                "formData": {
                    "businessType": 5999,
                    "estimatedTotalRevenue": 1000,
                    "estimatedServiceRevenue": 1000,
                    "averageServicePurchase": 1000,
                    "mostExpensiveServicePurchase": 1000,
                    "realBeneficialOwners": true,
                    "isPep": true,
                    "isRca": true,
                    "signatories": [{
                        "firstname": "test",
                        "phone": "123",
                        "email": "test@paybyway.com",
                        "lastname": "test"
                    }],
                    "beneficialOwners": [{
                        "firstname": "test",
                        "dateOfBirth": "2017-06-01",
                        "shareAmount": 1,
                        "lastname": "test"
                    }],
                    "marketingName": "test",
                    "websiteUrl": "test",
                    "supportEmail": "test@paybyway.com",
                    "supportPhone": "400",
                    "customerRepresenterFirstname": "test",
                    "customerRepresenterLastname": "test",
                    "customerRepresenterPhone": "400",
                    "customerRepresenterEmail": "test@paybyway.com",
                    "bankIban": "FI2356200920375952",
                    "bankOwner": "test",
                    "bankName": "test",
                    "companyBillingPostal": "test",
                    "companyBillingCity": "test",
                    "companyBillingAddressStreet": "test",
                    "companyBillingEmail": "test@paybyway.com",
                    "eInvoiceAddress": "test",
                    "eInvoiceProcessor": "test"
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="flex justify-center items-center flex-col">
            <h2 className="text-2xl p-4">Step 2 Press the red button to update businessdata</h2>
            <button onClick={() => businessDataPut()} className="bg-red-500 p-4">PRESS MEE</button>
        </section>
    )
}

export default UpdateBusinessData
