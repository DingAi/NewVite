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
 * The ProjectForm model module.
 * @module com.mn.sdk.model/ProjectForm
 * @version 1.0
 */
export class ProjectForm {
  /**
   * Constructs a new <code>ProjectForm</code>.
   * @alias module:com.mn.sdk.model/ProjectForm
   * @class
   * @param id {String} 项目ID
   * @param name {String} 项目名称
   * @param remark {String} 项目备注
   * @param sort {Number} 项目的排序号
   */
  constructor(id, name, remark, sort) {
    this.id = id;
    this.name = name;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new ProjectForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectForm} The populated <code>ProjectForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectForm();
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
    }
    return obj;
  }
}

/**
 * 项目ID
 * @member {String} id
 */
ProjectForm.prototype.id = undefined;

/**
 * 项目名称
 * @member {String} name
 */
ProjectForm.prototype.name = undefined;

/**
 * 项目备注
 * @member {String} remark
 */
ProjectForm.prototype.remark = undefined;

/**
 * 项目的排序号
 * @member {Number} sort
 */
ProjectForm.prototype.sort = undefined;


