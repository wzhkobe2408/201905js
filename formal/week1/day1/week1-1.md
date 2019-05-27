<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## Github 和 git 基础操作


Git 代码管理工具，将本地代码上传到github上

Github 项目代码托管平台

你可以使用Git命令行或者图形化界面提交代码，到

### 注册github账户：www.github.com

### 安装git

### 用git关联Github

+ 1. 在gitHub上新建一个新的仓库（远程仓库）

+ 2. 将这个远程仓库 克隆到本地

+ 2.1 复制远程仓库的Git地址 ：https://github.com/giantbin/iLoveMyCode.git

+ 2.2 在本地的目录下（注意最好不要有中文），右键 git bash here 命令行窗口

+ 2.3 在命令行窗口内键入：git clone 仓库地址  回车

+ 2.4 等待下载完成

###  git仓库（本地仓库）

每个git仓库里面都有一个默认隐藏的 .git 文件夹【不要删除这个.git文件夹】

#### 查看本地仓库和哪个远程仓库有关联
``` javascript
git remote -v

origin https://github.com/xxxx.git(fetch)
origin https://github.com/xxxx.git(push)
```


### 将本地仓库中的文件上传到对应的远程仓库

#### 提交代码需要经历三个区

+ 工作区 本地文件夹
+ 暂存区 缓存区域
+ 历史区 针对本次提交，生成一个版本记录

#### 提交一个版本

+ git status 查看当前仓库状态
+ git add . 将工作区文件添加到暂存区
+ git status
    红色 说明当前文件在工作区
    绿色 说明当前文件在暂存区
+ git commit -m'本次版本的描述' 将暂存区文件 全部添加到历史区
+ git push origin master 将历史区文件 上传到远程仓库 (master是主干的意思) origin 对应的远程仓库的名称
+ 输入github用户名 密码


#### 将本地修改上传到远程仓库
+ 1. 修改文件
+ 1. git add .
+ 2. git commit -m'备注信息'
+ 3. git push origin master
+ 4. push 后有的需要你输入username 和 password

#### 正式课的讲义将会使用git仓库（联系clone仓库）

+ git clone 别人的远程仓库地址
+ git pull origin master 拉取别人的代码
+ 学生 把老师讲义克隆下来
    git clone https://git......
+ 以后每天 进入 xx仓库 代开命令行
    git pull origin master (拉取当天最新课件)

`如果是直接clone下来的仓库 默认已经关联了，不需要再建立关联`

#### 本地已有文件夹，变成git仓库，并且和远程指定仓库建立关联

+ 1. git init 把本地已有文件夹初始化成git仓库
+ 2. git remote add origin 远程仓库地址
+ 3. git remote -v 查看关联地址


### 常用Linux命令

#### 1. mkdir 创建文件夹

``` javascript
mkdir 文件命令
mkdir -p 11/22
```

#### 2. touch 创建文件

``` javascript
 touch 文件名.扩展名
 touch 1.js
```

#### 3. cat 查看文件内容

``` javascript
 cat 文件名
```

#### 4. vim 编辑文件
``` javascript
 vim 文件名
 i 修改
 esc 退出修改状态
 :w 保存
 :q 退出
 :wq 保存并退出
```

#### 5. cd 切换目录
``` javascript
 cd 目录名 进入某个目录
 cd ../ 切换到上一级
```

#### 6. pwd 查看当前所在路径
``` javascript
 pwd

```

#### 7. ls 插件当期目录下所有的文件
``` javascript
 ls -al 查看所有文件包含隐藏文件

```
#### 8. rm -rf 强制删除文件

``` javascript
 rm -rf 文件夹或者文件名
 rm -rf * 删除全部 (-r recursive -f force)

```

#### 9. find 查找

``` javascript
 find -name 文件名 根据文件名查找文件

```
#### 10. clear 清屏
``` javascript
clear
```




<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>