pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.8.0;

// Creating a Smart Contract
contract Structregistry {

  struct users {

    address Account;
    string name;
    string gender;
    string Address;
    string phone;
    string password;
  }

  struct asset {

    address Account;
    string Location;
    string District;
    string plot_no;
    string area;
    int asset_value;
  }

  mapping(string => address[]) Khatiyan;
  address[] temp;
  users[] usr;
  asset[] ast;

  //   address  put this in account input datatype    

  function add_user(address Account, string memory name, string memory gender, string memory Address, string memory phone, string memory password)
  public {
    users memory e = users(Account, name, gender, Address, phone, password);
    usr.push(e);
  }
  
  function get_array() public view returns( asset[] memory){
      return(ast);
  }
  
  
  function remove_user(address payable sellerAddress)
  payable public {
    sellerAddress.transfer(msg.value);
    uint i;
    for (i = 0; i < ast.length; i++) {
      asset memory a = ast[i];

      if (a.Account == sellerAddress) {
        delete ast[i];
      }
    }
  }


  function get_user(address Account) public view returns(string memory, string memory,
    string memory, string memory, string memory) {
    uint i;
    for (i = 0; i < usr.length; i++) {
      users memory e = usr[i];
      if (e.Account == Account) {
        return (e.name, e.gender, e.Address, e.phone, e.password);
      }
    }
    return ("Not Found", "Not Found", "Not Found", "Not Found", "Not Found");
  }

  //   ------------------------------------------------   Asset wala kaam yahan se suru hai ---------------------------------------------------------------------------------
  function add_asset(
    address Account, string memory Location, string memory District, string memory plot_no, string memory area, int value) public {
    asset memory a = asset(Account, Location, District, plot_no, area, value);
    ast.push(a);
  }

  

  function add_khatiyan(string memory plot, address Account) public {
    if (Khatiyan[plot].length == 0) {
      Khatiyan[plot] = [Account];
    } else {
      temp = Khatiyan[plot];
      temp.push(Account);
      Khatiyan[plot] = (temp);
    }
  }

  function get_khatiyan(string memory plot) public view returns(address[] memory ,uint) {
    return (Khatiyan[plot],Khatiyan[plot].length);
  }

  function get_asset(address Account) public view returns(string memory, string memory,
    string memory, string memory, int) {
    uint i;
    for (i = 0; i < ast.length; i++) {
      asset memory a = ast[i];
      if (a.Account == Account) {
        return (a.Location, a.District, a.plot_no, a.area, a.asset_value);
      }
    }
    return ("Not Found", "Not Found", "Not Found", "Not Found", 0);
  }
}