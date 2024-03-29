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
 * The UpdateProjectBoardFilterGroupForm model module.
 * @module com.mn.sdk.model/UpdateProjectBoardFilterGroupForm
 * @version 1.0
 */
export class UpdateProjectBoardFilterGroupForm {
  /**
   * Constructs a new <code>UpdateProjectBoardFilterGroupForm</code>.
   * 修改看板过滤分组Form
   * @alias module:com.mn.sdk.model/UpdateProjectBoardFilterGroupForm
   * @class
   * @param id {String} 过滤分组Id
   * @param name {String} 过滤分组名称
   * @param remark {String} 备注
   * @param sort {Number} 排序号
   */
  constructor(id, name, remark, sort) {
    this.id = id;
    this.name = name;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new UpdateProjectBoardFilterGroupForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateProjectBoardFilterGroupForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateProjectBoardFilterGroupForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateProjectBoardFilterGroupForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateProjectBoardFilterGroupForm} The populated <code>UpdateProjectBoardFilterGroupForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateProjectBoardFilterGroupForm();
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
 * 过滤分组Id
 * @member {String} id
 */
UpdateProjectBoardFilterGroupForm.prototype.id = undefined;

/**
 * 过滤分组名称
 * @member {String} name
 */
UpdateProjectBoardFilterGroupForm.prototype.name = undefined;

/**
 * 备注
 * @member {String} remark
 */
UpdateProjectBoardFilterGroupForm.prototype.remark = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
UpdateProjectBoardFilterGroupForm.prototype.sort = undefined;


