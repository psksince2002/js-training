var a=[10,20,30,40,50,60,70]

for(i=0;i<a.length;i++){
    console.log(a[i])
}

a.push(80)
console.log(a)
a.pop()
console.log(a)
a.unshift(-10,0)
console.log(a)
a.shift()
console.log(a)
a.splice(2,0,20,30,40,50)
console.log(a)
a.splice(2,1)
console.log(a)