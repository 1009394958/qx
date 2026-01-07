// 解析响应体
let body = JSON.parse($response.body);

// 检查返回的数据中是否包含 is_vip 字段
if (body.data && body.data.is_vip !== undefined) {
    // 将 is_vip 修改为 1，表示用户是 VIP
    body.data.is_vip = 1;
}

// 返回修改后的响应体
$done({body: JSON.stringify(body)});
