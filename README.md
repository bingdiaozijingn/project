# 员工信息管理系统

<hr>

###技术：

 前端：Vue，axios,elementui
 
 后端：node(express,express-static,url,mysql)
 
 
 测试地址：
 
 公网：http://39.98.85.98:8080/message.html
 
##员工信息数据接口

 
####获取数据接口：

公网：http://39.98.85.98:8080/get

返回数据：json

请求方式：get，http

请求事例：http://39.98.85.98:8080/get

####请求参数说明：无

####返回参数说明

<table>
    <thead>
        <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ID</td>
            <td>int（5）</td>
            <td>员工编号</td>
        </tr>
         <tr>
            <td>name</td>
            <td>varcher</td>
            <td>姓名</td>
        </tr>
         <tr>
            <td>sex</td>
            <td>int（1）</td>
            <td>性别</td>
        </tr>
         <tr>
            <td>birthday</td>
            <td>date</td>
            <td>出生日期</td>
        </tr>
        <tr>
            <td>department</td>
            <td>varcher</td>
            <td>所属部门</td>
        </tr>
        <tr>
            <td>status</td>
            <td>int</td>
            <td>在职状态</td>
        </tr>
        <tr>
            <td>joinDate</td>
            <td>date</td>
            <td>入职时间</td>
        </tr>
        <tr>
            <td>leaveDate</td>
            <td>date</td>
            <td>离职时间</td>
        </tr>
        <tr>
            <td>salary</td>
            <td>int</td>
            <td>工资</td>
        </tr>
        <tr>
            <td>IDcard</td>
            <td>varchar</td>
            <td>身份证号码</td>
        </tr>
        <tr>
            <td>number</td>
            <td>varchar</td>
            <td>联系方式</td>
        </tr>
    </tbody>
</table> 

###删除数据接口

公网：http://39.98.85.98:8080/del

###返回数据说明：

<table>
    <thead>
        <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
        </tr>
        <tr>
            <td>success</td>
            <td>string</td>
            <td>删除员工成功</td>
        </tr>
        <tr>
            <td>error</td>
            <td>string</td>
            <td>删除员工失败</td>
        </tr>
    </thead>
</table>

###添加数据接口    

公网：http://39.98.85.98:8080/add

<table>
    <thead>
        <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ID</td>
            <td>int（5）</td>
            <td>员工编号</td>
        </tr>
         <tr>
            <td>name</td>
            <td>varcher</td>
            <td>姓名</td>
        </tr>
         <tr>
            <td>sex</td>
            <td>int（1）</td>
            <td>性别</td>
        </tr>
         <tr>
            <td>birthday</td>
            <td>date</td>
            <td>出生日期</td>
        </tr>
        <tr>
            <td>department</td>
            <td>varcher</td>
            <td>所属部门</td>
        </tr>
        <tr>
            <td>status</td>
            <td>int</td>
            <td>在职状态</td>
        </tr>
        <tr>
            <td>joinDate</td>
            <td>date</td>
            <td>入职时间</td>
        </tr>
        <tr>
            <td>leaveDate</td>
            <td>date</td>
            <td>离职时间</td>
        </tr>
        <tr>
            <td>salary</td>
            <td>int</td>
            <td>工资</td>
        </tr>
        <tr>
            <td>IDcard</td>
            <td>varchar</td>
            <td>身份证号码</td>
        </tr>
        <tr>
            <td>number</td>
            <td>varchar</td>
            <td>联系方式</td>
        </tr>
    </tbody>
</table> 

###返回参数说明：

<table>
    <thead>
        <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
        </tr>
        <tr>
            <td>success</td>
            <td>string</td>
            <td>添加新员工成功</td>
        </tr>
        <tr>
            <td>error</td>
            <td>string</td>
            <td>添加新员工失败</td>
        </tr>
    </thead>
</table>

###修改数据接口

公网：http://39.98.85.98:8080/edit

###返回参数说明：

<table>
    <thead>
        <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
        </tr>
        <tr>
            <td>success</td>
            <td>string</td>
            <td>编辑员工成功</td>
        </tr>
        <tr>
            <td>error</td>
            <td>string</td>
            <td>编辑员工失败</td>
        </tr>
    </thead>
</table>







