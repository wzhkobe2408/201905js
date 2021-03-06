// git仓库：
// 本地仓库：一个有.git文件夹的目录；git会收集.git所在目录的所有变更，包含文件的修改、删除、新增、和替换；

// 远程仓库：在远程服务器上的git仓库；常见项目托管：github、coding（coding用起来和github一样，但是coding在国内，速度快）、公司自己搭建的gitlab；

// 新建远程仓库：登录github账户 -> new -> 填写仓库信息 -> create repository

// 把远程仓库克隆到本地：git clone 仓库地址
// 1. 找到你想放这个仓库的目录，右键git bash here
// 2. git clone 仓库地址


// 查看当前git仓库的配置信息
// git config --list

// 查看当前本地仓库和哪个远程仓库是连接的
// git remote -v

// origin  https://github.com/handsomeBingo/test1.git (fetch)
// origin  https://github.com/handsomeBingo/test1.git (push)

// git 的三个区：工作区、暂存区、历史区（暂存区、历史区是在版本库中）

// 工作区：就是当前的仓库目录，我们可以在这里做任何的修改；
// 暂存区：准备成为版本的修改；
// 历史区：已经成为版本的修改，只有放到历史区才能成为版本；

// 创建一个版本
// touch 文件名.拓展名 新建一个文件

// vim 文件名 编辑文件
// i 表示插入（可以向文件中插入）
// esc 退出编辑状态
// :w 保存
// :q 退出
// :wq 保存并退出
// :q! 强制退出

// 1. 首先在本地的git仓库中修改一些东西
// 2. git status 【查看本地仓库的状态】
// 如果文件为红色，表示这些文件处于工作区

// 3. 把工作区中文件添加到暂存区
// git add . 或者 git add 文件名 【当你的仓库中有的需要提交，有的不需要提交，就使用文件名一个一个add】

// 4. 添加到暂存区以后检查仓库状态：git status
// 如果文件变绿了，说明文件已经添加到暂存区了

// 5. 如果你添加完之后后悔了执行：
// git rm --cached 文件名 【把添加到暂存区中的文件删除掉】

// 6. 或者使用暂存区文件覆盖工作区中的文件【这种撤销要求暂存区中有这个文件】
// git checkout 文件名

// 7. 把暂存区中的修改添加到历史区：
// git commit -m'本次提交的描述' 【执行过commit之后修改就成为一个版本了】
// commit之后会形成一个版本，每个版本都有一个id（叫做版本号）

// 8. 把本地的版本库同步到远程仓库，先pull再push
// git pull origin master
// git push origin master

// git diff 比较这次修改改了哪些东西；

// 回滚：回退到某个版本
// 1. 查看版本库中的历史记录， 记录中有每次提交的版本号以及对应的注释；通过版本号，可以回退到任何版本；
// git log 【查看所有的版本记录（提交记录）】

// 2. 从提交记录中找到你要回滚的版本号
// git reset --hard 版本号

// 3. 回滚后，要push到远程仓库，远程仓库中的内容才会跟着回滚；
// 回滚后push需要强推
// git push origin master -f 【-f表示强制】

// 不要轻易回滚，如果上线有bug，如果不严重（不影响用户使用），紧急修复，然后紧急上线；





