//actions creators

//initial todo id
let nextToCartItem = 0;

//addTodo action
export const addToCart = (title, cost) => ({
  type: "ADD_TO_CART",
  //id = nextToCartItem then +1
  id: nextToCartItem++,
  title,
  cost
});

// export const updateTodo = (id, newItem, newDate, newNote) => ({
//   type: "UPDATE_TODO",
//   //id = nextToCartItem then +1
//   id,
//   newItem,
//   newDate,
//   newNote
// });

//deleteTodo action
export const deleteFromCart = id => ({
  type: "DELETE_FROM_CART",
  id
});
