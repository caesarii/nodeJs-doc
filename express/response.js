
// res.redirect(pah)
// 重定向到新网站，指定完整的url
res.redirect('http://www.example.com')

// 相对 hostname 进行重定向，path 以 / 开始
// 当前url: http://www.example.com/runer/home
// 重定向到 http://www.example.com/admin
res.redirect('/admin')

// 相对当前 url 进行重定向，path 开头无 /
// 当前url: http://www.example.com/admin
// 重定向到 http://www.example.com/admin/users
res.redirect('users')

// 相对重定向
// 当前 http://www.example.com/admin/users
// 重定向 http://www.example.com/admin
res.redirect('..')

