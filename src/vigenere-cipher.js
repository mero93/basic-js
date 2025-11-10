const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  _transform(message, key, isEncrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const messageCharIndex = this.alphabet.indexOf(messageChar);

      if (messageCharIndex === -1) {
        result += messageChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyCharIndex = this.alphabet.indexOf(keyChar);

      let transformedCharIndex;
      if (isEncrypt) {
        transformedCharIndex = (messageCharIndex + keyCharIndex) % 26;
      } else {
        transformedCharIndex = (messageCharIndex - keyCharIndex + 26) % 26;
      }

      result += this.alphabet[transformedCharIndex];
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._transform(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._transform(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
