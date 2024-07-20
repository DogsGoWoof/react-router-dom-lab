import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const LetterForm = ({ mailboxes, addLetter, setMailBoxes }) => {

    const initialState = {
        boxHolder: '',
        header: '',
        body: '',
    };

    let mailbox;

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addLetter(formData);
        setFormData(initialState);
        // navigate(`/mailboxes/${formData._id}`);
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
        mailbox = mailboxes.find((mail) => mail._id === Number(formData._id));
        console.log('Mailbox Object:', mailbox)
        console.log(target);
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="_id">Box Address:</label>
                <select
                    id="_id"
                    name="_id"
                    value={formData._id}
                    onChange={handleChange}
                >
                    {
                        mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>{mailbox._id}</option>
                        ))
                    }
                </select>
                <label htmlFor="boxHolder">Box Holder:</label>
                <input
                    type="text"
                    id="boxHolder"
                    name="boxHolder"
                    value={mailbox ? mailbox.boxHolder : formData.boxHolder}
                    onChange={handleChange}
                />
                <label htmlFor="header">Subject:</label>
                <input
                    type="text"
                    id="header"
                    name="header"
                    value={formData.header}
                    onChange={handleChange}
                />
                <label htmlFor="body">Letter:</label>
                <textarea
                    name="body"
                    id="body"
                    value={`Dear ${formData.boxHolder},`}
                    onChange={handleChange}
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default LetterForm;
