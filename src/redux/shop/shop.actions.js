import ShopActionsType from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionsType.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
