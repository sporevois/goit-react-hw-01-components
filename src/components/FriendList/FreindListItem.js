import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={css[isOnline]}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
}
export default FriendListItem