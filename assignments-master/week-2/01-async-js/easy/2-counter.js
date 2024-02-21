let count = 0;
function counter() {
    console.clear();                                      
    console.log(count);
    count++;
    if(count <= 10) {
        setTimeout(counter, 1000);
    }
}

counter();
