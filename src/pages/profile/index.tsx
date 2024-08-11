import styles from "./index.module.css"
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Button, DatePicker, Input, Popconfirm, TimePicker} from "antd";
import {useUserInfoStore} from "../../app/store/store.ts"
import CloseBtn from "../../features/closeBtn/CloseBtn.tsx";
import {QuestionCircleOutlined} from "@ant-design/icons"
import {useState} from "react";
import dayjs from "dayjs";

const Profile = () => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {username, city, date, time, deleteUserInfo, setAllUserInfo} = useUserInfoStore()
    const pUsername = username || "{username}"
    const pCity = city || "{city}"
    const pDate = date || "{date}"
    const pTime = time || "{time}"

    const [inpUsername, setInpUsername] = useState('')
    const [inpCity, setInpCity] = useState('')
    const [inpDate, setInpDate] = useState('')
    const [inpTime, setInpTime] = useState('')


    const save = () => {
        setAllUserInfo(inpUsername, inpCity, inpDate, inpTime)
        setEditMode(false)
    }

    return (
        <div className={styles["profile__box"]}>
            <CloseBtn/>
            <div className={styles["main__info"]}>
                <Avatar size={200} icon={<UserOutlined/>}/>
                {editMode ? <Input onChange={(e) => setInpUsername(e.target.value)} allowClear defaultValue={username} placeholder="Елизавета" className={styles["input"]}/> : <h2>{pUsername}</h2>}
            </div>
            <div className={styles["text__block"]}>
                <div>
                    <p className={styles["text"]}>Город</p>
                    <p className={styles["text"]}>Дата Рождения</p>
                    <p className={styles["text"]}>Время Рождения</p>
                </div>
                {editMode
                    ?
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Input onChange={(e) => setInpCity(e.target.value)} allowClear defaultValue={city} placeholder="Санкт-Петербург" className={styles["input"]}/>
                        <DatePicker
                            onChange={(_, dateString) => setInpDate(dateString as string)}
                        defaultValue={date !== "" ? dayjs(date, "DD.MM.YYYY") : null}
                        className={styles["input"]}
                        format="DD.MM.YYYY"
                    />
                        <TimePicker
                            onChange={(_, timeString) => setInpTime(timeString as string)}
                            defaultValue={time !== "" ? dayjs(time, 'HH:mm') : null}
                            className={styles["input"]}
                            format={'HH:mm'}
                            needConfirm={false}
                        />
                    </div>
                    :
                    <div>
                        <p className={styles["text"]}>{pCity}</p>
                        <p className={styles["text"]}>{pDate}</p>
                        <p className={styles["text"]}>{pTime}</p>
                    </div>
                }
            </div>

            {editMode
                ?
                <div className={styles["buttons__block"]}>
                    <Button onClick={() => setEditMode(false)} size={"large"} type={"dashed"}>Отмена</Button>
                    <Button onClick={save } size={"large"}>Сохранить</Button>
                </div>
                :
                <div className={styles["buttons__block"]}>
                    <Popconfirm
                        title="Удалить данные пользователя?"
                        icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                        cancelText="Отмена"
                        okText="Ок"
                        okType="dashed"
                        onConfirm={deleteUserInfo}
                    >
                        <Button size={"large"} danger type={"dashed"}>Удалить</Button>
                    </Popconfirm>
                    <Button size={"large"} onClick={() => setEditMode(true)}>Редактировать</Button>
                </div>}
        </div>
    )
        ;
};

export default Profile;