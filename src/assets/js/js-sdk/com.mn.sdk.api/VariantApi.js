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
import {QueryConditionHistoryParam} from '../com.mn.sdk.model/QueryConditionHistoryParam';
import {QueryVariantGroupParam} from '../com.mn.sdk.model/QueryVariantGroupParam';
import {QueryVariantHistoryParam} from '../com.mn.sdk.model/QueryVariantHistoryParam';
import {QueryVariantParam} from '../com.mn.sdk.model/QueryVariantParam';
import {ResultIPageVariantDetailedInfoVo} from '../com.mn.sdk.model/ResultIPageVariantDetailedInfoVo';
import {ResultListVariantDetailedInfoVo} from '../com.mn.sdk.model/ResultListVariantDetailedInfoVo';
import {ResultListVariantGroupVo} from '../com.mn.sdk.model/ResultListVariantGroupVo';
import {ResultListVariantRealtimeValue} from '../com.mn.sdk.model/ResultListVariantRealtimeValue';
import {ResultMapStringListQueryHistoryDataVo} from '../com.mn.sdk.model/ResultMapStringListQueryHistoryDataVo';
import {ResultObject} from '../com.mn.sdk.model/ResultObject';
import {WriteVariantValue} from '../com.mn.sdk.model/WriteVariantValue';

/**
* Variant service.
* @module com.mn.sdk.api/VariantApi
* @version 1.0
*/
export class VariantApi {

