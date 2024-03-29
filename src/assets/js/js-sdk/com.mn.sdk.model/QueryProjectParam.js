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
 * The QueryProjectParam model module.
 * @module com.mn.sdk.model/QueryProjectParam
 * @version 1.0
 */
export class QueryProjectParam {
  /**
   * Constructs a new <code>QueryProjectParam</code>.
   * @alias module:com.mn.sdk.model/QueryProjectParam
   * @class
   * @param alarmStatus {String} 报警状态：0未报警，1报警
   * @param area {String} 地区搜索，格式:   省、 省:市、 省:市:区
   * @param bindSerialNumber {String} 是否都绑定序列号：0未绑定，1已绑定
   * @param boardId {String} 项目看板Id
   * @param clientId {String} 客户id
   * @param isAttention {String} 项目关注状态：0未关注，1关注
   * @param keyword {String} 关键字:搜索项目名称/设备序列号/客户名称 
   * @param onlineStatus {String} 项目在线状态：0离线，1在线
   * @param permissionGroupId {String} 权限组id
   * @param projectType {String} 项目类型0：自由项目，1模板项目
   * @param propertiesId {String} 属性id
   * @param propertiesValue {String} 属性值id
   */
  constructor(alarmStatus, area, bindSerialNumber, boardId, clientId, isAttention, keyword, onlineStatus, permissionGroupId, projectType, propertiesId, propertiesValue) {
    this.alarmStatus = alarmStatus;
    this.area = area;
    this.bindSerialNumber = bindSerialNumber;
    this.boardId = boardId;
    this.clientId = clientId;
    this.isAttention = isAttention;
    this.keyword = keyword;
    this.onlineStatus = onlineStatus;
    this.permissionGroupId = permissionGroupId;
    this.projectType = projectType;
    this.propertiesId = propertiesId;
    this.propertiesValue = propertiesValue;
  }


    static constructFromList(list) {
        let array = [new QueryProjectParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(QueryProjectParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>QueryProjectParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/QueryProjectParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/QueryProjectParam} The populated <code>QueryProjectParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QueryProjectParam();
      if (Reflect.has(data, 'alarmStatus'))
        obj.alarmStatus = ApiClient.convertToType(data['alarmStatus'], 'String');
      if (Reflect.has(data, 'area'))
        obj.area = ApiClient.convertToType(data['area'], 'String');
      if (Reflect.has(data, 'bindSerialNumber'))
        obj.bindSerialNumber = ApiClient.convertToType(data['bindSerialNumber'], 'String');
      if (Reflect.has(data, 'boardId'))
        obj.boardId = ApiClient.convertToType(data['boardId'], 'String');
      if (Reflect.has(data, 'clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (Reflect.has(data, 'isAttention'))
        obj.isAttention = ApiClient.convertToType(data['isAttention'], 'String');
      if (Reflect.has(data, 'keyword'))
        obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
      if (Reflect.has(data, 'onlineStatus'))
        obj.onlineStatus = ApiClient.convertToType(data['onlineStatus'], 'String');
      if (Reflect.has(data, 'permissionGroupId'))
        obj.permissionGroupId = ApiClient.convertToType(data['permissionGroupId'], 'String');
      if (Reflect.has(data, 'projectType'))
        obj.projectType = ApiClient.convertToType(data['projectType'], 'String');
      if (Reflect.has(data, 'propertiesId'))
        obj.propertiesId = ApiClient.convertToType(data['propertiesId'], 'String');
      if (Reflect.has(data, 'propertiesValue'))
        obj.propertiesValue = ApiClient.convertToType(data['propertiesValue'], 'String');
    }
    return obj;
  }
}

/**
 * 报警状态：0未报警，1报警
 * @member {String} alarmStatus
 */
QueryProjectParam.prototype.alarmStatus = undefined;

/**
 * 地区搜索，格式:   省、 省:市、 省:市:区
 * @member {String} area
 */
QueryProjectParam.prototype.area = undefined;

/**
 * 是否都绑定序列号：0未绑定，1已绑定
 * @member {String} bindSerialNumber
 */
QueryProjectParam.prototype.bindSerialNumber = undefined;

/**
 * 项目看板Id
 * @member {String} boardId
 */
QueryProjectParam.prototype.boardId = undefined;

/**
 * 客户id
 * @member {String} clientId
 */
QueryProjectParam.prototype.clientId = undefined;

/**
 * 项目关注状态：0未关注，1关注
 * @member {String} isAttention
 */
QueryProjectParam.prototype.isAttention = undefined;

/**
 * 关键字:搜索项目名称/设备序列号/客户名称 
 * @member {String} keyword
 */
QueryProjectParam.prototype.keyword = undefined;

/**
 * 项目在线状态：0离线，1在线
 * @member {String} onlineStatus
 */
QueryProjectParam.prototype.onlineStatus = undefined;

/**
 * 权限组id
 * @member {String} permissionGroupId
 */
QueryProjectParam.prototype.permissionGroupId = undefined;

/**
 * 项目类型0：自由项目，1模板项目
 * @member {String} projectType
 */
QueryProjectParam.prototype.projectType = undefined;

/**
 * 属性id
 * @member {String} propertiesId
 */
QueryProjectParam.prototype.propertiesId = undefined;

/**
 * 属性值id
 * @member {String} propertiesValue
 */
QueryProjectParam.prototype.propertiesValue = undefined;


