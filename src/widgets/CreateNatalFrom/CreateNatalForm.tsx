import {Button, DatePicker, Form, Input, Row, TimePicker} from "antd";
import dayjs from 'dayjs';
import React from "react";
import styles from "./CreateNatalForm.module.css"
import {useNavigate} from "react-router-dom";
import {useUserInfoStore} from "../../app/store/store.ts";
import {startFormInterface} from "../../shared/types/types.ts";

const format = 'HH:mm';

const CreateNatalForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {setUsername, setCity, setDate, setTime} = useUserInfoStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.validateFields().then((value: startFormInterface) => {
            setUsername(value.name);
            setCity(value.city);
            const time = dayjs(value.time).format('HH:mm');
            const dateString = dayjs(value.date).format('DD.MM.YYYY')
            setDate(dateString);
            setTime(time);
            sessionStorage.removeItem("natal")
            return navigate('/natal');
        })
    }

    return (
        <div className={styles["form__place"]}>
            <h1 className={styles["form__title"]}>Составить Натальную карту</h1>
            <Form form={form} onSubmitCapture={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <Form.Item className={styles["form__item"]} name="name" label="Имя"
                           rules={[{required: true, message: ''}]}>
                    <Input placeholder="Елизавета"/>
                </Form.Item>
                <Form.Item className={styles["form__item"]} name="city" label="Город Рождения"
                           rules={[{required: true, message: ''}]}>
                    <Input placeholder="Санкт-Петербург"/>
                </Form.Item>
                <Form.Item className={styles["form__item"]} name="date" label="Дата Рождения"
                           rules={[{required: true, message: ''}]}>
                    <DatePicker style={{width: '100%'}} format="DD.MM.YYYY"/>
                </Form.Item>
                <Form.Item className={styles["form__item"]} name="time" label="Время Рождения"
                           initialValue={dayjs('12:00', format)}>
                    <TimePicker style={{width: '100%'}} format={format} needConfirm={false}/>
                </Form.Item>
                <Row justify="end" className={styles["button__row"]}>
                    <Button type="dashed" onClick={() => form.resetFields()}>Очистить</Button>
                    <Button type="default" htmlType="submit">Составить</Button>
                </Row>
            </Form>
        </div>

    );
};

export default CreateNatalForm;