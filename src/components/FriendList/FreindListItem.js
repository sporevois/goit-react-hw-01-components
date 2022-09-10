import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

const FriendListItem = ({ id, avatar, name, isOnline}) => {
    return (
        <li key={id} className={css.item}>
            <span className={css[isOnline]}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
}
export default FriendListItem