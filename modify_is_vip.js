// 解析响应体
let body = JSON.parse($response.body);

// 检查返回的数据中是否包含 is_vip 和 vip_expire_date 字段
if (body.data) {
    // 将 is_vip 修改为 1，表示用户是 VIP
    body.data.is_vip = 1;
    
    // 将 vip_expire_date 修改为 999999，表示 VIP 永久有效
    body.data.vip_expire_date = 999999;
}

// 返回修改后的响应体
$done({body: JSON.stringify(body)});
