import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {
                    props.mailboxes.map((currentMailbox) => (
                        <li key={currentMailbox.boxholder}>
                            <Link to={`/mailboxes/${currentMailbox._id}`} className='mailboxNumber'>
                                {currentMailbox._id}
                                <div className='keyhole'></div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default MailboxList;
