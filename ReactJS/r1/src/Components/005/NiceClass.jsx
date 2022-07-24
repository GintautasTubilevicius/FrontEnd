import { Component } from 'react';


class NiceClass extends Component {

    constructor() {
        super();
        this.state = { dydis: 30, fonas: 'skyblue', count: 1, kv: [] };
    }

    greenButtonClicked = () => {
        this.setState({ dydis: 60 });
    }

    redButtonClicked() {
        this.setState(this.state.fonas === 'red' ? { fonas: 'skyblue' } : { fonas: 'red' });
    }
    blueButtonClicked = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState(s => ({ count: s.count + 1 }));
    }
    kvadratas = () => {
        this.setState(s => ({kv: [...s.kv, '']}))
            
        }
    


    render() {
        return (
            <>
                <h3 style={{
                    color: this.props.spalva,
                    backgroundColor: this.state.fonas,
                    fontSize: this.state.dydis + 'px'
                }}>Hello zmones!</h3>
                <h2>{this.state.count}</h2>
                <button className='blue' onClick={() => this.blueButtonClicked()}>Kart</button>
                <button className='red' onClick={() => this.redButtonClicked()}>Spalva</button>
                <button className='green' onClick={this.greenButtonClicked}>Dydis</button>
                <button className='green' onClick={this.kvadratas}>+1 Kvadratas</button>
                <div className="container">

                    {
                        this.state.kv.map((_, i) => <div className='squre' key={i}> </div>)
                    }
                </div>
            </>
        );
    }
}

export default NiceClass;