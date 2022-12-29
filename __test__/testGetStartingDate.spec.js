import { getStartingDate } from "../src/client/js/formInfoGetter";

describe('Test to check the function to get starting date', () => {
    test('Should return 2022/12/29', () => {
        document.body.innerHTML = `<input type="date" id="date_start" value="2022-12-29"/>`;
        const startDate = getStartingDate();
        expect(startDate).toEqual('2022/12/29');
    });
});
