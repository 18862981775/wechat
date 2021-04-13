FROM rmc-registry.i51cy.com:443/yopu-cluster-mysql-client
MAINTAINER Weibo Zhang <zhangweibo@iyopu.com>

# 部署代码
COPY dist /var/www/html

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

# 暴露80端口
EXPOSE 80

# 响应结束指令
STOPSIGNAL SIGTERM

# 启动指令
CMD ["nginx", "-g", "daemon off;"]
