import PropTypes from 'prop-types';
import FriendListItem from './FreindListItem';
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline}) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
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

    
