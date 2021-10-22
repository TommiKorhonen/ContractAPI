import React, { useState, createContext } from "react";

export const ContractContext = createContext();

export const ContractContextProvider = props => {
    const [contractId, setContractId] = useState("");
    const [loading, setLoading] = useState();
    const [formData, setFormData] = useState();
    const [values, setValues] = useState({
        companyName: "",
        companyPhone: "",
        companyAddressStreet: "",
        companyPostal: "",
        companyCity: ""
    });
    const [addressData, setAddressData] = useState({
        companyName: "",
        companyPhone: "",
        companyAddressStreet: "",
        companyPostal: "",
        companyCity: ""
    });
    return (
        <ContractContext.Provider value={{ formData, setFormData, values, setValues, addressData, setAddressData, contractId, setContractId, loading, setLoading }}>
            {props.children}
        </ContractContext.Provider>
    )
}
