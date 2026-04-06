export class UserService{

   users:{id:number,name:string,age:number,gender:string,isMarried:boolean}[] =[
    {id:1,name:"Rupali",age:23,gender:"Female",isMarried:false},
    {id:2,name:"Simarn",age:22,gender:"Female",isMarried:false},
    {id:3,name:"Rohan",age:24,gender:"Male",isMarried:false},

  ]

  getAllUser(){
    return  this.users;
  }

  getUsersById(id:number){
    return this.users.find(x=>x.id===id);

  }
  createUser(user:{id:number,name:string,age:number,gender:string,isMarried:boolean}){
     this.users.push(user);
      
    
  }
}