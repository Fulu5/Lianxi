## .gitconfig路径
用户主目录下的一个隐藏文件`.gitconfig`中

## 返回上一次所在目录

`cd -`
`cd $OLDPWD`

## stash
`git stash list`

`git stash drop @stash{0}`

`git stash clear` //清除所有

## 一次性提交所有改动
`git commit -a -m 'committing all changes'`

## 修改commit
`git commit --amend`

## 撤销commit
`git reset --mixed HEAD^` //保留工作区修改 -> 工作区

`git reset --soft HEAD^` //保留工作区修改 -> 暂存区

`git reset --hard HEAD^` //删除工作区修改

## 修改已经push的注释
* 1. `git rebase -i head~1`
* 2. 进入编辑状态
* 3. 修改需要更改的提交开头的 `pick` 为 `edit`
* 4. 退出编辑状态
* 5. `git commit --amend`
* 6. 进入编辑状态
* 7. 修改提交注释
* 8. 退出编辑状态
* 9. `git rebase --continue`
* 10. `git push --force origin master`

## 修改文件名大小写
### 方法1：
* 1.`git config --global core.ignorecase false` //设置本地git环境识别大小写
* 2.修改文件名称，push
* 3.`git rm --cached src/components/Header/filename -r` //删除多余的文件
* 4.push
### 方法2：
`git config core.ignorecase` 默认为`true`时使用

`git mv src/components/Header/TWTask src/components/Header/TwTask`

## 配置别名
`git config --global alias.uncommit 'reset --soft HEAD^'`

## 全局配置用户名 邮箱
`git config --global user.name "github's Name"`

`git config --global user.email "github@xx.com"`

## 解决多次提示输入用户名
`git config --global credential.helper store`

## git多人协作基本流程
1. 写完代码执行 `git stash push -u` （or 右键 Stash Changes）
2. 获取最新代码（`git pull`）
3. `git stash pop`
4. 解决冲突 (与相关人员协商)
5. 暂存 -> 提交 -> 推送

注：
1. 如果推送中提示需要更新代码，执行 `git reset --mixed head~`
2. 从步骤 1 重新开始


## git-svn使用
1. 将svn仓库中的项目导入本地git仓库
   `git svn clone https://xxx`
   1. `git svn init https://xxx`
   2. `git svn fetch`
2. 提交本地git仓库更新到svn仓库
   1. `git commit -am 'commit_info'` - 工作区的修改提交到本地仓库
   2. `git svn dcommit` - 将本地仓库的修改同步到远程svn仓库
3. 从svn仓库更新到本地git仓库
   1. `git svn rebase`


