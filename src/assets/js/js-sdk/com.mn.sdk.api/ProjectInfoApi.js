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
import {ProjectInfoForm} from '../com.mn.sdk.model/ProjectInfoForm';
import {ResultListProjectInfo} from '../com.mn.sdk.model/ResultListProjectInfo';
import {ResultListProjectStatus} from '../com.mn.sdk.model/ResultListProjectStatus';
import {ResultObject} from '../com.mn.sdk.model/ResultObject';

/**
* ProjectInfo service.
* @module com.mn.sdk.api/ProjectInfoApi
* @version 1.0
*/
export class ProjectInfoApi {

    /**
    * Constructs a new ProjectInfoApi. 
    * @alias module:com.mn.sdk.api/ProjectInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 查询项目信息列表
     * 查询项目信息
     * @param {Array.<module:com.mn.sdk.model/String>} projectIds 项目id列表
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListProjectInfo} and HTTP response
     */
    getProjectInfoListWithHttpInfo(projectIds) {
        let postBody = {};
        postBody["projectIds"] = projectIds;

      // verify the required parameter 'projectIds' is set
      if (projectIds === undefined || projectIds === null) {
        throw new Error("Missing the required parameter 'projectIds' when calling getProjectInfoList");
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
      let returnType = ResultListProjectInfo;

      return this.apiClient.callApi(
        '/api-business/projectInfo/getProjectInfoList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 查询项目信息列表
     * 查询项目信息
     * @param {Array.<module:com.mn.sdk.model/String>} projectIds 项目id列表
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListProjectInfo}
     */
    getProjectInfoList(projectIds) {
      return this.getProjectInfoListWithHttpInfo(projectIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 查询项目状态列表
     * 查询项目状态列表
     * @param {Array.<module:com.mn.sdk.model/String>} projectIds 项目id列表
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultListProjectStatus} and HTTP response
     */
    getProjectStatusListWithHttpInfo(projectIds) {
        let postBody = {};
        postBody["projectIds"] = projectIds;

      // verify the required parameter 'projectIds' is set
      if (projectIds === undefined || projectIds === null) {
        throw new Error("Missing the required parameter 'projectIds' when calling getProjectStatusList");
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
      let returnType = ResultListProjectStatus;

      return this.apiClient.callApi(
        '/api-business/projectInfo/getProjectStatusList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 查询项目状态列表
     * 查询项目状态列表
     * @param {Array.<module:com.mn.sdk.model/String>} projectIds 项目id列表
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultListProjectStatus}
     */
    getProjectStatusList(projectIds) {
      return this.getProjectStatusListWithHttpInfo(projectIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 修改项目信息
     * 查询项目信息
     * @param {module:com.mn.sdk.model/ProjectInfoForm} form form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.mn.sdk.model/ResultObject} and HTTP response
     */
    updateProjectInfoWithHttpInfo(form) {
      let postBody = form;

      // verify the required parameter 'form' is set
      if (form === undefined || form === null) {
        throw new Error("Missing the required parameter 'form' when calling updateProjectInfo");
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
        '/api-business/projectInfo/updateProjectInfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 修改项目信息
     * 查询项目信息
     * @param {module:com.mn.sdk.model/ProjectInfoForm} form form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.mn.sdk.model/ResultObject}
     */
    updateProjectInfo(form) {
      return this.updateProjectInfoWithHttpInfo(form)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}