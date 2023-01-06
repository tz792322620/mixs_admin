-- 注意：该页面对应的前台目录为views/usermoneyrecord文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022110811128040230', NULL, '会员钱包记录', '/usermoneyrecord/userMoneyrecordList', 'usermoneyrecord/UserMoneyrecordList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128040231', '2022110811128040230', '添加会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128040232', '2022110811128040230', '编辑会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128040233', '2022110811128040230', '删除会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128050234', '2022110811128040230', '批量删除会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128050235', '2022110811128040230', '导出excel_会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110811128050236', '2022110811128040230', '导入excel_会员钱包记录', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:user_virtual_wallet_record:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-08 11:12:23', NULL, NULL, 0, 0, '1', 0);