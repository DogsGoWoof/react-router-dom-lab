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
        setFormData(initialState);
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
        mailbox = mailboxes.find((mail) => mail._id === Number(formData.mailboxId));
        console.log('Mailbox Object:', mailbox)
        console.log(target);
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Box Address:</label>
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                    required={true}
                >
                    <option key="unaddressed" value="" selected disabled>Please choose a mailbox address</option>
                    {
                        mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>{mailbox._id}</option>
                        ))
                    }
                </select>
                <label htmlFor="recipient">Box Holder:</label>
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
