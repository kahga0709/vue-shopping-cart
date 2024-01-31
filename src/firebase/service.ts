import { Product } from "../data/items";
import { db } from "./firebase";
import { useAuthStore } from "../store/pinia/auth";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => doc.data() as Product);
    return productList;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const fetchProductById = async (
  id: string
): Promise<Product | undefined> => {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return productSnap.data() as Product;
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchCart = async (): Promise<Product[] | undefined> => {
  try {
    const userId = useAuthStore().uid;
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      return userDocSnap.data().cart as Product[];
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToCartForUser = async (product: Product) => {
  try {
    const cart = await fetchCart();
    if (!cart) return;

    let existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.qty += product.qty;
    } else {
      cart.push({ ...product });
    }

    const userId = useAuthStore().uid;
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, { cart: cart });
  } catch (error) {
    console.error(error);
  }
};

export const removeCartItem = async (id: string) => {
  try {
    let cart = await fetchCart();
    if (!cart) return;

    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) cart.splice(index, 1);

    const userId = useAuthStore().uid;
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, { cart });
  } catch (error) {
    console.error(error);
  }
};

export const updateQty = async (id: string, type: "inc" | "dec") => {
  try {
    const cart = await fetchCart();
    if (!cart) return;

    const itemToUpdate = cart.find((item) => item.id === id);
    if (itemToUpdate?.qty) {
      if (type === "inc") {
        itemToUpdate.qty++;
      } else if (type === "dec") {
        itemToUpdate.qty--;
      }
    }

    const userId = useAuthStore().uid;
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, { cart });
  } catch (error) {
    console.error(error);
  }
};
