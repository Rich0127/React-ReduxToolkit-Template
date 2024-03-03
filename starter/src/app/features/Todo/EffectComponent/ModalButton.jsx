import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { changeTodoTitle } from '../todoSlice';

const ModalButton = ({titleId}) => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [changeValue, setChangeValue] = useState("")
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Insert you change datas');
    // console.log("value: ", changeValue)

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (e) => {
        e.preventDefault();
        setModalText('The datas will updating few seconds');
        setConfirmLoading(true);
        if(changeValue) {
			dispatch(
				changeTodoTitle({
					changeValue: changeValue,
                    id: titleId,
				})
			)
		}
        setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        }, 1000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Update
        </Button>
        <Modal
            title="Title"
            open={open}
            onOk={(e) => handleOk(e)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p>{modalText}</p>
            <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder={'Item title'}
				value={changeValue}
				onChange={(event) => setChangeValue(event.target.value)}
			></input>
        </Modal>
        </>
    );
};

export default ModalButton;