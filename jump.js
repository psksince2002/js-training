var a=[1,2,3,4,5,6]

for(i=0;i<a.length;i++){
    if(i==3){
        continue;
    }
    if(i==5){
      break;
    }
    console.log(a[i])
}