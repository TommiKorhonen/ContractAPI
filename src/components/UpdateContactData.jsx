import React, { useContext } from 'react'
import ContractFinder from '../api/ContractFinder';
import { ContractContext } from '../context/ContractContext';
import CompanyAddressData from './CompanyAddressData';

const UpdateContactData = () => {
    const { values, setValues, contractId, setAddressData } = useContext(ContractContext)

    const handleSubmit = async (e) => {
        // console.log(values)
        e.preventDefault()
        try {
            const response = await ContractFinder.patch(`/${contractId}`, {
                "formData": {
                    companyName: values.companyName,
                    companyPhone: values.companyPhone,
                    companyAddressStreet: values.companyAddressStreet,
                    companyPostal: values.companyPostal,
                    companyCity: values.companyCity
                }
            });
            setAddressData({
                companyName: response.data.formData.companyName,
                companyPhone: response.data.formData.companyPhone,
                companyAddressStreet: response.data.formData.companyAddressStreet,
                companyPostal: response.data.formData.companyPostal,
                companyCity: response.data.formData.companyCity
            })
            setValues({
                companyName: "",
                companyPhone: "",
                companyAddressStreet: "",
                companyPostal: "",
                companyCity: ""
            });
            console.log(response.data)
        } catch (err) {
            console.log(err);
        };

    };
    let handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };
    return (
        <section>
            <h2 className="text-2xl p-4 text-center">Step 3 update data in form and send update</h2>
            <form onSubmit={handleSubmit} className="flex p-4 mt-4 flex-col items-center">
                <input type="text"
                    id="companyName"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                    placeholder="Companyname"
                    required
                />
                <input type="number"
                    id="companyPhone"
                    name="companyPhone"
                    value={values.companyPhone}
                    onChange={handleChange}
                    placeholder="Companyphone"
                    required
                />
                <input
                    id="companyAddressStreet"
                    type="text"
                    name="companyAddressStreet"
                    value={values.companyAddressStreet}
                    onChange={handleChange}
                    placeholder="Companyaddress"
                    required
                />
                <input type="text"
                    id="companyPostal"
                    name="companyPostal"
                    value={values.companyPostal}
                    onChange={handleChange}
                    placeholder="Companypostal"
                    required
                />
                <input
                    id="companyCity"
                    type="text"
                    name="companyCity"
                    value={values.companyCity}
                    onChange={handleChange}
                    placeholder="Companycity"
                    required
                />
                <button className="bg-green-400 p-4 rounded-sm w-full" type="submit">Send update</button>
            </form>
            <CompanyAddressData />
        </section>
    )
}

export default UpdateContactData
