import React from 'react';
export default class AddAddressComponent extends React.Component {
  render() {
    let {stateList,cityList} = this.props;
    //console.log(this.props);
    if(cityList === undefined || stateList === undefined){
      console.log('undefined props')
    } else {
      console.log({stateList},{cityList});

    }

    return (
      <div>rendered : Yay, These are props : {stateList} and {cityList[0]}</div>
    )
  }
}

AddAddressComponent.defaultProps = {
  cityList: ["Lucknow","Chennai"],
  stateList: "Uttar Pradesh",
};

AddAddressComponent.propTypes = {
  userInfo: React.PropTypes.object,
  cityList: React.PropTypes.array.isRequired,
  stateList: React.PropTypes.string.isRequired,
}



