import React, { useContext } from 'react'
import ContractFinder from '../api/ContractFinder';
import { ContractContext } from '../context/ContractContext';

const CreateContract = () => {
    const { setContractId, setLoading } = useContext(ContractContext)
    const createContract = async () => {
        try {
            setLoading(true)
            const response = await ContractFinder.post("/", {
                vatNumber: "2486559-4",
                pricePackage: "power"
            })
            setContractId(response.data.id)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="flex justify-center items-center">
            <button className="bg-blue-500 text-white p-4 rounded-md" onClick={() => createContract()}>Create Contract</button>
        </section>
    )
}

export default CreateContract
