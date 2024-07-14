import { useState, useEffect } from "react";

interface Investor {
    Id: number;
    Name: string;
}

interface FundInvestor {
    Id: number;
    FundId: number;
    Investor: Investor;
    Commitment: number;
    PaidIn: number;
    Distribution: number;
    Profit: number;
}

const useFundInvestors = () => {
    const [fundInvestors, setFundInvestors] = useState<FundInvestor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInvestors = async () => {
            try {
                const response = await fetch('http://localhost:5062/fundinvestor');
                console.log(response);
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: FundInvestor[] = await response.json();
                setFundInvestors(data);
            } catch (error: any){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvestors();
    }, []);

    return { fundInvestors, loading, error };
};

export default useFundInvestors;