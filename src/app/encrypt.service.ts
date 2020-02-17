import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  encKey = 19981223;

  constructor() { }

  encryptUsingAES256(request) {
    const key = CryptoJS.enc.Utf8.parse(this.encKey);
    const iv2 = CryptoJS.enc.Utf8.parse(this.encKey);
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(request), key, {
        keySize: 16,
        iv: iv2,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }
  decryptUsingAES256(encrypted) {
    const key = CryptoJS.enc.Utf8.parse(this.encKey);
    const iv2 = CryptoJS.enc.Utf8.parse(this.encKey);

    const decrypted = CryptoJS.AES.decrypt(
      encrypted, key, {
        keySize: 16,
        iv: iv2,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);

    return decrypted;
  }
}

