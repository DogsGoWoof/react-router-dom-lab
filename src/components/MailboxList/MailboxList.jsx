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
                                <p>{currentMailbox._id}</p>
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
