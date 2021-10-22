import React, { useContext } from 'react'
import { ContractContext } from '../context/ContractContext'
import ContractSign from './ContractSign'
import CreateContract from './CreateContract'
import UpdateBusinessData from './UpdateBusinessData'
import UpdateContactData from './UpdateContactData'

const Main = () => {
    const { contractId, loading } = useContext(ContractContext)
    return (
        <main className="container mx-auto">
            {contractId ? <UpdateBusinessData /> : ""}
            {loading ? <h2 className="text-4xl p-4 text-center">Loading...</h2> : contractId ? <UpdateContactData /> : <h2 className="text-2xl text-black text-center">Create Contract to continue</h2>}
            {contractId ? "" : <CreateContract />}
            {contractId ? <ContractSign /> : ""}
        </main>
    )
}

export default Main
