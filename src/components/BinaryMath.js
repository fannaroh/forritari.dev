import React from 'react';

class Bit extends React.Component {
  render() {
    return (
      <button
        className="bit"
        onClick={() => this.props.toggleBitHandler(this.props.index)}
      >
        {this.props.value}
      </button>
    );
  }
}

class BinaryNumber extends React.Component {
  constructor(props) {
    super(props)

    const bitArraySize = this.props.power + 1;

    this.state = {
      bitArray: Array(bitArraySize).fill(0),
      targetInt: this.getRandomIntForPower(this.props.power),
      winner: "false",
      currentInt: 0
    };

    this.toggleBitHandler = this.toggleBitHandler.bind(this)
  }

  toggleBitHandler(index) {
    let bitArray = this.state.bitArray;
    bitArray[index] = this.flipBit(bitArray[index]);

    this.setState({
      bitArray: bitArray,
    })

    this.checkNumber();
  }

  flipBit(value) {
    return (value == 0 ? 1 : 0);
  }

  getRandomIntForPower(power) {
    const maxInt = Math.pow(2, power)
    return Math.floor(Math.random() * Math.floor(maxInt));
  }

  checkNumber() {
    let currentInt = 0;
    let winner = "false";

    this.state.bitArray.map((bit, index) => {
      currentInt = currentInt + (bit * Math.pow(2, index))
    })

    winner = (this.state.targetInt == currentInt ? "true" : "false")

    this.setState({
      currentInt: currentInt,
      winner: winner
    })

    //this.props.updateScoreHandler(this.props.id, this.state.winner);
  }

  render() {


    return (
      <div>
        <table>
          <thead>
            <tr>
              { this.state.bitArray.slice(0).reverse().map((bit, index) => 
                <th>{Math.pow(2,this.props.power-index)}</th>
              )}
              <th>CurrentInt</th>
              <th>TargetInt</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              { this.state.bitArray.slice(0).reverse().map((bit, index) => 
                <td><Bit key={index} value={bit} index={(this.props.power-index)} toggleBitHandler={this.toggleBitHandler}></Bit></td>
              )}
              <td>{this.state.currentInt}</td>
              <td>{this.state.targetInt}</td>
              <td>{this.state.winner}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class BinaryMath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(10).fill(Array(8).fill('0')),
    };
  }

  render() {

    return (
      <div>
        <BinaryNumber power={8} id={0}></BinaryNumber>
        <BinaryNumber power={8} id={1}></BinaryNumber>
        <BinaryNumber power={8} id={2}></BinaryNumber>
        <BinaryNumber power={8} id={3}></BinaryNumber>
        <BinaryNumber power={8} id={4}></BinaryNumber>
        <BinaryNumber power={8} id={5}></BinaryNumber>
        <BinaryNumber power={8} id={6}></BinaryNumber>
        <BinaryNumber power={8} id={7}></BinaryNumber>
        <BinaryNumber power={8} id={8}></BinaryNumber>
        <BinaryNumber power={8} id={9}></BinaryNumber>
      </div>
    );
  }
}

export default BinaryMath