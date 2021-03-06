try{
    a=28;
    b=0;
    if(b==0){
     throw b;
    }
    else{
        console.log('divison ',a/b)
    }
}

catch(c){
 console.log('b value is ',c)
}

finally{
    console.log('process ended')
}