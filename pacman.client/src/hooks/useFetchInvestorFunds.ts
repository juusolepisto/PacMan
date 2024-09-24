import { useEffect, useState } from "react";

const useFetchInvestorFunds = (investorId: number) => {
    const [investorFunds, setInvestorFunds] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInvestorFunds = async() => {
            try {
                const response = await fetch(`http://localhost:5062/FundInvestor/investor/${investorId}`);
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                
                setInvestorFunds(data.$values);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (investorId){
            fetchInvestorFunds();
        }
    }, [investorId]);

    console.log(investorFunds);
    return { investorFunds, loading, error};
;}

export default useFetchInvestorFunds;