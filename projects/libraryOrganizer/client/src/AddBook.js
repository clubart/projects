import React, { useEffect, useReducer, useState } from 'react';
import Modal from 'react-modal';
import AddBookInput from './AddBookInput';

const initialState = {
    name: "",
    category: "",
    shelf: ""
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

export default function AddBook(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const { name, category, shelf } = state;

    useEffect(() => {
        setIsOpen(true);
        Modal.setAppElement('body');
    }, []);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        //props.leaveAdminMode();
        props.leaveAddBook();
    }

    const addBook = async (e) => {
        e.preventDefault();

        try {
            const resp = await fetch(`http://localhost/libraries/${props.library}/books`, {
                method: 'POST',
                //credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    category: category,
                    shelf: shelf
                })
            });
            props.leaveAddBook();
            if (!resp.ok) {
                return console.error(resp.statusText);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const [moreBooks, setMoreBooks] = useState(['book Input']);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const newBooks = moreBooks.map(() => <AddBookInput onChange={onChange} />);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={() => setMoreBooks([...moreBooks, 'book input'])}>+</button>
                <form>
                    {newBooks}
                    <button onClick={addBook}>Add Book</button>
                </form>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}