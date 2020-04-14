import { bindActionCreators } from "redux";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
      console.log(state, action);
      switch(action.type) {
          case "ADD_FEATURE":
            //   state.car.features.push(action.payload)
            //   for(let i = 0; i < state.additionalFeatures.length; i++){
            //       if(action.payload.id === state.additionalFeatures[i].id){
            //           state.additionalFeatures.splice(i, 1)
            //       }
            //   }
            //   console.log("Current State: ", state);
            const newAddPriceAdd = state.additionalPrice + action.payload.price;
            const newFeatAdd = state.car.features;
            newFeatAdd.push(action.payload)
            const newAddFeatAdd = state.additionalFeatures;
            for(let i = 0; i < newAddFeatAdd.length; i++){
                if(action.payload.id === newAddFeatAdd[i].id){
                    newAddFeatAdd.splice(i, 1);
                }
            }
            return {
                ...state,
                additionalPrice: newAddPriceAdd,
                ...state.car,
                features: newFeatAdd,
                additionalFeatures: newAddFeatAdd
            }

            case "REMOVE_FEATURE":
                const newAddPriceDel = state.additionalPrice - action.payload.price;
                const newFeatDel = state.car.features;
                for(let i = 0; i < newFeatDel.length; i++){
                    if(action.payload.id === newFeatDel[i].id){
                        newFeatDel.splice(i, 1);
                    }
                }
                const newAddFeatDel = state.additionalFeatures;
                newAddFeatDel.push(action.payload)
                return {
                    ...state,
                    additionalPrice: newAddPriceDel,
                    ...state.car,
                    features: newFeatDel,
                    additionalFeatures: newAddFeatDel
                }


        default:
            return state;
      }
  }