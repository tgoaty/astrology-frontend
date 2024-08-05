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
        axios.post<NatalChart>(endpoints.getNatal, Data)
            .then(response => setNatal(JSON.parse(response.data)))
            .catch(error => console.error(error))
    }, [])
    if (!natal) {
        return <Loader/>
    }
    console.log(natal)
    const keys = Object.keys(natal)
    return (
        <div style={{color: "wheat", fontSize: "1rem", margin: 40, paddingTop: 4200}}>
            <NatalSection header={keys[0]} arrays={natal[keys[0]]}/>
            <NatalSection header={keys[1]} arrays={natal[keys[1]]}/>
            <NatalSection header={keys[2]} arrays={natal[keys[2]]}/>
        </div>
    );
};

export default Index;