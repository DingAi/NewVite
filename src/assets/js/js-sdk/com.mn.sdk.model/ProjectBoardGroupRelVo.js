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
import {ProjectBoardGroupRelevanceVo} from './ProjectBoardGroupRelevanceVo';

/**
 * The ProjectBoardGroupRelVo model module.
 * @module com.mn.sdk.model/ProjectBoardGroupRelVo
 * @version 1.0
 */
export class ProjectBoardGroupRelVo {
  /**
   * Constructs a new <code>ProjectBoardGroupRelVo</code>.
   * 项目看板分组节点与项目关联Vo
   * @alias module:com.mn.sdk.model/ProjectBoardGroupRelVo
   * @class
   * @param project {Array.<module:com.mn.sdk.model/ProjectBoardGroupRelevanceVo>} N个项目信息
   * @param projectGroupId {String} 项目看板分组节点ID
   */
  constructor(project, projectGroupId) {
    this.project = project;
    this.projectGroupId = projectGroupId;
  }


    static constructFromList(list) {
        let array = [new ProjectBoardGroupRelVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProjectBoardGroupRelVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProjectBoardGroupRelVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProjectBoardGroupRelVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProjectBoardGroupRelVo} The populated <code>ProjectBoardGroupRelVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProjectBoardGroupRelVo();
      if (Reflect.has(data, 'project'))
        obj.project = ApiClient.convertToType(data['project'], [ProjectBoardGroupRelevanceVo]);
      if (Reflect.has(data, 'projectGroupId'))
        obj.projectGroupId = ApiClient.convertToType(data['projectGroupId'], 'String');
    }
    return obj;
  }
}

/**
 * N个项目信息
 * @member {Array.<module:com.mn.sdk.model/ProjectBoardGroupRelevanceVo>} project
 */
ProjectBoardGroupRelVo.prototype.project = undefined;

/**
 * 项目看板分组节点ID
 * @member {String} projectGroupId
 */
ProjectBoardGroupRelVo.prototype.projectGroupId = undefined;


