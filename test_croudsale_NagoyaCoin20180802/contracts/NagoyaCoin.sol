pragma solidity ^0.4.24;
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract NagoyaCoin is MintableToken {
  string public name = "NagoyaCoin";
  string public symbol = "NGO";
  uint8 public decimals = 18;
}
