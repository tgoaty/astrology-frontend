import {useUserInfoStore} from "../../app/store/store.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import {NatalChart} from "../../shared/types/natalTypes.ts";
import endpoints from "../../shared/api/endpoints.ts";
import Loader from "../../shared/ui/Loader.tsx";
import NatalSection from "../../widgets/NatalSection/NatalSection.tsx";
import NatalPageError from "../../shared/ui/Errors/NatalPageError/NatalPageError.tsx";

const Index = () => {
    const {natalInfo} = useUserInfoStore();
    const [natal, setNatal] = useState<NatalChart | null>(null);
    const [error, setError] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem("natal")) {
            const sessionNatal = JSON.parse(sessionStorage.getItem("natal") as string);
            setNatal(sessionNatal);
        } else {
            fetchNatal();
        }
    }, []);

    const fetchNatal = () => {
        const city = natalInfo.city
        const [day, month, year] = natalInfo.date.split('.');
        const [hour, minute] = natalInfo.time.split(':');
        const data = {
            day,
            month,
            year,
            hour,
            minute,
            city
        };

        axios.post(endpoints.getNatal, data)
            .then(response => {
                const natalData = response.data;
                setNatal(natalData);
                console.log(natalData)
                sessionStorage.setItem("natal", JSON.stringify(natalData));
            })
            .catch(error => setError(error.message || 'Произошла ошибка'));
    };
    if (error){
        return <NatalPageError/>

    }
    if (!natal) {
        return <Loader/>;
    }

    return (
        <>
            <NatalSection header={"Планеты и точки в Знаках"} arrays={natal["Планеты и точки в Знаках"]}/>
            <NatalSection header={"Планеты и Точки в Домах"} arrays={natal["Планеты и Точки в Домах"]}/>
        </>
    );
};

export default Index;
