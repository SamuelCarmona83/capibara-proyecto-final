export const initialStore = () => {
  return {
    message: null,
    products: [],
    cart: [],
    user: null,
    token: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "login_success":
      return {
        ...store,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    // Recibe la lista de zapatos desde la API y actualiza el store
    case "load_products":
      return {
        ...store,
        products: action.payload, // 'action.payload' será el array de zapatos desde el backend
      };

    // Agrega un zapato específico al carrito
    case "add_to_cart":
      return {
        ...store,
        // Copia del carrito actual y se le agrega el nuevo producto
        cart: [...store.cart, action.payload],
      };

    // Para quitar cosas del carrito (busca por ID)
    case "remove_from_cart":
      return {
        ...store,
        cart: store.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      throw Error("Unknown action.");
  }
}
