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
 * The ProjectVo model module.
 * @module com.mn.sdk.model/ProjectVo
 * @version 1.0
 */
export class ProjectVo {
  /**
   * Constructs a new <code>ProjectVo</code>.
   * @alias module:com.mn.sdk.model/ProjectVo
   * @class
   * @param city {String} 市
   * @param country {String} 国家
   * @param createdTime {Date} 项目的创建时间
   * @param district {String} 区/县
   * @param id {String} 项目ID
   * @param lat {String} 项目的纬度(地球经纬度)
   * @param lon {String} 项目的经度(地球经纬度)
   * @param name {String} 项目名称
   * @param permissionGroupId {String} 项目所在的权限组Id
   * @param province {String} 省
   * @param remark {String} 项目备注
   * @param sort {Number} 项目排序号
   */
  constructor(city, country, createdTime, district, id, lat, lon, name, permissionGroupId, province, remark, sort) {
    this.city = city;
    this.country = country;
    this.createdTime = createdTime;
    this.district = district;
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.permissionGroupId = permissionGroupId;
    this.province = province;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new ProjectVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectVo} The populated <code>ProjectVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectVo();
      if (Reflect.has(data, 'city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (Reflect.has(data, 'country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'district'))
        obj.district = ApiClient.convertToType(data['district'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'lat'))
        obj.lat = ApiClient.convertToType(data['lat'], 'String');
      if (Reflect.has(data, 'lon'))
        obj.lon = ApiClient.convertToType(data['lon'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'permissionGroupId'))
        obj.permissionGroupId = ApiClient.convertToType(data['permissionGroupId'], 'String');
      if (Reflect.has(data, 'province'))
        obj.province = ApiClient.convertToType(data['province'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
    }
    return obj;
  }
}

/**
 * 市
 * @member {String} city
 */
ProjectVo.prototype.city = undefined;

/**
 * 国家
 * @member {String} country
 */
ProjectVo.prototype.country = undefined;

/**
 * 项目的创建时间
 * @member {Date} createdTime
 */
ProjectVo.prototype.createdTime = undefined;

/**
 * 区/县
 * @member {String} district
 */
ProjectVo.prototype.district = undefined;

/**
 * 项目ID
 * @member {String} id
 */
ProjectVo.prototype.id = undefined;

/**
 * 项目的纬度(地球经纬度)
 * @member {String} lat
 */
ProjectVo.prototype.lat = undefined;

/**
 * 项目的经度(地球经纬度)
 * @member {String} lon
 */
ProjectVo.prototype.lon = undefined;

/**
 * 项目名称
 * @member {String} name
 */
ProjectVo.prototype.name = undefined;

/**
 * 项目所在的权限组Id
 * @member {String} permissionGroupId
 */
ProjectVo.prototype.permissionGroupId = undefined;

/**
 * 省
 * @member {String} province
 */
ProjectVo.prototype.province = undefined;

/**
 * 项目备注
 * @member {String} remark
 */
ProjectVo.prototype.remark = undefined;

/**
 * 项目排序号
 * @member {Number} sort
 */
ProjectVo.prototype.sort = undefined;


