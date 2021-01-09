import fileService from '@/services/fileService';
import store from '..';

describe('bill', () => {
  test('should add bills to store and write to file', () => {
    fileService.writeJsonToFile = jest.fn();
    const testBill = {
      billNumber: 12345,
      costumer: {
        name: 'testname',
        postcode: 1234,
      },
    };
    const testBill2 = {
      billNumber: 12345,
      costumer: {
        name: 'testname',
        postcode: 1234,
      },
    };
    const expectedStore = [testBill, testBill2];

    store.commit('ADD_AND_SAVE_BILL', testBill);
    store.commit('ADD_AND_SAVE_BILL', testBill2);

    expect(store.state.bill.bills).toEqual(expectedStore);
    expect(fileService.writeJsonToFile).toBeCalled();
  });

  test('should override store', () => {
    fileService.writeJsonToFile = jest.fn();
    const testBill = {
      billNumber: 12345,
      costumer: {
        name: 'testname',
        postcode: 1234,
      },
    };
    const testBill2 = {
      billNumber: 12345,
      costumer: {
        name: 'testname',
        postcode: 1234,
      },
    };
    const override = [
      {
        billNumber: 888,
      },
    ];

    store.commit('ADD_AND_SAVE_BILL', testBill);
    store.commit('ADD_AND_SAVE_BILL', testBill2);
    store.commit('OVERRIDE_BILL_STORE', override);

    expect(store.state.bill.bills).toEqual(override);
  });
  test('should get state', () => {
    const override = [];
    store.commit('OVERRIDE_BILL_STORE', override);
    const bill = 2;
    store.commit('ADD_AND_SAVE_BILL', bill);

    const state = store.getters.getBills;

    expect(state).toEqual([2]);
  });
});
