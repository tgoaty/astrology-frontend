import {Button, DatePicker, Form, Input, Row, TimePicker} from "antd";
import dayjs from 'dayjs';
import React from "react";
import styles from "./CreateNatalForm.module.css"
import {useNavigate} from "react-router-dom";
import {useUserInfoStore} from "../../app/store/store.ts";
import {natalFormInterface, natalInfo} from "../../shared/types/types.ts";
import CloseBtn from "../../features/closeBtn/CloseBtn.tsx";

const format = 'HH:mm';

const CreateNatalForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {username, city, date, time, setNatalInfo} = useUserInfoStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.validateFields().then((value: natalFormInterface) => {
            const time = value.time ? dayjs(value.time).format('HH:mm') : "12:00";
            const dateString = dayjs(value.date).format('DD.MM.YYYY')
            setNatalInfo({city: city, date: dateString, time: time} as natalInfo)
            sessionStorage.removeItem("natal")
            return navigate('/natal');
        })
    }

    return (
        <div className={styles["form__place"]}>
            <CloseBtn style={{fontSize: 24, right: 18}}/>
            <h1 className={styles["form__title"]}>Составить Натальную карту</h1>
            <Form form={form} onSubmitCapture={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <Form.Item className={styles["form__item"]} name="name" label="Имя"
                           rules={[{required: true, message: ''}]} initialValue={username}>
                    <Input placeholder="Елизавета"/>
                </Form.Item>
                <Form.Item className={styles["form__item"]} name="city" label="Город Рождения"
                           rules={[{required: true, message: ''}]} initialValue={city}>
                    <Input placeholder="Санкт-Петербург"/>
                </Form.Item>
                <Form.Item
                    className={styles["form__item"]}
                    name="date"
                    label="Дата Рождения"
                    rules={[{required: true, message: 'Пожалуйста, введите дату рождения!'}]}
                    initialValue={date !== '' ? dayjs(date, "DD.MM.YYYY") : null}
                >
                    <DatePicker
                        style={{width: '100%'}}
                        format="DD.MM.YYYY"
                    />
                </Form.Item>

                <Form.Item
                    className={styles["form__item"]}
                    name="time"
                    label="Время Рождения"
                    initialValue={time === '' ? dayjs('12:00', format) : dayjs(time, format)}
                >
                    <TimePicker style={{width: '100%'}} format={format} needConfirm={false}/>
                </Form.Item>

                <Row justify="end" className={styles["button__row"]}>
                    <Button type="dashed" onClick={() => form.setFieldsValue({
                        name: "",
                        city: "",
                        date: "",
                        time: dayjs('12:00', format),
                    } as natalFormInterface)}>Очистить</Button>
                    <Button type="default" htmlType="submit">Составить</Button>
                </Row>
            </Form>
        </div>

    );
};

export default CreateNatalForm;