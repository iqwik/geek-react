import React from 'react';
import Message from './Message';

const messageChoices = [
    'Йося, вы можете дать мне денег?',
    'Вот говорят: а ты возьми и не пей',
    'Меня чистым небом, солнцем и +20 не проведешь. Я в куртке',
    'Шампанское и дамы – это вам не самогон и бабы!',
    'Здрасьте я ваша тётя'];

const messageRobot = 'Привет я Робот, иди нафиг!';

export default class App extends React.Component {
    state = {
        messages: []
    };

    componentDidUpdate(){
        if(this.state.messages.indexOf(messageRobot) !== -1) {
            setTimeout(() => {
                this.setState({
                    message: this.state.messages.splice(this.state.messages.indexOf(messageRobot), 1)
                });
            }, 1000);
        }
    }

    handleSendMessage = () => {
        this.setState({ messages: [ ...this.state.messages,
            messageChoices[Math.floor(Math.random()*messageChoices.length)], messageRobot] })
    };

    render(){
        const messageElements = this.state.messages.map((item, index ) => <Message key={ index+Date.now() } text={ item } />);
        return (
            <div>
                <h1>React - Он такой!</h1>
                <h3>...сякой и непростой...</h3>
                <button onClick={ this.handleSendMessage }>Жмякай!</button>
                <div className="message_container">{ messageElements }</div>
            </div>
        )
    }
}