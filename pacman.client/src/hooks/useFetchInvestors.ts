import { useState, useEffect } from "react";

interface Investor {
    Id: number;
    Name: string;
}

const useInvestors = () => {
    const [investors, setInvestors] = useState<Investor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInvestors = async () => {
            try {
                const response = await fetch('http://localhost:5062/Investor');
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setInvestors(data.$values);
            } catch (error: any){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvestors();
    }, []);

    return { investors, loading, error };
};

export default useInvestors;