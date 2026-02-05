export const initialStore = () => {
  return {
    shoes: [], // Data from GET /shoes
    token: null, // The JWT access_token from /login
    currentUser: {}, // User info (email, id)
    profile: {}, // Data from your Profile model
    cart: [], // Items added via /cart
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "signup_success":
      return {
        ...store,
        signup: true,
      };
    case "signup_failed":
      return {
        ...store,
        signup: false,
      };
    case "logout":
      return {
        ...store,
        token: null,
        user: null,
      };

    case "login_success":
      return {
        ...store,
        token: action.payload.token,
      };

    case "update_user":
      return {
        ...store,
        user: action.payload,
      };

    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    // Recibe la lista de zapatos desde la API y actualiza el store
    case "load_shoes":
      return {
        ...store,
        shoes: action.payload, // 'action.payload' será el array de zapatos desde el backend
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
