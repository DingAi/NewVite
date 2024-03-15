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
 * The ProjectBoardGroupNodeForm model module.
 * @module com.mn.sdk.model/ProjectBoardGroupNodeForm
 * @version 1.0
 */
export class ProjectBoardGroupNodeForm {
  /**
   * Constructs a new <code>ProjectBoardGroupNodeForm</code>.
   * 项目看板节点传输类
   * @alias module:com.mn.sdk.model/ProjectBoardGroupNodeForm
   * @class
   * @param id {String} 项目分组节点ID
   * @param name {String} 项目分组名称
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
        let array = [new ProjectBoardGroupNodeForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectBoardGroupNodeForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectBoardGroupNodeForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectBoardGroupNodeForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectBoardGroupNodeForm} The populated <code>ProjectBoardGroupNodeForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBoardGroupNodeForm();
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
 * 项目分组节点ID
 * @member {String} id
 */
ProjectBoardGroupNodeForm.prototype.id = undefined;

/**
 * 项目分组名称
 * @member {String} name
 */
ProjectBoardGroupNodeForm.prototype.name = undefined;

/**
 * 备注
 * @member {String} remark
 */
ProjectBoardGroupNodeForm.prototype.remark = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
ProjectBoardGroupNodeForm.prototype.sort = undefined;


