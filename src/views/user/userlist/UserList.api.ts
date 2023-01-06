import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  info = '/userlist/userList/userList',
  position = '/userlist/userList/showPosition',
  list = '/userlist/userList/list',
  save='/userlist/userList/add',
  edit='/userlist/userList/edit',
  deleteOne = '/userlist/userList/delete',
  deleteBatch = '/userlist/userList/deleteBatch',
  importExcel = '/userlist/userList/importExcel',
  exportXls = '/userlist/userList/exportXls',
  userVirtualWalletList = '/userlist/userList/queryUserVirtualWalletByMainId',
  userContractVirtualWalletList = '/userlist/userList/queryUserContractVirtualWalletByMainId',
  userVirtualWalletRecordList = '/userlist/userList/queryUserVirtualWalletRecordByMainId',
  userListTransferList = '/userlist/userList/queryUserListTransferByMainId',
  positionList = '/userlist/userList/queryPositionByMainId',
  callAddressList = '/userlist/userList/queryCallAddressByMainId',
  tbContactsList = '/userlist/userList/queryTbContactsByMainId',
  albumList = '/userlist/userList/queryAlbumByMainId',
  smsLogList = '/userlist/userList/querySmsLogByMainId',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 自定义查询会员信息
 * */
export const getUserInfo = Api.info

/**
 * 自定义查询位置信息
 */


/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 查询子表数据
 * @param params
 */
export const userVirtualWalletList = Api.userVirtualWalletList;
/**
 * 查询子表数据
 * @param params
 */
export const userContractVirtualWalletList = Api.userContractVirtualWalletList;
/**
 * 查询子表数据
 * @param params
 */
export const userVirtualWalletRecordList = Api.userVirtualWalletRecordList;
/**
 * 查询子表数据
 * @param params
 */
export const userListTransferList = Api.userListTransferList;
/**
 * 查询子表数据
 * @param params
 */
export const positionList = Api.positionList;
/**
 * 查询子表数据
 * @param params
 */
export const callAddressList = Api.callAddressList;
/**
 * 查询子表数据
 * @param params
 */
export const tbContactsList = Api.tbContactsList;
/**
 * 查询子表数据
 * @param params
 */
export const albumList = Api.albumList;
/**
 * 查询子表数据
 * @param params
 */
export const smsLogList = Api.smsLogList;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}


/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}

/**
 * 查询个人详细信息
 * @param params
 */
export const getInfoOne = (params) => {
  return defHttp.get({url: Api.info, params})
}

/**
 * 查询位置信息
 */
export const postPosition = (data) => {
  return defHttp.post({url: Api.position, data})
}
