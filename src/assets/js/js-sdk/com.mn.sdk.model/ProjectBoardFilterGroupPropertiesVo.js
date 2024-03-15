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
 * The ProjectBoardFilterGroupPropertiesVo model module.
 * @module com.mn.sdk.model/ProjectBoardFilterGroupPropertiesVo
 * @version 1.0
 */
export class ProjectBoardFilterGroupPropertiesVo {
  /**
   * Constructs a new <code>ProjectBoardFilterGroupPropertiesVo</code>.
   * 看板过滤条件Vo
   * @alias module:com.mn.sdk.model/ProjectBoardFilterGroupPropertiesVo
   * @class
   * @param createdTime {Date} 创建时间
   * @param name {String} 筛选名称 地区,客户,日期,属性名称
   * @param propertiesType {String} 属性类型 0：枚举、1：文本、2：日期、3：数字 (type为3时 该属性则不为空)
   * @param sort {Number} 排序号
   * @param type {String}  筛选类型 0=地区 1=客户 2=日期 3=属性
   * @param value {String} 筛选值 [0]=地区,1=客户,[2]=日期,3=属性Id
   */
  constructor(createdTime, name, propertiesType, sort, type, value) {
    this.createdTime = createdTime;
    this.name = name;
    this.propertiesType = propertiesType;
    this.sort = sort;
    this.type = type;
    this.value = value;
  }


    static constructFromList(list) {
        let array = [new ProjectBoardFilterGroupPropertiesVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectBoardFilterGroupPropertiesVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectBoardFilterGroupPropertiesVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectBoardFilterGroupPropertiesVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectBoardFilterGroupPropertiesVo} The populated <code>ProjectBoardFilterGroupPropertiesVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBoardFilterGroupPropertiesVo();
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'propertiesType'))
        obj.propertiesType = ApiClient.convertToType(data['propertiesType'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (Reflect.has(data, 'value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * 创建时间
 * @member {Date} createdTime
 */
ProjectBoardFilterGroupPropertiesVo.prototype.createdTime = undefined;

/**
 * 筛选名称 地区,客户,日期,属性名称
 * @member {String} name
 */
ProjectBoardFilterGroupPropertiesVo.prototype.name = undefined;

/**
 * 属性类型 0：枚举、1：文本、2：日期、3：数字 (type为3时 该属性则不为空)
 * @member {String} propertiesType
 */
ProjectBoardFilterGroupPropertiesVo.prototype.propertiesType = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
ProjectBoardFilterGroupPropertiesVo.prototype.sort = undefined;

/**
 *  筛选类型 0=地区 1=客户 2=日期 3=属性
 * @member {String} type
 */
ProjectBoardFilterGroupPropertiesVo.prototype.type = undefined;

/**
 * 筛选值 [0]=地区,1=客户,[2]=日期,3=属性Id
 * @member {String} value
 */
ProjectBoardFilterGroupPropertiesVo.prototype.value = undefined;


