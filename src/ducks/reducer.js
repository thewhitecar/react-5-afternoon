const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'; 
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'

function reducer(state = initialState, action){
  console.log('REDUCER HIT: Action ->', action );
    switch (action.type){
    case UPDATE_LOAN_TYPE:
        return {...state, loanType: action.payload};
    case UPDATE_PROPERTY_TYPE:
        return {...state, propertyType: action.payload};
    case UPDATE_CITY:
        return {...state, city: action.payload}
    case UPDATE_PROP:
        return {...state, propToBeUsedOn: action.payload}
    default: return state;
}
}

export function updateLoanType( loanType ){
    return {
      type: UPDATE_LOAN_TYPE,
      payload: loanType
    }
  }
  
  export function updatePropertyType( property ) {
    return {
      type: UPDATE_PROPERTY_TYPE,
      payload: property
    }
  }

  export function updateCity( city ) {
    return {
      type: UPDATE_CITY,
      payload: city
    }
  }
  
export function updateProp (prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

  export default reducer; 