import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const selectedLetters = props.letters.filter(
        (letter) => Number(letter.mailboxId) === Number(mailboxId)
    );
    const mailbox = props.mailboxes.find((mail) => mail._id === Number(mailboxId));
    return (
        <>
            {
                mailbox ?
                    <>
                        <h2>Mailbox [{mailbox._id}]</h2>
                        <dl>
                            <dt>Box Number:</dt>
                            <dd>{mailbox._id}</dd>
                            <dt>Box Holder:</dt>
                            <dd>{mailbox.boxholder}</dd>
                            <dt>Box Size:</dt>
                            <dd>{mailbox.boxSize}</dd>
                            <dt>Letters:</dt>
                            <div>
                            {
                                selectedLetters.length ?
                                    selectedLetters.map((letter, index) => (
                                        <div key={index} className='mailedLetter'>
                                            <dd>To: {letter.recipient}</dd>
                                            <dd>Subject: {letter.subject}</dd>
                                            <hr />
                                            <dd>{letter.message}</dd>
                                        </div>
                                    ))
                                    : <h3>No Letters</h3>
                            }
                            </div>
                        </dl>
                    </>
                    : <h1>Mailbox Not Found!</h1>
            }
        </>
    );
};

export default MailboxDetails;
