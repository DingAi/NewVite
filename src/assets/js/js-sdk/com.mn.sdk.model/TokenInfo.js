/*
 * 系统接口
 * 系统接口文档
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 4.0.0
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The TokenInfo model module.
 * @module com.mn.sdk.model/TokenInfo
 * @version 1.0
 */
export class TokenInfo {
  /**
   * Constructs a new <code>TokenInfo</code>.
   * @alias module:com.mn.sdk.model/TokenInfo
   * @class
   * @param accessToken {String} 
   * @param tokenType {String} 
   * @param refreshToken {String} 
   * @param expiresIn {Number} 
   * @param scope {String} 
   */
  constructor(accessToken, tokenType, refreshToken, expiresIn, scope) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.scope = scope;
  }


    static constructFromList(list) {
        let array = [new TokenInfo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(TokenInfo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>TokenInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/TokenInfo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/TokenInfo} The populated <code>TokenInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TokenInfo();
      if (Reflect.has(data, 'access_token'))
        obj.accessToken = ApiClient.convertToType(data['access_token'], 'String');
      if (Reflect.has(data, 'token_type'))
        obj.tokenType = ApiClient.convertToType(data['token_type'], 'String');
      if (Reflect.has(data, 'refresh_token'))
        obj.refreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
      if (Reflect.has(data, 'expires_in'))
        obj.expiresIn = ApiClient.convertToType(data['expires_in'], 'Number');
      if (Reflect.has(data, 'scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} accessToken
 */
TokenInfo.prototype.accessToken = undefined;

/**
 * @member {String} tokenType
 */
TokenInfo.prototype.tokenType = undefined;

/**
 * @member {String} refreshToken
 */
TokenInfo.prototype.refreshToken = undefined;

/**
 * @member {Number} expiresIn
 */
TokenInfo.prototype.expiresIn = undefined;

/**
 * @member {String} scope
 */
TokenInfo.prototype.scope = undefined;


