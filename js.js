function ratarata(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += parseInt(array[i])
    }
    var rata = sum / array.length;
    return rata;
}

function median(array) {
    var half = Math.floor(array.length / 2);

    array.sort(function(a, b) { return a - b; });

    if (array.length % 2) {
        return array[half]
    } else {
        return (array[half - 1] + array[half]) / 2.0;
    }
}

function highest(array) {
    return Math.max(...array);
}

function lowest(array) {
    return Math.min(...array);
}

function hitung() {
    var nilai1 = (document.getElementById("1").value);
    var nilai2 = (document.getElementById("2").value);
    var nilai3 = (document.getElementById("3").value);
    var nilai4 = (document.getElementById("4").value);
    var nilai5 = (document.getElementById("5").value);

    let array = [nilai1, nilai2, nilai3, nilai4, nilai5];

    document.getElementById("average").innerHTML = ratarata(array);
    document.getElementById("nilaitengah").innerHTML = median(array);
    document.getElementById("nilaimaks").innerHTML = highest(array);
    document.getElementById("nilaimin").innerHTML = lowest(array);
}

function reset() {
    document.getElementById("form").reset();
    document.getElementById("average").innerHTML = " ";
    document.getElementById("nilaitengah").innerHTML = " ";
    document.getElementById("nilaimaks").innerHTML = " ";
    document.getElementById("nilaimin").innerHTML = " ";
}