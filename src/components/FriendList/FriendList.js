import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                const { id, avatar, name, isOnline} = friend;
                return (
                    <li key={id} className={css.item}>
                        <span className={css[isOnline]}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
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

    
