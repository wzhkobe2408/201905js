// 1. 一般大型项目技术负责人开一个公共的开发分支（远程分支，本地分支需要自己开），例如 dev_0829；如果项目比较小，你自己开分支；
// 2. 如果多人协作的项目，不要直接在公共开发分支上开发；而是基于公共开发分支再切一个个人开发分支，例如 dev_0829_bingo
// 3. 开辟自己的开发分支之后，在你自己的分支上 add 、commit
// 4. 开发结束后，把自己的开发分支上的代码合并到公共开发分支上即；dev_0829_bingo -> dev_0829

// 5. 合并自己的分支到公共开发分支步骤：
// 5.1 将本地分支切换到公共开发分支上：git checkout dev_0829
// 5.2 同步远程公共开发分支上的代码：git pull origin dev_0829
// 5.3 把自己的开发分支合并到公共开发分支上：git merge dev_0829_mabin --no-ff
// 5.4 如果有冲突，解决冲突；解决冲突后然后再 add 、commit；然后push到远程公共分支上：git push origin dev_0829

// 6. 如果提测，需要把 master 上的代码同步到公共开发分支上；master -> dev_0829
// 6.1 本地切换到 master 分支上：git checkout master
// 6.2 同步远程 master 代码到本地 master：git pull origin master
// 6.3 切换到开发分支上：git checkout dev_0829
// 6.4 把 master 合并到开发分支上：git merge master --no-ff
// 6.5 如果合并出现冲突，解决冲突；然后 add 、 commit；最后把代码push 到远程的开发分支上：git push origin dev_0829
// 6.6 此时提测，把分支发给 qa 或者 写在提测文档上；

// 7. 提测之后如果修改 bug，直接在公共的开发分支上修改，然后 add 、commit、pull、push
// 8. 上线：上线前还需要再次同步 master 的代码到分支上；重复 6.1 - 6.5 的操作；经过这一步之后去 gitlab 上提交 merge request
// 9. 提完 mr （merge request）以后找有权限的人合并；合并完之后执行上线流程；
