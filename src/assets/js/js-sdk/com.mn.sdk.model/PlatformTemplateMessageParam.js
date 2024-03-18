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
 * The PlatformTemplateMessageParam model module.
 * @module com.mn.sdk.model/PlatformTemplateMessageParam
 * @version 1.0
 */
export class PlatformTemplateMessageParam {
  /**
   * Constructs a new <code>PlatformTemplateMessageParam</code>.
   * @alias module:com.mn.sdk.model/PlatformTemplateMessageParam
   * @class
   * @param action {String} 模板服务
   * @param content {Object.<String, String>} 参数名称以及参数内容
   * @param messageTypeId {String} 
   * @param projectId {String} 项目id
   * @param shared {Boolean} 是否所有用户共享该消息
   * @param userIds {Array.<String>} 用户id
   */
  constructor(action, content, messageTypeId, projectId, shared, userIds) {
    this.action = action;
    this.content = content;
    this.messageTypeId = messageTypeId;
    this.projectId = projectId;
    this.shared = shared;
    this.userIds = userIds;
  }


    static constructFromList(list) {
        let array = [new PlatformTemplateMessageParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(PlatformTemplateMessageParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>PlatformTemplateMessageParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/PlatformTemplateMessageParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/PlatformTemplateMessageParam} The populated <code>PlatformTemplateMessageParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlatformTemplateMessageParam();
      if (Reflect.has(data, 'action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (Reflect.has(data, 'content'))
        obj.content = ApiClient.convertToType(data['content'], {'String': 'String'});
      if (Reflect.has(data, 'messageTypeId'))
        obj.messageTypeId = ApiClient.convertToType(data['messageTypeId'], 'String');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'shared'))
        obj.shared = ApiClient.convertToType(data['shared'], 'Boolean');
      if (Reflect.has(data, 'userIds'))
        obj.userIds = ApiClient.convertToType(data['userIds'], ['String']);
    }
    return obj;
  }
}

/**
 * 模板服务
 * @member {String} action
 */
PlatformTemplateMessageParam.prototype.action = undefined;

/**
 * 参数名称以及参数内容
 * @member {Object.<String, String>} content
 */
PlatformTemplateMessageParam.prototype.content = undefined;

/**
 * @member {String} messageTypeId
 */
PlatformTemplateMessageParam.prototype.messageTypeId = undefined;

/**
 * 项目id
 * @member {String} projectId
 */
PlatformTemplateMessageParam.prototype.projectId = undefined;

/**
 * 是否所有用户共享该消息
 * @member {Boolean} shared
 */
PlatformTemplateMessageParam.prototype.shared = undefined;

/**
 * 用户id
 * @member {Array.<String>} userIds
 */
PlatformTemplateMessageParam.prototype.userIds = undefined;

