import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const LetterForm = ({ mailboxes, addLetter }) => {

    const initialState = {
        mailboxId: 0,
        recipient: '',
        subject: '',
        message: ``,
    };

    let mailbox;
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addLetter(formData);
        formData.mailboxId !== 0 ? setFormData(initialState) : null;
        formData.mailboxId !== 0 ? navigate(`/mailboxes/${formData.mailboxId}`) : null;
        // ternaries to prevent form submission if mailboxId isn't valid-ish
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
        mailbox = mailboxes.find((mail) => mail._id === Number(formData.mailboxId));
    };

    return (
        <main>
            <h2>New Letter</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Box Address:</label>
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                    required={true}
                >
                    <option key="unaddressed" value={0}  disabled>Please choose a mailbox address</option>
                    {
                        mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>{mailbox._id}</option>
                        ))
                    }
                </select>
                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                />
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <label htmlFor="message">Letter:</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default LetterForm;
