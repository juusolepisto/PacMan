import { useState, useEffect } from "react";

interface Investor {
    Id: number;
    Name: string;
}

interface Fund {
    Id: number;
    Name: string;
    Investors: Investor[];
}

const useFunds = () => {
    const [funds, setFunds] = useState<Fund[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFunds = async () => {
            try {
                const response = await fetch('http://localhost:5062/fund');
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Fund[] = await response.json();
                setFunds(data);
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
export default useFunds;
