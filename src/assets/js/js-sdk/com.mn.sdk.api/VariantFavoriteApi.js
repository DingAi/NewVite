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
import {DeleteVariantFavoriteGroupForm} from '../com.mn.sdk.model/DeleteVariantFavoriteGroupForm';
import {QueryVariantGroupParam} from '../com.mn.sdk.model/QueryVariantGroupParam';
import {ResultListVariantFavoriteVo} from '../com.mn.sdk.model/ResultListVariantFavoriteVo';
import {ResultObject} from '../com.mn.sdk.model/ResultObject';
import {SaveVariantFavoriteForm} from '../com.mn.sdk.model/SaveVariantFavoriteForm';

/**
* VariantFavorite service.
* @module com.mn.sdk.api/VariantFavoriteApi
* @version 1.0
*/
export class VariantFavoriteApi {

    /**
    * Constructs a new VariantFavoriteApi. 
    * @alias module:com.mn.sdk.api/VariantFavoriteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 新增变量收藏分组
     * @param {module:com.mn.sdk.model/SaveVariantFavoriteForm} saveVariantFavoriteForm saveVariantFavoriteForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    addVariantFavoriteWithHttpInfo(saveVariantFavoriteForm) {
      let postBody = saveVariantFavoriteForm;

      // verify the required parameter 'saveVariantFavoriteForm' is set
      if (saveVariantFavoriteForm === undefined || saveVariantFavoriteForm === null) {
        throw new Error("Missing the required parameter 'saveVariantFavoriteForm' when calling addVariantFavorite");
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
      let returnType = ResultObject;

      return this.apiClient.callApi(
        '/api-business/variantFavorite/addVariantFavorite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 新增变量收藏分组
     * @param {module:com.mn.sdk.model/SaveVariantFavoriteForm} saveVariantFavoriteForm saveVariantFavoriteForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    addVariantFavorite(saveVariantFavoriteForm) {
      return this.addVariantFavoriteWithHttpInfo(saveVariantFavoriteForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 删除变量收藏组
     * @param {module:com.mn.sdk.model/DeleteVariantFavoriteGroupForm} deleteVariantFavoriteGroupForm deleteVariantFavoriteGroupForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    deleteVariantGroupWithHttpInfo(deleteVariantFavoriteGroupForm) {
      let postBody = deleteVariantFavoriteGroupForm;

      // verify the required parameter 'deleteVariantFavoriteGroupForm' is set
      if (deleteVariantFavoriteGroupForm === undefined || deleteVariantFavoriteGroupForm === null) {
        throw new Error("Missing the required parameter 'deleteVariantFavoriteGroupForm' when calling deleteVariantGroup");
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
      let returnType = ResultObject;

      return this.apiClient.callApi(
        '/api-business/variantFavorite/deleteVariantFavorite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 删除变量收藏组
     * @param {module:com.mn.sdk.model/DeleteVariantFavoriteGroupForm} deleteVariantFavoriteGroupForm deleteVariantFavoriteGroupForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    deleteVariantGroup(deleteVariantFavoriteGroupForm) {
      return this.deleteVariantGroupWithHttpInfo(deleteVariantFavoriteGroupForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量收藏组列表
     * @param {module:com.mn.sdk.model/QueryVariantGroupParam} queryVariantGroupParam queryVariantGroupParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListVariantFavoriteVo} and HTTP response
     */
    getVariantFavoriteListWithHttpInfo(queryVariantGroupParam) {
      let postBody = queryVariantGroupParam;

      // verify the required parameter 'queryVariantGroupParam' is set
      if (queryVariantGroupParam === undefined || queryVariantGroupParam === null) {
        throw new Error("Missing the required parameter 'queryVariantGroupParam' when calling getVariantFavoriteList");
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
      let returnType = ResultListVariantFavoriteVo;

      return this.apiClient.callApi(
        '/api-business/variantFavorite/getVariantFavoriteList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量收藏组列表
     * @param {module:com.mn.sdk.model/QueryVariantGroupParam} queryVariantGroupParam queryVariantGroupParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListVariantFavoriteVo}
     */
    getVariantFavoriteList(queryVariantGroupParam) {
      return this.getVariantFavoriteListWithHttpInfo(queryVariantGroupParam)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 修改变量收藏分组
     * @param {module:com.mn.sdk.model/SaveVariantFavoriteForm} saveVariantFavoriteForm saveVariantFavoriteForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    updateVariantFavoriteWithHttpInfo(saveVariantFavoriteForm) {
      let postBody = saveVariantFavoriteForm;

      // verify the required parameter 'saveVariantFavoriteForm' is set
      if (saveVariantFavoriteForm === undefined || saveVariantFavoriteForm === null) {
        throw new Error("Missing the required parameter 'saveVariantFavoriteForm' when calling updateVariantFavorite");
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
      let returnType = ResultObject;

      return this.apiClient.callApi(
        '/api-business/variantFavorite/updateVariantFavorite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 修改变量收藏分组
     * @param {module:com.mn.sdk.model/SaveVariantFavoriteForm} saveVariantFavoriteForm saveVariantFavoriteForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    updateVariantFavorite(saveVariantFavoriteForm) {
      return this.updateVariantFavoriteWithHttpInfo(saveVariantFavoriteForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
