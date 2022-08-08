import {component} from 'react'

import './index.css'  

class Welcome extends Component {
    state = {isSubscribed : false}

    onClickSubscribeButton = () => {
        this.setState(prevState => ({isSubscribed : !prevState.isSubscribed })) 
    }

    getButtonText = () => {
        const {isSubscribed} = this.state 

        return isSubscribed ? 'subscribed' : 'subscribe'
    }


    render() {
        const {buttonText} = this.state
        return {
            <div className = "welcome-container">
                <h1 className = "welcome-heading">Welcome</h1>
                <p className = "paragraph">Thank you! Happy Learning</p>
                <button type = "button" className = "subscribe-button" onClick = {this.onClickSubscribeButton}></button>
            </div>
        }
    }
}

export default Welcome
