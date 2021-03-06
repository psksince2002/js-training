let obj={
    a:20,
    b:30,
    add: function(){
        console.log(this)
        console.log(this.a+this.b)
    }
}
obj.add()