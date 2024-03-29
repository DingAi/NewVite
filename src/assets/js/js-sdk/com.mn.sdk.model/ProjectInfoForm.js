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
 * The ProjectInfoForm model module.
 * @module com.mn.sdk.model/ProjectInfoForm
 * @version 1.0
 */
export class ProjectInfoForm {
  /**
   * Constructs a new <code>ProjectInfoForm</code>.
   * @alias module:com.mn.sdk.model/ProjectInfoForm
   * @class
   * @param locationType {Number} 定位方式（1：手动，2：基站定位，3：GPS定位，0：关闭）
   * @param projectId {String} 项目ID
   */
  constructor(locationType, projectId) {
    this.locationType = locationType;
    this.projectId = projectId;
  }


    static constructFromList(list) {
        let array = [new ProjectInfoForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectInfoForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectInfoForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectInfoForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectInfoForm} The populated <code>ProjectInfoForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectInfoForm();
      if (Reflect.has(data, 'locationType'))
        obj.locationType = ApiClient.convertToType(data['locationType'], 'Number');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
    }
    return obj;
  }
}

/**
 * 定位方式（1：手动，2：基站定位，3：GPS定位，0：关闭）
 * @member {Number} locationType
 */
ProjectInfoForm.prototype.locationType = undefined;

/**
 * 项目ID
 * @member {String} projectId
 */
ProjectInfoForm.prototype.projectId = undefined;


