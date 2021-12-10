// import { filterTemperament, filterCreated, orderDogs, orderWeight } from "./redux/actions/index.js";
import { obtainDogs, createDog, obtainTemperament, getByQueryName,
         getDogDetails, filterByTemps, filterByBreeds, orderBy_Weight, orderBy_AZ } from "./redux/actions/index.js";

describe("Reducer-Actions Tests:", () => {

  it('It should return an action with props type "FILTER_TEMPERAMENT" & payload, the value is send as an argument:', () => {
    expect(filterByTemps("Gay")).toEqual({
      type: "FILTER_TEMPS",
      payload: "Gay",
    });
  });

  it('It should return an action with the props type "filterByBreeds" & payload, the value is send as an argument:', () => {
    expect(filterByBreeds("eedeb11b-563b-4709-8a56-6778e26dfa7f")).toEqual({
      type: "FILTER_BREED",
      payload: "eedeb11b-563b-4709-8a56-6778e26dfa7f",
    });
  });

  it('It should return an action with the props type "orderBy_AZ" & payload, the value is send as an argument:', () => {
    expect(orderBy_AZ("Terrier")).toEqual({
      type: "ORDER_AZ",
      payload: "Terrier",
    });
  }); 

  it('It should return an action with the props type "orderBy_Weight" & payload, the value is send as an argument:', () => {
    expect(orderBy_Weight("asc")).toEqual({
      type: "ORDER_WEIGHT",
      payload: "asc",
    });
  });

});