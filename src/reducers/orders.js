//orders reducer
const orders = (state = [], action) => {
    switch (action.type) {
      //add order reducer
      case "ADD_TO_CART":
        return [
          ...state,
          //return new state
          {
            id: action.id,
            title: action.title,
            cost: action.cost
          }
        ];
    
      // case "UPDATE_TO_CART":
      //   let newDateString =
      //     (action.newDate.getDate() < 10
      //       ? "0" + action.newDate.getDate()
      //       : action.newDate.getDate()) +
      //     "-" +
      //     (action.newDate.getMonth() + 1 < 10
      //       ? "0" + (action.newDate.getMonth() + 1)
      //       : action.newDate.getMonth() + 1) +
      //     "-" +
      //     (action.newDate.getFullYear() % 100 < 10
      //       ? "0" + (action.newDate.getFullYear() % 100)
      //       : action.newDate.getFullYear() % 100);
      //   // console.log('action', action.newItem, action.newNote, action.newDate)
      //   return state.map(order =>
      //     order.id === action.id
      //       ? {
      //           ...order,
      //           item: action.newItem,
      //           date: action.newDate,
      //           formattedDate: newDateString,
      //           note: action.newNote
      //         }
      //       : order
      //   );
  
      //delete order reducer
      case "DELETE_FROM_CART":
        //return state with completed state reversed
        return state.filter(order => order.id !== action.id)
  
      default:
        return state;
    }
  };
  
  export default orders;
  