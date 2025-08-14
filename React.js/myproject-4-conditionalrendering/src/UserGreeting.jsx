import PropTypes from 'prop-types';

function UserGreeting(props) {

    // if(props.isLoggedIn){
    //     return <h2 className="w-prompt">Welcome! {props.username}</h2>
    // }
    // else{
    //     return <h2 className="l-prompt">Please Log In To Continue</h2>
    //     }
    
    const wPrompt = <h2 className="w-prompt" >Welcome! {props.username}</h2>
    const lPrompt = <h2 className="l-prompt" >Please Log In To Continue</h2>

    return (props.isLoggedIn ? wPrompt : lPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting