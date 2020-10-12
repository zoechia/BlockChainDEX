import React from "react";
import {
  // updateDeposit,
  // newDeposit,
  BankContractAddress,
  Testnet,
  addLiquidity,
} from "./bank.js";

// example from doc: https://reactjs.org/docs/forms.html#controlled-components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ETHinput: 0,
      ERC20input: 0,
      queryInput: "",
      depositInput: 0,
      address: "0x0",
      deposit: 0,
    };
    this.handleLiquidityChangeETH = this.handleLiquidityChangeETH.bind(this);
    this.handleLiquidityChangeERC20 = this.handleLiquidityChangeERC20.bind(this);
    this.handleLiquidity = this.handleLiquidity.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleNewDeposit = this.handleNewDeposit.bind(this);
  }
  handleLiquidityChangeETH = (e) => {
    this.setState({ ETHinput: e.target.value });
  };
  handleLiquidityChangeERC20 = (e) => {
    console.log("hi")
    this.setState({ ERC20input: e.target.value });
  };
  handleLiquidity = async () => {
    let result = await addLiquidity(this.state.ETHinput,this.state.ERC20input);
    this.setState({address: result.Result,});
  };
  handleQueryChange = (e) => {
    this.setState({ queryInput: e.target.value });
  };
  handleQuery = async () => {
    let result = await updateDeposit(this.state.queryInput);
    this.setState({
      address: result.address,
      deposit: result.deposit,
    });
  };
  handleDepositChange = (e) => {
    this.setState({ depositInput: e.target.value });
  };
  handleNewDeposit = async () => {
    await newDeposit(this.state.depositInput);
  };

  render() {
    return (
      <>
        <h1>Welcome to Bank dApp</h1>
        <p>Bank Contract Address: {BankContractAddress}</p>
        <p>Network: {Testnet}</p>
        <hr />
        <input
          type="text"
          placeholder="Enter ETH to add to pool"
          value={this.state.value}
          onChange={this.handleLiquidityChangeETH}
        />{" "}
        <input
          type="text"
          placeholder="Enter ERC20 to add to pool"
          value={this.state.value}
          onChange={this.handleLiquidityChangeERC20}
        />{" "}
        <input type="submit" value="Amount Added" onClick={this.handleLiquidity} />
        <p>
          Query Result: {this.state.address}
        </p>
      </>
    );
  }
}

export default App;
