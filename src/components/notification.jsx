import './notification.css';

function Notification(props){
    return(
        <>
            <div id='notification'>
                <h2>The email has been copy to clipboard!</h2>
                <p>csebas459@gmail.com</p>
                <div id='progressBar' style={{width: `${props.width}%`}}></div>
            </div>
        </>
    );
}

export default Notification;