import React, { useContext } from 'react'
import ContractFinder from '../api/ContractFinder'
import { ContractContext } from '../context/ContractContext'

const CompanyAddressData = () => {
    const { setValues, contractId, addressData, setFormData } = useContext(ContractContext);
    const selectData = (async (id) => {
        try {
            const response = await ContractFinder.get(`/${id}`)
            setValues({
                companyName: response.data.formData.companyName,
                companyPhone: response.data.formData.companyPhone,
                companyAddressStreet: response.data.formData.companyAddressStreet,
                companyPostal: response.data.formData.companyPostal,
                companyCity: response.data.formData.companyCity
            })
            setFormData(response.data.formData)
        } catch (err) {
            console.log(err)
        };
    });
    // useEffect(() => {
    //     const getContract = async () => {
    //         try {
    //             const response = await ContractFinder.get(`/${contractId}`)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     getContract()
    // }, [contractId, addressData]);

    return (
        <section className="grid my-8">
            <table className="bg-gray-700 table-fixed">
                <thead>
                    <tr className="bg-blue-500 text-center text-white p-4">
                        <th>Companyname</th>
                        <th>Companyphone</th>
                        <th>CompanyaddressStreet</th>
                        <th>Companypostal</th>
                        <th>Companycity</th>
                    </tr>
                </thead>
                <tbody className="text-white text-center border-b border-solid border-gray-500 p-8 hover:bg-gray-500">
                    <tr onClick={() => selectData(contractId)}>
                        <td>
                            {addressData.companyName}
                        </td>
                        <td>
                            {addressData.companyPhone}
                        </td>
                        <td>
                            {addressData.companyAddressStreet}
                        </td>
                        <td>
                            {addressData.companyPostal}
                        </td>
                        <td>
                            {addressData.companyCity}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>


    )
}

export default CompanyAddressData
