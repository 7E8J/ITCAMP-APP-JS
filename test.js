const student = {
  firstName:"โจนาธาน", 
  lastName:"โจสตาร์", 
  id:"65070001",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  course: ["Math","Eng","Com"]
};

console.log(student.course)