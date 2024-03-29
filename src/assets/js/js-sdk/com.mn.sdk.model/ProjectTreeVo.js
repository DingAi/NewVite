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
 * The ProjectTreeVo model module.
 * @module com.mn.sdk.model/ProjectTreeVo
 * @version 1.0
 */
export class ProjectTreeVo {
  /**
   * Constructs a new <code>ProjectTreeVo</code>.
   * 项目(树)Vo
   * @alias module:com.mn.sdk.model/ProjectTreeVo
   * @class
   * @param projectId {String} 项目id
   * @param projectName {String} 项目名称
   */
  constructor(projectId, projectName) {
    this.projectId = projectId;
    this.projectName = projectName;
  }


    static constructFromList(list) {
        let array = [new ProjectTreeVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectTreeVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectTreeVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectTreeVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectTreeVo} The populated <code>ProjectTreeVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectTreeVo();
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'projectName'))
        obj.projectName = ApiClient.convertToType(data['projectName'], 'String');
    }
    return obj;
  }
}

/**
 * 项目id
 * @member {String} projectId
 */
ProjectTreeVo.prototype.projectId = undefined;

/**
 * 项目名称
 * @member {String} projectName
 */
ProjectTreeVo.prototype.projectName = undefined;


