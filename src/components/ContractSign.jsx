import React, { useContext } from 'react'
import ContractFinder from '../api/ContractFinder'
import { ContractContext } from '../context/ContractContext';

const ContractSign = () => {
    const { contractId, formData } = useContext(ContractContext);
    const signContract = async () => {
        try {
            const response = await ContractFinder.post(`/${contractId}/sign`, {
                formData
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-2xl p-4">Step 4 Press the yellow button to send the sign call</h2>
            <button onClick={() => signContract()} className="bg-yellow-500 p-4">Sign this contract now</button>
        </section>
    )
}

export default ContractSign
