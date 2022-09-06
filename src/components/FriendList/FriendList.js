import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                const { id, avatar, name} = friend;
                return (
                    <li key={id} className="item">
                        <span className="status"></span>
                        <img className="avatar" src={avatar} alt={name} width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }),
    ),
};

export default FriendList

    
