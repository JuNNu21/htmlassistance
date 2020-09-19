//var student = function()
function Student(name,city){
    this.name=name;
    this.city=city;
    this.getDetails = function(){
        console.log('Welcome', this.name,'from', this.city)
    
    }

}
var stud = new Student('Swarnim','BLR');
console.log(stud)
stud.getDetails();

var stud1 = new Student('Shikhar','Patna');
console.log(stud1);
stud1.getDetails();

Student.prototype.studId = 90;
Student.prototype.greetmessage = (username)=>{
    console.log('Great day', this.name);
}
stud.greetmessage();