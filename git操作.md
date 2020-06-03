## .gitconfig路径
用户主目录下的一个隐藏文件`.gitconfig`中

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
1. 上传之前执行 `git stash` （or 右键 Stash Changes）
2. 获取最新代码（`git pull`）
3. `git stash pop`
4. 解决冲突 (与相关人员协商)
5. 暂存 -> 提交 -> 推送

注：
1. 如果推送中提示需要更新代码，执行 `git reset --mixed head~`
2. 从步骤 1 重新开始


