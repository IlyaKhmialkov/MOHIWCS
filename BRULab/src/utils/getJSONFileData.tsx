import axios from "axios";
import { useEffect, useState } from "react";

interface IGetJSONFileDataParams {
    path: string;
}

interface IGetJSONFileDataReturn {
    [key: string]: string;
}

export function getJSONFileData({ path }: IGetJSONFileDataParams): IGetJSONFileDataReturn {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(path);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return data;
}