    /**
    * Constructs a new VariantApi. 
    * @alias module:com.mn.sdk.api/VariantApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 批量变量控制
     * @param {Array.<module:com.mn.sdk.model/WriteVariantValue>} variantValues 批量设置变量值 ，格式: 设备ID1:变量ID1:值1,设备ID2:变量ID2:值2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    batchWriteVariantValueWithHttpInfo(variantValues) {
      let postBody = variantValues;

      // verify the required parameter 'variantValues' is set
      if (variantValues === undefined || variantValues === null) {
        throw new Error("Missing the required parameter 'variantValues' when calling batchWriteVariantValue");
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
        '/api-business/variant/batchWriteVariantValue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 批量变量控制
     * @param {Array.<module:com.mn.sdk.model/WriteVariantValue>} variantValues 批量设置变量值 ，格式: 设备ID1:变量ID1:值1,设备ID2:变量ID2:值2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    batchWriteVariantValue(variantValues) {
      return this.batchWriteVariantValueWithHttpInfo(variantValues)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 查询条件存储的变量历史值
     * @param {module:com.mn.sdk.model/QueryConditionHistoryParam} queryHistoryCurveForm queryHistoryCurveForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultMapStringListQueryHistoryDataVo} and HTTP response
     */
    getConditionHistoryVariantDataWithHttpInfo(queryHistoryCurveForm) {
      let postBody = queryHistoryCurveForm;

      // verify the required parameter 'queryHistoryCurveForm' is set
      if (queryHistoryCurveForm === undefined || queryHistoryCurveForm === null) {
        throw new Error("Missing the required parameter 'queryHistoryCurveForm' when calling getConditionHistoryVariantData");
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
      let returnType = ResultMapStringListQueryHistoryDataVo;

      return this.apiClient.callApi(
        '/api-business/variant/getConditionHistoryVariantData', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 查询条件存储的变量历史值
     * @param {module:com.mn.sdk.model/QueryConditionHistoryParam} queryHistoryCurveForm queryHistoryCurveForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultMapStringListQueryHistoryDataVo}
     */
    getConditionHistoryVariantData(queryHistoryCurveForm) {
      return this.getConditionHistoryVariantDataWithHttpInfo(queryHistoryCurveForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量分组列表
     * @param {module:com.mn.sdk.model/QueryVariantGroupParam} queryVariantGroupParam queryVariantGroupParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListVariantGroupVo} and HTTP response
     */
    getVariantGroupListWithHttpInfo(queryVariantGroupParam) {
      let postBody = queryVariantGroupParam;

      // verify the required parameter 'queryVariantGroupParam' is set
      if (queryVariantGroupParam === undefined || queryVariantGroupParam === null) {
        throw new Error("Missing the required parameter 'queryVariantGroupParam' when calling getVariantGroupList");
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
      let returnType = ResultListVariantGroupVo;

      return this.apiClient.callApi(
        '/api-business/variant/getVariantGroupList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量分组列表
     * @param {module:com.mn.sdk.model/QueryVariantGroupParam} queryVariantGroupParam queryVariantGroupParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListVariantGroupVo}
     */
    getVariantGroupList(queryVariantGroupParam) {
      return this.getVariantGroupListWithHttpInfo(queryVariantGroupParam)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量的历史数据
     * @param {module:com.mn.sdk.model/QueryVariantHistoryParam} queryHistoryCurveForm queryHistoryCurveForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultMapStringListQueryHistoryDataVo} and HTTP response
     */
    getVariantHistoryDataWithHttpInfo(queryHistoryCurveForm) {
      let postBody = queryHistoryCurveForm;

      // verify the required parameter 'queryHistoryCurveForm' is set
      if (queryHistoryCurveForm === undefined || queryHistoryCurveForm === null) {
        throw new Error("Missing the required parameter 'queryHistoryCurveForm' when calling getVariantHistoryData");
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
      let returnType = ResultMapStringListQueryHistoryDataVo;

      return this.apiClient.callApi(
        '/api-business/variant/getVariantHistoryData', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量的历史数据
     * @param {module:com.mn.sdk.model/QueryVariantHistoryParam} queryHistoryCurveForm queryHistoryCurveForm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultMapStringListQueryHistoryDataVo}
     */
    getVariantHistoryData(queryHistoryCurveForm) {
      return this.getVariantHistoryDataWithHttpInfo(queryHistoryCurveForm)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量列表
     * 根据不同得条件查询变量
     * @param {module:com.mn.sdk.model/QueryVariantParam} queryVariantParam queryVariantParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultIPageVariantDetailedInfoVo} and HTTP response
     */
    getVariantListWithHttpInfo(queryVariantParam) {
      let postBody = queryVariantParam;

      // verify the required parameter 'queryVariantParam' is set
      if (queryVariantParam === undefined || queryVariantParam === null) {
        throw new Error("Missing the required parameter 'queryVariantParam' when calling getVariantList");
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
      let returnType = ResultIPageVariantDetailedInfoVo;

      return this.apiClient.callApi(
        '/api-business/variant/getVariantList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量列表
     * 根据不同得条件查询变量
     * @param {module:com.mn.sdk.model/QueryVariantParam} queryVariantParam queryVariantParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultIPageVariantDetailedInfoVo}
     */
    getVariantList(queryVariantParam) {
      return this.getVariantListWithHttpInfo(queryVariantParam)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 根据变量id获取变量列表
     * 根据变量id获取变量详情
     * @param {Array.<module:com.mn.sdk.model/String>} variantList 变量列表 [设备id:变量id,设备id:...]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListVariantDetailedInfoVo} and HTTP response
     */
    getVariantListByIdsWithHttpInfo(variantList) {
        let postBody = {};
        postBody["variantList"] = variantList;

      // verify the required parameter 'variantList' is set
      if (variantList === undefined || variantList === null) {
        throw new Error("Missing the required parameter 'variantList' when calling getVariantListByIds");
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
      let returnType = ResultListVariantDetailedInfoVo;

      return this.apiClient.callApi(
        '/api-business/variant/getVariantListByIds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 根据变量id获取变量列表
     * 根据变量id获取变量详情
     * @param {Array.<module:com.mn.sdk.model/String>} variantList 变量列表 [设备id:变量id,设备id:...]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListVariantDetailedInfoVo}
     */
    getVariantListByIds(variantList) {
      return this.getVariantListByIdsWithHttpInfo(variantList)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量值
     * 根据变量列表查询变量值
     * @param {Array.<module:com.mn.sdk.model/String>} variantIds 变量列表，结构为[设备id:变量id,...]
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListVariantRealtimeValue} and HTTP response
     */
    getVariantRealtimeValueListWithHttpInfo(variantIds) {
        let postBody = {};
        postBody["variantIds"] = variantIds;

      // verify the required parameter 'variantIds' is set
      if (variantIds === undefined || variantIds === null) {
        throw new Error("Missing the required parameter 'variantIds' when calling getVariantRealtimeValueList");
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
      let returnType = ResultListVariantRealtimeValue;

      return this.apiClient.callApi(
        '/api-business/variant/getVariantRealtimeValueList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量值
     * 根据变量列表查询变量值
     * @param {Array.<module:com.mn.sdk.model/String>} variantIds 变量列表，结构为[设备id:变量id,...]
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListVariantRealtimeValue}
     */
    getVariantRealtimeValueList(variantIds) {
      return this.getVariantRealtimeValueListWithHttpInfo(variantIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 控制设备变量的值
     * @param {module:com.mn.sdk.model/WriteVariantValue} param param
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    writeVariantValueWithHttpInfo(param) {
      let postBody = param;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling writeVariantValue");
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
        '/api-business/variant/writeVariantValue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 控制设备变量的值
     * @param {module:com.mn.sdk.model/WriteVariantValue} param param
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    writeVariantValue(param) {
      return this.writeVariantValueWithHttpInfo(param)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
