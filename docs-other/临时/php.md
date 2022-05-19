

## ubuntu apache2 配置

### 修改网站目录

/etc/apache2/sites-enabled/000-default.conf

```conf
DocumentRoot /home/jo/_work/lmm/www/sms
```

### 允许目录

/etc/apache2/apache2.conf

```conf
<Directory /home/jo/_work/lmm/www/sms>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
</Directory>
```
