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

import {ApiClient} from "../ApiClient";
import {Result} from '../com.mn.sdk.model/Result';
import {ResultTokenInfo} from '../com.mn.sdk.model/ResultTokenInfo';

/**
* System service.
* @module com.mn.sdk.api/SystemApi
* @version 1.0
*/
export class SystemApi {

    /**
    * Constructs a new SystemApi. 
    * @alias module:com.mn.sdk.api/SystemApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 用户登录
     * @param {String} username username
     * @param {String} password password
     * @param {String} grantType grant_type
     * @param {String} clientId client_id
     * @param {String} clientSecret client_secret
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultTokenInfo} and HTTP response
     */
    loginWithHttpInfo(username, password, grantType, clientId, clientSecret) {
      let postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling login");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling login");
      }

      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling login");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling login");
      }

      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling login");
      }


      let pathParams = {
      };
      let queryParams = {
        'username': username,
        'password': password,
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['*/*'];
      let returnType = ResultTokenInfo;

      return this.apiClient.callApi(
        '/api-uaa/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 用户登录
     * @param {String} username username
     * @param {String} password password
     * @param {String} grantType grant_type
     * @param {String} clientId client_id
     * @param {String} clientSecret client_secret
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultTokenInfo}
     */
    login(username, password, grantType, clientId, clientSecret) {
      return this.loginWithHttpInfo(username, password, grantType, clientId, clientSecret)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 退出登录
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    logoutWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['*/*'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api-uaa/oauth/remove/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 退出登录
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    logout() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 发送手机注册验证码
     * @param {String} phone 手机号
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/Result} and HTTP response
     */
    sendPhoneRegisterCodeWithHttpInfo(phone) {
        let postBody = {};
        postBody["phone"] = phone;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling sendPhoneRegisterCode");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Result;

      return this.apiClient.callApi(
        '/api-uaa/validate/sendPhoneRegisterCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 发送手机注册验证码
     * @param {String} phone 手机号
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/Result}
     */
    sendPhoneRegisterCode(phone) {
      return this.sendPhoneRegisterCodeWithHttpInfo(phone)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 发送手机验证码
     * @param {String} phone 手机号(不指定时使用当前登录用户的手机号)
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/Result} and HTTP response
     */
    sendPhoneVerificationCodeWithHttpInfo(phone) {
        let postBody = {};
        postBody["phone"] = phone;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling sendPhoneVerificationCode");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Result;

      return this.apiClient.callApi(
        '/api-uaa/validate/sendPhoneVerificationCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 发送手机验证码
     * @param {String} phone 手机号(不指定时使用当前登录用户的手机号)
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/Result}
     */
    sendPhoneVerificationCode(phone) {
      return this.sendPhoneVerificationCodeWithHttpInfo(phone)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
