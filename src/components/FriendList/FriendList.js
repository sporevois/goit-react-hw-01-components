import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map(friend => {
                const { id, avatar, name, isOnline } = friend;
                return (
                    <li key={id} class="item">
                        <span class="status"></span>
                        <img class="avatar" src={avatar} alt={name} width="48" />
                        <p class="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }),
    ),
};

export default FriendList

    
