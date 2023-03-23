import { renderHook } from "@testing-library/react";
import { cartReducer } from '../reducers';

describe("useCart", () => {
  it("should render an empty cart", () => {
    const component = renderHook(() => useCart());
    const { userCart } = component.current;

    console.log(userCart);
  });
});