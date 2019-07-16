// 项目中使用git不是每次都需要输入密码，输入密码效率低；而是使用一个ssh-key的东西；

// ssh-key是建立ssh连接时需要的公钥；这个公钥存储在你的机器（电脑）上，通过命令行生成的，生成以后要把这个公钥放到github或者gitlab上；

// 等下一次建立ssh连接时（pull和push），会自动从你的机器上读取这个秘钥，然后带着公钥一起去github或者gitlab的服务器上，github或者gitlab服务器会比对你带来的秘钥和之前放在github上或者gitlab上的是否一样；如果一样，就不需要再输入密码了直接就可以进行操作了；

// 使用ssh-key的步骤：

// 1. 生成ssh-key
// 1.1 进入家目录，在git bash 中输入：cd  ~
// 1.2 进入到.ssh：cd .ssh/ ，如果没有.ssh ，需要新建.ssh 文件夹:mkdir .ssh ，然后再 cd .ssh/
// 1.3 生成ssh-key:  ssh-keygen 一路回车
// 1.4 cat id_rsa.pub 把输出的内容复制
// 1.5 把ssh-key添加到github或者gitlab
// 1.6 后面再clone项目时改用SSH协议，以后所有的操作都不需要密码；