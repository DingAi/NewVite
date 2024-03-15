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
import {ResultListVariantTagVo} from '../com.mn.sdk.model/ResultListVariantTagVo';
import {ResultObject} from '../com.mn.sdk.model/ResultObject';
import {VariableBindingTagParam} from '../com.mn.sdk.model/VariableBindingTagParam';

/**
* VariantTag service.
* @module com.mn.sdk.api/VariantTagApi
* @version 1.0
*/
export class VariantTagApi {

    /**
    * Constructs a new VariantTagApi. 
    * @alias module:com.mn.sdk.api/VariantTagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 添加变量标签信息
     * 根据传入的参数 添加变量标签
     * @param {String} name 标签名
     * @param {Number} sort 排序号
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    addVariantTagWithHttpInfo(name, sort) {
        let postBody = {};
        postBody["name"] = name;
postBody["sort"] = sort;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addVariantTag");
      }

      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling addVariantTag");
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
        '/api-business/variantTag/addVariantTag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 添加变量标签信息
     * 根据传入的参数 添加变量标签
     * @param {String} name 标签名
     * @param {Number} sort 排序号
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    addVariantTag(name, sort) {
      return this.addVariantTagWithHttpInfo(name, sort)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 变量绑定标签
     * 根据传入的 Param类 变量绑定标签
     * @param {module:com.mn.sdk.model/VariableBindingTagParam} variableBindingTagParam variableBindingTagParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    addVariantTagRelWithHttpInfo(variableBindingTagParam) {
      let postBody = variableBindingTagParam;

      // verify the required parameter 'variableBindingTagParam' is set
      if (variableBindingTagParam === undefined || variableBindingTagParam === null) {
        throw new Error("Missing the required parameter 'variableBindingTagParam' when calling addVariantTagRel");
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
        '/api-business/variantTag/addVariantTagRel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 变量绑定标签
     * 根据传入的 Param类 变量绑定标签
     * @param {module:com.mn.sdk.model/VariableBindingTagParam} variableBindingTagParam variableBindingTagParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    addVariantTagRel(variableBindingTagParam) {
      return this.addVariantTagRelWithHttpInfo(variableBindingTagParam)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 删除变量标签信息
     * 根据传入的变量标签Id 删除对应的变量标签信息与关联关系
     * @param {String} tagId 标签Id
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    deleteVariantTagByTagIdWithHttpInfo(tagId) {
        let postBody = {};
        postBody["tagId"] = tagId;

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteVariantTagByTagId");
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
        '/api-business/variantTag/deleteVariantTagByTagId', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 删除变量标签信息
     * 根据传入的变量标签Id 删除对应的变量标签信息与关联关系
     * @param {String} tagId 标签Id
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    deleteVariantTagByTagId(tagId) {
      return this.deleteVariantTagByTagIdWithHttpInfo(tagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获取变量标签信息
     * 根据传入的type与id 查询对应的['模板下', '项目下', '企业下']变量标签信息
     * @param {String} resourceId 与resourceType 与之对应
     * @param {String} resourceType [template: '模板', project: '项目', all: '企业]
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListVariantTagVo} and HTTP response
     */
    getVariantTagListWithHttpInfo(resourceId, resourceType) {
        let postBody = {};
        postBody["resourceId"] = resourceId;
postBody["resourceType"] = resourceType;

      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getVariantTagList");
      }

      // verify the required parameter 'resourceType' is set
      if (resourceType === undefined || resourceType === null) {
        throw new Error("Missing the required parameter 'resourceType' when calling getVariantTagList");
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
      let returnType = ResultListVariantTagVo;

      return this.apiClient.callApi(
        '/api-business/variantTag/getVariantTagList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取变量标签信息
     * 根据传入的type与id 查询对应的['模板下', '项目下', '企业下']变量标签信息
     * @param {String} resourceId 与resourceType 与之对应
     * @param {String} resourceType [template: '模板', project: '项目', all: '企业]
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListVariantTagVo}
     */
    getVariantTagList(resourceId, resourceType) {
      return this.getVariantTagListWithHttpInfo(resourceId, resourceType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 修改变量标签信息
     * 根据传入的标签Id 修改对应的标签信息
     * @param {String} id 变量标签Id
     * @param {String} name 标签名
     * @param {Number} sort 排序号
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    updateVariantTagWithHttpInfo(id, name, sort) {
        let postBody = {};
        postBody["id"] = id;
postBody["name"] = name;
postBody["sort"] = sort;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVariantTag");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateVariantTag");
      }

      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling updateVariantTag");
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
        '/api-business/variantTag/updateVariantTag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 修改变量标签信息
     * 根据传入的标签Id 修改对应的标签信息
     * @param {String} id 变量标签Id
     * @param {String} name 标签名
     * @param {Number} sort 排序号
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    updateVariantTag(id, name, sort) {
      return this.updateVariantTagWithHttpInfo(id, name, sort)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 修改变量标签指标类型
     * 根据传入的标签Id 修改对应的变量指标信息
     * @param {String} id 标签Id
     * @param {String} variantTagIndexType 变量标签指标
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    updateVariantTagIndexTypeWithHttpInfo(id, variantTagIndexType) {
        let postBody = {};
        postBody["id"] = id;
postBody["variantTagIndexType"] = variantTagIndexType;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVariantTagIndexType");
      }

      // verify the required parameter 'variantTagIndexType' is set
      if (variantTagIndexType === undefined || variantTagIndexType === null) {
        throw new Error("Missing the required parameter 'variantTagIndexType' when calling updateVariantTagIndexType");
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
        '/api-business/variantTag/updateVariantTagIndexType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 修改变量标签指标类型
     * 根据传入的标签Id 修改对应的变量指标信息
     * @param {String} id 标签Id
     * @param {String} variantTagIndexType 变量标签指标
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    updateVariantTagIndexType(id, variantTagIndexType) {
      return this.updateVariantTagIndexTypeWithHttpInfo(id, variantTagIndexType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
