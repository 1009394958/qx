[Rewrite]
enabled=true
hostname = "api.suyang123.com"

# 拦截登录返回数据并修改 is_vip 字段
^/api/product/login$ url script-response-body https://raw.githubusercontent.com/1009394958/qx/refs/heads/main/modify_is_vip.js

# 拦截其他请求（如查询用户信息或获取积分任务）并修改 is_vip 字段
^/api/product/user/point/task/complete$ url script-response-body https://raw.githubusercontent.com/1009394958/qx/refs/heads/main/modify_is_vip.js
