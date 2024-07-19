import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    console.log('mailboxId:', mailboxId);
    const mailbox = props.mailboxes.find((mail) => mail._id === Number(mailboxId));
    console.log('Mailbox Object:', mailbox)

    return (
        <>
            <h2>{mailbox.name}</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{mailbox.boxSize}</dd>
                <dt>Box Holder:</dt>
                <dd>{mailbox.boxholder}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;
