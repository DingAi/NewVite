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
 * The AddProjectBoardGroupNodeForm model module.
 * @module com.mn.sdk.model/AddProjectBoardGroupNodeForm
 * @version 1.0
 */
export class AddProjectBoardGroupNodeForm {
  /**
   * Constructs a new <code>AddProjectBoardGroupNodeForm</code>.
   * 项目看板分组传输类
   * @alias module:com.mn.sdk.model/AddProjectBoardGroupNodeForm
   * @class
   * @param name {String} 项目分组名称
   * @param parentId {String} 项目分组父节点ID [创建根节点：0, 创建子节点：上级节点Id]
   * @param projectBoardId {String} 所属项目看板Id
   * @param remark {String} 备注
   * @param sort {Number} 排序号
   */
  constructor(name, parentId, projectBoardId, remark, sort) {
    this.name = name;
    this.parentId = parentId;
    this.projectBoardId = projectBoardId;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new AddProjectBoardGroupNodeForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddProjectBoardGroupNodeForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddProjectBoardGroupNodeForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddProjectBoardGroupNodeForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddProjectBoardGroupNodeForm} The populated <code>AddProjectBoardGroupNodeForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddProjectBoardGroupNodeForm();
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'String');
      if (Reflect.has(data, 'projectBoardId'))
        obj.projectBoardId = ApiClient.convertToType(data['projectBoardId'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
    }
    return obj;
  }
}

/**
 * 项目分组名称
 * @member {String} name
 */
AddProjectBoardGroupNodeForm.prototype.name = undefined;

/**
 * 项目分组父节点ID [创建根节点：0, 创建子节点：上级节点Id]
 * @member {String} parentId
 */
AddProjectBoardGroupNodeForm.prototype.parentId = undefined;

/**
 * 所属项目看板Id
 * @member {String} projectBoardId
 */
AddProjectBoardGroupNodeForm.prototype.projectBoardId = undefined;

/**
 * 备注
 * @member {String} remark
 */
AddProjectBoardGroupNodeForm.prototype.remark = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
AddProjectBoardGroupNodeForm.prototype.sort = undefined;


