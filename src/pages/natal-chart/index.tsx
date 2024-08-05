
import {useUserInfoStore} from "../../app/store/store.ts";
import {useEffect, useState} from "react";
import axios from "axios"
import {NatalChart} from "../../shared/types/natalTypes.ts";
import endpoints from "../../shared/api/endpoints.ts";
import Loader from "../../shared/ui/Loader.tsx";
import NatalSection from "../../widgets/NatalSection/NatalSection.tsx";

const Index = () => {
    const {city, date, time} = useUserInfoStore();
    const [natal, setNatal] = useState<NatalChart>()

    const Data = {
        day: date.split('.')[0],
        month: date.split('.')[1],
        year: date.split('.')[2],
        hour: time.split(':')[0],
        minute: time.split(':')[1],
        city: city
    }
    console.log(Data)
    useEffect(() => {
        axios.post(endpoints.getNatal, Data)
            .then(response => setNatal(JSON.parse(response.data) as NatalChart))
            .catch(error => console.error(error))
    }, [])
    if (!natal) {
        return <Loader/>
    }

    return (
        <div >
            <NatalSection header={"Планеты и точки в Знаках"} arrays={natal["Планеты и точки в Знаках"]}/>
            <NatalSection header={"Планеты и Точки в Домах"} arrays={natal["Планеты и Точки в Домах"]}/>
            <NatalSection header={"Аспекты"} arrays={natal["Аспекты"]}/>
        </div>
    );
};

export default Index;
