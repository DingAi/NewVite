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
import {ResultListMenu} from '../com.mn.sdk.model/ResultListMenu';

/**
* Menu service.
* @module com.mn.sdk.api/MenuApi
* @version 1.0
*/
export class MenuApi {

    /**
    * Constructs a new MenuApi. 
    * @alias module:com.mn.sdk.api/MenuApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * getMenuListByResourceValue
     * @param {String} resourceValue resourceValue
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListMenu} and HTTP response
     */
    getMenuListByResourceValueWithHttpInfo(resourceValue) {
        let postBody = {};
        postBody["resourceValue"] = resourceValue;

      // verify the required parameter 'resourceValue' is set
      if (resourceValue === undefined || resourceValue === null) {
        throw new Error("Missing the required parameter 'resourceValue' when calling getMenuListByResourceValue");
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
      let returnType = ResultListMenu;

      return this.apiClient.callApi(
        '/api-organization/menu/getMenuListByResourceValue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getMenuListByResourceValue
     * @param {String} resourceValue resourceValue
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListMenu}
     */
    getMenuListByResourceValue(resourceValue) {
      return this.getMenuListByResourceValueWithHttpInfo(resourceValue)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
