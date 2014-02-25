gulp-qzone
==========

gulp workflow in qzone

安装配置流程：
====

1. 下载并安装`node` http://nodejs.org/
2. 因为在公司内网，所以设置一下`npm`（包）的源为公司内部服务器映像：
	```
	npm config set registry http://npm.oa.com
	```
3. 通过`node`的`npm`（包管理器）安装`grunt`
	```
	npm install -g grunt-cli
	```
4. 安装`gulp`为全局库，以后就可以在任意目录运行`gulp`
	```
	npm install -g gulp
	```
5. 把gulp添加到所有`devDependencies`
	```
	npm install --save-dev gulp
	```
6. 【合并雪碧图需要】安装gm库 http://www.graphicsmagick.org/
windows用户记得选择`graphicsmagick-binaries`（是可以直接安装的版本），然后选择最新版，

运行流程：
====

1. 打开命令行工具，把本repo clone到本地
	```
	git clone http://github.com/yuguo/gulp-qzone
	```
2. cd到本目录，运行`gulp`
	```
	gulp
	```

