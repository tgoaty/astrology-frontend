import {Button, DatePicker, Form} from "antd";
import React, {useState} from "react";
import dayjs from "dayjs";

import {compatibilityFormInterface, compatibilityReqData} from "../../shared/types/types.ts";
import styles from "./index.module.css"
import axios from "axios";
import endpoints from "../../shared/api/endpoints.ts";
import {CompatibilityInfo} from "../../shared/types/natalTypes.ts";
import NatalPageError from "../../shared/ui/Errors/NatalPageError/NatalPageError.tsx";
import Loader from "../../shared/ui/Loader.tsx";
import NatalParagraph from "../../entities/NatalParagraph/NatalParagraph.tsx";

const Compatibility = () => {
    const [form] = Form.useForm()
    const [compatibilityInf, setCompatibilityInf] = useState<CompatibilityInfo | null>(null)
    const [error, setError] = useState('')
    const [loading, serLoading] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.validateFields().then((value: compatibilityFormInterface) => {
            const [fDay, fMonth, fYear] = dayjs(value.fDate).format('DD.MM.YYYY').split('.')
            const [mDay, mMonth, mYear] = dayjs(value.mDate).format('DD.MM.YYYY').split('.')
            const reqObj = {
                "f_day": fDay,
                "f_month": fMonth,
                "f_year": fYear,
                "m_day": mDay,
                "m_month": mMonth,
                "m_year": mYear
            } as compatibilityReqData
            sessionStorage.removeItem("compatibilityData");
            setCompatibilityInf(null)
            fetchData(reqObj)
        })
    }

    const fetchData = (data: compatibilityReqData) => {
        serLoading(true)
        axios.post(endpoints.getCompatibility, data)
            .then(response => {
                const compatibilityData = JSON.parse(response.data);
                setCompatibilityInf(compatibilityData);
                sessionStorage.setItem("compatibilityData", JSON.stringify(compatibilityData));
            })
            .catch(error => setError(error.message || 'Произошла ошибка'))
            .finally(() => serLoading(false))
    }

    if (error) {
        return <NatalPageError/>
        //TODO Compatibility Error
    }

    return (

        <div className={styles["container"]}>
            <Form layout="inline" onSubmitCapture={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
                  form={form}>
                <Form.Item className={styles["form__item"]} label="Женщина" name="fDate"
                           rules={[{required: true, message: ''}]}>
                    <DatePicker size="large" format="DD.MM.YYYY"/>
                </Form.Item>
                <Form.Item className={styles["form__item"]} label="Мужчина" name="mDate"
                           rules={[{required: true, message: ''}]}>
                    <DatePicker size="large" format="DD.MM.YYYY"/>
                </Form.Item>
                <Button className={styles["form__item"]} size="large" type="default" htmlType="submit">Рассчитать
                    совместимость</Button>
            </Form>
            {
                loading && <Loader marginTop={40}/>
            }
            {
                compatibilityInf
                &&
              <div>
                <h3 className={styles["title"]}>{compatibilityInf.title}</h3>
                  {compatibilityInf.chakra.map((item, index) =>
                      <div className={styles["row"]} key={index}>
                          <div className={styles["table__block"]}>
                              <div className={styles["chakra__item"]}>
                                  <p><b>{item[0][0]}</b></p>
                                  <p>{item[0][1]}</p>
                              </div>
                              <div className={styles["chakra__item"]}>
                                  <p><b>{item[1][0]}</b></p>
                                  <p>{item[1][1]}</p>
                              </div>

                          </div>

                      </div>)}
                <h3 className={styles["title"]}>Комментарии по биоритмам и чакрам</h3>
                  {compatibilityInf.chakraDescription.map((array, index) => <div key={index}><NatalParagraph
                      array={array}/>
                  </div>)}
              </div>
            }
        </div>
    );
};

export default Compatibility;