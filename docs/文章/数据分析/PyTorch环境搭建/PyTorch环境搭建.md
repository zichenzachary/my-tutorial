# PyTorch环境搭建

> [!NOTE] 来源
> [最详细的 Windows 下 PyTorch 入门深度学习环境安装与配置 CPU GPU 版 | 土堆教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1S5411X7FY/)
>
> [Python 深度学习：安装 Anaconda、PyTorch（GPU 版）库与 PyCharm_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1cD4y1H7Tk?vd_source=bf57a3936cdb31aed71aab25cbdfbd70&spm_id_from=333.788.videopod.sections)

## 1. Anaconda 安装

进入 [Anaconda 官网](https://www.anaconda.com/download/success)，选择 Anaconda Distribution 进行下载安装，注意安装路径不能有中文和空格。

<p align="center"><img src="./assets/PyTorch环境搭建.png" width="450" alt="PyTorch环境搭建"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-1.png" width="450" alt="PyTorch环境搭建-1"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-2.png" width="450" alt="PyTorch环境搭建-2"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-3.png" width="450" alt="PyTorch环境搭建-3"></p>

## 2. 创建虚拟环境

打开 Anaconda Prompt 或 Anaconda PowerShell Prompt。

<p align="center"><img src="./assets/PyTorch环境搭建-4.png" width="450" alt="PyTorch环境搭建-4"></p>

有以下指令：

```bash
# 查看虚拟环境列表
conda env list

# 创建虚拟环境
conda create -n 虚拟环境名字 python=版本
# 或添加镜像加速
conda create -n 虚拟环境名字 python=版本 -c 镜像地址

# 激活虚拟环境
conda activate 虚拟环境名字
# 查看当前虚拟环境下的包
conda list
pip list
# 退出到base环境
conda deactivate

# 其他指令
# 查看当前Python版本
python --version
# 退出Python
exit() # 效果同Ctrl+Z+Enter
# 删除虚拟环境
conda remove -n 虚拟环境名字 --all
# 持久添加通道
conda config --add channels 通道地址
# 删除通道
conda config --remove channels 通道地址
# 查找具体包名
conda list | findstr 包名
pip list | findstr 包名
# 删除包
pip uninstall 包名
conda remove 包名
# 导出环境
conda env export > env.yml
pip freeze > requirements.txt
# 安装依赖
conda env update -f env.yml
pip install -r requirements.txt
```

可以使用以下三个镜像：

|镜像名|用于创建环境镜像地址|
| ------------------| --------------------|
|清华镜像|[https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main](https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main)|
|北京外国语大学镜像|[https://mirrors.bfsu.edu.cn/anaconda/pkgs/main](https://mirrors.bfsu.edu.cn/anaconda/pkgs/main)|
|阿里巴巴镜像|[http://mirrors.aliyun.com/anaconda/pkgs/main](http://mirrors.aliyun.com/anaconda/pkgs/main)|

## 3. 安装 PyTorch

### 3.1 判断 CUDA Runtime 版本

关于 CUDA Runtime 版本有两条准则：

- ​CUDA Runtime version ≤ CUDA Driver version（上限值）
- ​CUDA Runtime version 需支持显卡对应的算力（下限值）

#### 3.1.1 安装显卡驱动最新版本

进入 [Nvidia 官网](https://www.nvidia.cn/drivers/lookup/)，选择产品类型查找对应驱动。

<p align="center"><img src="./assets/PyTorch环境搭建-5.png" width="450" alt="PyTorch环境搭建-5"></p>

选择 Game Ready 驱动进行下载。

<p align="center"><img src="./assets/PyTorch环境搭建-6.png" width="450" alt="PyTorch环境搭建-6"></p>

#### 3.1.2 确定 CUDA Driver 版本

打开命令行窗口或 Anaconda Prompt，输入以下指令：

```bash
nvidia-smi
```

<p align="center"><img src="./assets/PyTorch环境搭建-7.png" width="650" alt="PyTorch环境搭建-7"></p>

即 CUDA Driver 版本为 13.0，所以 CUDA Runtime 版本最高为 13.0。

#### 3.1.3 确定显卡算力

进入 [维基百科](https://zh.wikipedia.org/wiki/CUDA)，查看显卡对应的算力。

<p align="center"><img src="./assets/PyTorch环境搭建-8.png" alt="PyTorch环境搭建-8"></p>

可以看出 CUDA Runtime 版本至少需要为 11.0。

<p align="center"><img src="./assets/PyTorch环境搭建-9.png" alt="PyTorch环境搭建-9"></p>

### 3.2 安装 PyTorch

CUDA Runtime 版本为 11.0~13.0 之间，进入 [PyTorch 官网](https://PyTorch.org/get-started/locally/)，选择高版本进行安装。

<p align="center"><img src="./assets/PyTorch环境搭建-10.png" alt="PyTorch环境搭建-10"></p>

进入创建好的虚拟环境，运行官网上的指令：

```bash
pip3 install torch torchvision --index-url https://download.PyTorch.org/whl/cu129
```

### 3.3 验证 PyTorch

1. 激活对应的虚拟环境（安装 PyTorch 的虚拟环境）：`conda activate 虚拟环境名字`
2. 输入 `conda list`，看有没有 PyTorch 或者 torch
3. 输入 `python`
4. 输入 `import torch`
5. 输入 `torch.cuda.is_available()`
6. 如果显示 True，就说明 PyTorch 安装成功了

## 4. PyCharm 的安装与设置

### 4.1 PyCharm 的安装

进入 [PyCharm 官网](https://www.jetbrains.com/zh-cn/pycharm/download/?section=windows)，点击下载。

<p align="center"><img src="./assets/PyTorch环境搭建-11.png" alt="PyTorch环境搭建-11"></p>

安装时勾选下列选项：

<p align="center"><img src="./assets/PyTorch环境搭建-12.png" width="450" alt="PyTorch环境搭建-12"></p>

### 4.2 PyCharm 的设置

#### 4.2.1 项目设置

进入 PyCharm 后，选择 `文件-新建项目`，进行如下设置:

<p align="center"><img src="./assets/PyTorch环境搭建-13.png" alt="PyTorch环境搭建-13"></p>

使用 Python 控制台运行：

<p align="center"><img src="./assets/PyTorch环境搭建-14.png" width="300" alt="PyTorch环境搭建-14"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-15.png" alt="PyTorch环境搭建-15"></p>

配置 Terminal：找到 Anaconda Prompt 位置（`C:\Windows\system32\cmd.exe`），并在 Settings 中进行设置。

<p align="center"><img src="./assets/PyTorch环境搭建-16.png" width="425" alt="PyTorch环境搭建-16"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-17.png" alt="PyTorch环境搭建-17"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-18.png" width="300" alt="PyTorch环境搭建-18"></p>

#### 4.2.2 主题字体设置

可在插件中下载主题。

<p align="center"><img src="./assets/PyTorch环境搭建-19.png" alt="PyTorch环境搭建-19"></p>

设置字体，若出现如下提示，则表示当前字体遵循主题设置，需要点击蓝色文字，跳转到配色方案中进行调整。

<p align="center"><img src="./assets/PyTorch环境搭建-20.png" alt="PyTorch环境搭建-20"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-21.png" alt="PyTorch环境搭建-21"></p>

设置控制台字体（改为 15）：

<p align="center"><img src="./assets/PyTorch环境搭建-22.png" alt="PyTorch环境搭建-22"></p>

#### 4.2.3 快捷键设置

设置 `Ctrl+鼠标滚轮` 缩放字体大小：

<p align="center"><img src="./assets/PyTorch环境搭建-23.png" alt="PyTorch环境搭建-23"></p>

#### 4.2.4 导入/导出设置

<p align="center"><img src="./assets/PyTorch环境搭建-24.png" width="350" alt="PyTorch环境搭建-24"></p>

### 4.3 给下载项目进行环境配置（补充）

1. 利用 PyCharm 打开项目：File -> Open
2. 配置对应的虚拟环境：File -> Setting -> Project -> Python 解释器，然后选择对应的虚拟环境，没有的话点击 `Add interpreter` ​或下拉选择 `Show All…` ​添加

<p align="center"><img src="./assets/PyTorch环境搭建-25.png" alt="PyTorch环境搭建-25"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-26.png" alt="PyTorch环境搭建-26"></p>

3. 直接运行代码，右键 -> run
4. 如果提示某些包没有发现，大家可以用
    1. ​`conda install 包名`
    2. ​`pip install 包名`
    3. 利用搜索引擎找找原因 - 包名不对，通道不对，或者其他原因
5. 可选 — 最好把 `requirements..txt` ​文件的内容当作参考，有选择性的使用。也可以 `cd` ​到项目位置并执行 `pip install -r requirements.txt`。

## 5. Jupyter 的安装与配置

### 5.1 Jupyter 的安装

Anaconda 的 base 环境中已经安装了 Jupyter，但自己创建的环境中还需要手动安装，执行以下指令：

```bash
# 进入虚拟环境
conda activate 虚拟环境名字

# 安装jupyter需要的包
conda install ipykernel ipython jupyter
pip3 install notebook
pip3 install jupyter_nbextensions_configurator

# 也可用pip安装
pip3 install ipykernel
pip3 install ipython
pip3 install jupyter

# 将当前虚拟环境注册为Jupyter可用内核
ipython kernel install --name "虚拟环境名字" --user
# 完成后打开jupyter notebook
jupyter notebook
```

### 5.2 修改 Jupyter 工作路径

进入装有 Jupyter 的环境中，输入以下命令：

```bash
jupyter notebook --generate-config
```

<p align="center"><img src="./assets/PyTorch环境搭建-27.png" alt="PyTorch环境搭建-27"></p>

在 `jupyter_notebook_config.py` ​（以记事本方式打开）中使用 `Ctrl+F` 查找并修改如下配置项：``

- 修改前：`# c.ServerApp.notebook_dir = ''`
- 修改后：`c.ServerApp.notebook_dir = 'D:\Jupyter'`

即删除前面的 `#` ​号注释，在后面的单引号里输入要设置的目录路径。**注意**：`'D:\Jupyter'` ​和该语句的前面都不能有空格，否则 Jupyter 打开就闪退。

此时 Jupyter 的工作路径已被切换为 `D:\Jupyter`​。如果想用快捷方式来启用 Jupyter，还需要找到 `快捷方式-右键属性-快捷方式-目标`，删除最后的 "%USERPROFILE%"。

<p align="center"><img src="./assets/PyTorch环境搭建-28.png" width="450" alt="PyTorch环境搭建-28"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-29.png" width="450" alt="PyTorch环境搭建-29"></p>

### 5.3 Jupyter Notebook 常用快捷键

| 快捷键              | 对应操作            |
| ---------------- | --------------- |
| ​`Ctrl+Shift +H` | 快捷键菜单           |
| ​`Enter`         | 进入编辑模式          |
| ​`Esc`           | 退出到命令模式         |
| ​`Y`             | 把单元格变成代码块       |
| ​`M`             | 把单元格变成 Markdown |
| ​`R`             | 把单元格变成 Raw      |
| ​`X`             | 剪切              |
| ​`C`             | 复制              |
| ​`V`             | 粘贴到下面           |
| ​`Shift+V`       | 粘贴到上面           |
| ​`Z`             | 撤销              |
| ​`DD`            | 删除              |
| ​`Shift+Enter`   | 运行代码块，选择下面的代码块  |
| ​`Ctrl+Enter`    | 运行代码块           |
| ​`Alt+Enter`     | 运行代码块并目插入下面     |
| ​`A`             | 在上面插入代码块        |
| ​`B`             | 在下面插入代码块        |
| ​`Shift+L`       | 显示行号            |
| ​`Shift+Esc`     | 关闭控制台           |

### 5.4 指定 Chrome 为启动浏览器（补充）

找到 Chrome 位置：`C:\Program Files\Google\Chrome\Application\chrome.exe`。

在 `jupyter_notebook_config.py` ​（以记事本方式打开）中使用 `Ctrl+F` ​查找 `c.ServerApp.browser = ''` ​，在下方插入以下代码（注意是两个 `\`）。

```bash
import webbrowser
webbrowser.register("chrome",None,webbrowser.GenericBrowser(u"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"))
c.NotebookApp.browser = 'chrome'
```

## 6. VSCode 配置

VSCode 功能强大，可以使用 VSCode+Anaconda 运行 `py` 和 `ipynb` 文件。

首先，在环境变量 -> Path 中添加以下变量。

<p align="center"><img src="./assets/PyTorch环境搭建-30.png" width="500" alt="PyTorch环境搭建-30"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-31.png" width="500" alt="PyTorch环境搭建-31"></p>

在 VSCode 中安装 Python 和 Jupyter 插件。

<p align="center"><img src="./assets/PyTorch环境搭建-32.png" width="500" alt="PyTorch环境搭建-32"></p>

<p align="center"><img src="./assets/PyTorch环境搭建-33.png" width="500" alt="PyTorch环境搭建-33"></p>

打开 Python 项目，在顶部或底部选择 Anaconda 环境和 Python 解释器。

<p align="center"><img src="./assets/PyTorch环境搭建-34.png" alt="PyTorch环境搭建-34"></p>

