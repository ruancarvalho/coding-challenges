/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 * 
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let tmp = address.split('.');
  let defanged = '';

  for (let i = 0; i < 4; i++) {
    defanged += tmp[i] + '[.]'
  }

  return defanged.substr(0, defanged.length - 3);
};

test('Example 1', () => {
  expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
});

test('Example 2', () => {
  expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
});