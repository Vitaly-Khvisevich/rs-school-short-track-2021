/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /@((\w+-+)|(\w+\.))*\w{1,63}.[a-zA-Z]{2,6}/i;
  let res = email.match(regex)[0];
  res = res.split('@');
  return (res[1]);
}

module.exports = getEmailDomain;
