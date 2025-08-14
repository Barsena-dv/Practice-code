import styles from './Button.module.css';

function Button() {
    // const styles = {
    //     backgroundColor: "hsl(235, 94%, 75%)",
    //     color: "aliceblue",
    //     padding: "10px 20px",
    //     border: "none",
    //     borderRadius: "5px",
    //     cursor: "pointer",
    // } 
    //*For Inline Css*

    return(<button className={styles.button}>Click Me!</button>);
    // return(<button style={styles}>Click Me!</button>); *For Inline Css*
}
export default Button