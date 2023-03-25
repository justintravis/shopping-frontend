import { describe, expect, test } from '@jest/globals';
import { CartActions, CartItem } from '../../models/store-models';
import { cartReducer, ActionProps } from '../cartReducer';
import * as items from '../../store-items.json';

describe("cartReducer", () => {
  test("it can add an item to the cart", () => {
    const userCart: CartItem[] = [];
    const cartAction: ActionProps = {
      item: items[0],
      type: CartActions.Add
    };
    const result = cartReducer(userCart, cartAction);
    expect(result[0].quantity).toBe(1);
    expect(result[0].totalPrice).toBe(1200);
  });

  test("it can add multiple of the same item to the cart", () => {
    const userCart: CartItem[] = [];
    const cartAction: ActionProps = {
      item: items[1],
      type: CartActions.Add
    };
    const result1 = cartReducer(userCart, cartAction);
    const result2 = cartReducer(result1, cartAction);

    expect(result2[0].quantity).toBe(2);
    expect(result2[0].totalPrice).toBe(items[1].price * 2);
  });

  test("it can remove an item from the cart", () => {
    const userCart: CartItem[] = [];
    const cartAction: ActionProps = {
      item: items[1],
      type: CartActions.Add
    };
    const cartActionRemove: ActionProps = {
      item: items[1],
      type: CartActions.Remove
    };
    const result1 = cartReducer(userCart, cartAction);
    const result2 = cartReducer(result1, cartAction);
    const result3 = cartReducer(result2, cartActionRemove);

    expect(result3).toHaveLength(0);
  });
})