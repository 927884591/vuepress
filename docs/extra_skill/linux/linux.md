## 文件管理类

### ls 命令

ls [option] [flie]

> 展示目录文件

| -a  | 显示所有文件及目录 (包括以“.”开头的隐藏文件)     |
| --- | ------------------------------------------------ |
| -l  | 使用长格式列出文件及目录信息                     |
| -r  | 将文件以相反次序显示(默认依英文字母次序)         |
| -t  | 根据最后的修改时间排序                           |
| -A  | 同 -a ，但不列出 “.” (当前目录) 及 “..” (父目录) |
| -S  | 根据文件大小排序                                 |
| -R  | 递归列出所有子目录                               |

```
ls -a //展示当前目录的所有文件，包括隐藏文件。
ls -l //展示当前目录的中的文件并且列出详细信息。
ls -a /home    //	展示/home目录中的文件
```

### cp 命令

cp [option] [file] [dire]

> copy 的缩写，复制文件到指定目录

| f   | 若目标文件已存在，则会直接覆盖原文件                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| -i  | 若目标文件已存在，则会询问是否覆盖                                                           |
| -p  | 保留源文件或目录的所有属性                                                                   |
| -r  | 递归复制文件和目录                                                                           |
| -d  | 当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录 |
| -l  | 对源文件建立硬连接，而非复制文件                                                             |
| -s  | 对源文件建立符号连接，而非复制文件                                                           |
| -b  | 覆盖已存在的文件目标前将目标文件备份                                                         |
| -v  | 详细显示 cp 命令执行的操作过程                                                               |
| -a  | 等价于“dpr”选项                                                                              |

### mv 命令

> move 的缩写，移动指定文件到指定目录，也可以给文件重命名。

| -i  | 若存在同名文件，则向用户询问是否覆盖                         |
| --- | ------------------------------------------------------------ |
| -f  | 覆盖已有文件时，不进行任何提示                               |
| -b  | 当文件存在时，覆盖前为其创建一个备份                         |
| -u  | 当源文件比目标文件新，或者目标文件不存在时，才执行移动此操作 |

```
[happy@localhost ~]$ mv 2.txt 4.txt				//把2.txt重命名问4.txt
[happy@localhost ~]$ mv 1.txt 4.txt 3.txt ./test     //把1.txt，4.txt,3.txt文件移动到./test文件夹中
```

## 系统管理类

### find 命令

find [range] [option] [flie or dire]

> 查找指定目录下的文件，

| -name  | 按名称查找 |
| ------ | ---------- |
| -size  | 按大小查找 |
| -user  | 按属性查找 |
| -type  | 按类型查找 |
| -iname | 忽略大小写 |

```
[happy@localhost ~]$ find ./ -name "*.txt"			//查找当前目录下的所有.txt扩展名的文件
[happy@localhost ~]$ find ./ -size +1M 					//查找当前目录下大于1M的所有文件
```

### chmod 命令

> 文件或目录的权限管理命令

| -c  | 若该文件权限确实已经更改，才显示其更改动作                               |
| --- | ------------------------------------------------------------------------ |
| -f  | 若该文件权限无法被更改也不显示错误讯息                                   |
| -v  | 显示权限变更的详细资料                                                   |
| -R  | 对目前目录下的所有文件与子目录进行相同的权限变更(即以递回的方式逐个变更) |

将档案 file1.txt 设为所有人皆可读取：

```
[root@linuxcool ~]# chmod a+r file.txt
```

将目前目录下的所有文件与子目录皆设为任何人可读取 :

```
[root@linuxcool ~]# chmod -R a+r *
```

将 file.txt 设定为只有该文件拥有者可以执行：

```
[root@linuxcool ~]# chmod u+x file.txt
```