import { useState, useEffect } from "react";

interface FundInvestor {
    id: number;
    investorName: string;
    commitment: number;
    paidin: number;
    distribution: number;
    profit: number;
}

interface Fund {
    id: number;
    name: string;
    description: string;
    fundInvestors: FundInvestor[];
}

const useFetchFunds = () => {
    const [funds, setFunds] = useState<Fund[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFunds = async () => {
            try {
                const response = await fetch('http://localhost:5062/Fund');
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const funds = data.$values;
                setFunds(funds);
            } catch (error: any){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFunds();
    }, []);

    return { funds, loading, error };
};
export default useFetchFunds;
