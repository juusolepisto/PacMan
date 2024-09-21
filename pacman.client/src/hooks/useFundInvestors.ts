import { useState, useEffect } from "react";

const useFundInvestors = (fundId: number) => {
    const [fundInvestors, setFundInvestors] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInvestors = async () => {
            try {
                const response = await fetch(`http://localhost:5062/FundInvestor?fundId=${fundId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const fundInvestors = data.$values;

                setFundInvestors(fundInvestors);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvestors();
    }, [fundId]);

    return { fundInvestors, loading, error };
};

export default useFundInvestors;