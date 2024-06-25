const API_URL = "https://react-fast-pizza-api.onrender.com/api";
export interface Pizza {
  id?: number;
  name?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  ingredients?: string[];
  soldOut?: boolean;
  imageUrl?: string;
}

export interface OrderType {
  id?: string;
  status?: string;
  customer?: string;
  phone?: string;
  address?: string;
  priority?: boolean;
  estimatedDelivery?: string; // Using string to match ISO date format
  cart?: Cart;
  position?: string; // Assuming position is a string containing coordinates
  orderPrice?: number;
  priorityPrice?: number;
}

export interface CartPizza {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type Cart = CartPizza[];

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id: number) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: OrderType) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: number, updateObj: OrderType) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
