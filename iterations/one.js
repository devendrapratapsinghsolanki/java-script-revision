for (let  i=0; i <=10; i++){

    if ( i ===7){
        console.log("Thala for a Reason");
        break;

    }
    console.log(i);

}


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value of iteration: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`  Inner loop value of iteration j: ${j} & Inner loop value of iteration i: ${i}`);
    }
}