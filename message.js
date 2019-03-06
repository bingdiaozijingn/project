const express=require("express")();
const static=require("express-static");
const url=require("url");
const port=8080;
const mysql=require("mysql");
const sy=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"ursers",
	timezone:"08:00"
})
sy.connect();
// 获取数据
express.get("/get",(request,response)=>{
	sy.query(`SELECT * FROM work `,(error,data)=>{
		if(error){
			console.log("查询失败");
			response.end("error")
		}else{
			console.log("查询成功");
			response.end(JSON.stringify(data))

		}
	})
})
// 删除数据
express.get("/del",(request,response)=>{
	var id=url.parse(request.url,true).query.ID;
	sy.query(`DELETE FROM work WHERE ID="${id}"`,(error,data)=>{
		if(error){
			console.log("删除失败");
			response.end("error");
		}else{
			console.log("删除成功");
			response.end("success")
		}
	})
})
// 添加数据
express.get("/add",(request,response)=>{
	var ad=url.parse(request.url,true).query;
	var name=ad.name;
	var sex=ad.sex;
	var birthday=ad.birthday;
	var department=ad.department;
	var status=ad.status;
	var joinDate=ad.joinDate;
	var leaveDate=ad.leaveDate;
	var salary=ad.salary;
	var number=ad.number;
	var IDcard=ad.IDcard
	if(name&&sex&&birthday&&status&&number){
		sy.query(`INSERT INTO work (name,sex,birthday,department,status,joinDate,leaveDate,salary,number,IDcard) VALUES ("${name}","${sex}","${birthday}","${department}","${status}","${joinDate}","${leaveDate}","${salary}","${number}","${IDcard}")`,(error,data)=>{
			if(error){
				console.log(error);
				response.end("error");
			}else{
				console.log("添加${name}新员工成功");
				response.end("success");
			}
		});
	}else{
		console.log("添加用户失败");
		response.end("error")
	}
	
})

// 编辑数据
express.get("/edit",(request,response)=>{
	var ed=url.parse(request.url,true).query;
	var ID=ed.ID;
	var name=ed.name;
	var sex=ed.sex;
	var birthday=ed.birthday;
	var department=ed.department;
	var status=ed.status;
	var joinDate=ed.joinDate;
	var leaveDate=ed.leaveDate;
	var salary=ed.salary;
	var number=ed.number;
	var IDcard=ed.IDcard
	sy.query(`UPDATE work SET name="${name}",sex="${sex}",birthday="${birthday}",department="${department}",joinDate="${joinDate}",leaveDate="${leaveDate}",status="${status}",salary="${salary}",number="${number}",IDcard="${IDcard}" WHERE ID="${ID}"`,(error,data)=>{
		if(error){
			console.log("修改失败");
			response.end("error")
		}else{
			console.log("修改成功");
			response.end("success")
		}
	})

})








express.listen(port);
express.use(static(__dirname));
console.log(`server is running at ${port}`)