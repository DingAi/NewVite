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
 * The CompanyForm model module.
 * @module com.mn.sdk.model/CompanyForm
 * @version 1.0
 */
export class CompanyForm {
  /**
   * Constructs a new <code>CompanyForm</code>.
   * 企业信息传入对象
   * @alias module:com.mn.sdk.model/CompanyForm
   * @class
   * @param alias {String} 企业简称
   * @param city {String} 市code编码
   * @param country {String} 国家
   * @param district {String} 区code编码
   * @param industry {String} 主要行业
   * @param name {String} 企业名称
   * @param province {String} 省code编码
   * @param scale {String} 公司规模
   * @param street {String} 街道详情
   * @param website {String} 公司网址
   * @param years {String} 企业年限
   */
  constructor(alias, city, country, district, industry, name, province, scale, street, website, years) {
    this.alias = alias;
    this.city = city;
    this.country = country;
    this.district = district;
    this.industry = industry;
    this.name = name;
    this.province = province;
    this.scale = scale;
    this.street = street;
    this.website = website;
    this.years = years;
  }


    static constructFromList(list) {
        let array = [new CompanyForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(CompanyForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>CompanyForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/CompanyForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/CompanyForm} The populated <code>CompanyForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CompanyForm();
      if (Reflect.has(data, 'alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (Reflect.has(data, 'city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (Reflect.has(data, 'country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (Reflect.has(data, 'district'))
        obj.district = ApiClient.convertToType(data['district'], 'String');
      if (Reflect.has(data, 'industry'))
        obj.industry = ApiClient.convertToType(data['industry'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'province'))
        obj.province = ApiClient.convertToType(data['province'], 'String');
      if (Reflect.has(data, 'scale'))
        obj.scale = ApiClient.convertToType(data['scale'], 'String');
      if (Reflect.has(data, 'street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (Reflect.has(data, 'website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
      if (Reflect.has(data, 'years'))
        obj.years = ApiClient.convertToType(data['years'], 'String');
    }
    return obj;
  }
}

/**
 * 企业简称
 * @member {String} alias
 */
CompanyForm.prototype.alias = undefined;

/**
 * 市code编码
 * @member {String} city
 */
CompanyForm.prototype.city = undefined;

/**
 * 国家
 * @member {String} country
 */
CompanyForm.prototype.country = undefined;

/**
 * 区code编码
 * @member {String} district
 */
CompanyForm.prototype.district = undefined;

/**
 * 主要行业
 * @member {String} industry
 */
CompanyForm.prototype.industry = undefined;

/**
 * 企业名称
 * @member {String} name
 */
CompanyForm.prototype.name = undefined;

/**
 * 省code编码
 * @member {String} province
 */
CompanyForm.prototype.province = undefined;

/**
 * 公司规模
 * @member {String} scale
 */
CompanyForm.prototype.scale = undefined;

/**
 * 街道详情
 * @member {String} street
 */
CompanyForm.prototype.street = undefined;

/**
 * 公司网址
 * @member {String} website
 */
CompanyForm.prototype.website = undefined;

/**
 * 企业年限
 * @member {String} years
 */
CompanyForm.prototype.years = undefined;


