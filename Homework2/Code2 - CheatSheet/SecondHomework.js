'use strict';

var req = prompt("Choose the data structure you want to loop or check on: array, list, dictionary, sorted list, hashset, sortedset, queue, stack, linkedlist: ");

if (req == "array") {
    var ask = prompt("add/remove/get/set/check the existence of key/value: "):

    var arr = ["Zio", "Perone", "Bonucci"];
    if (ask == "add") {
        var adde = prompt("Insert the value to add: ");
        l = arr.length;
        arr[l+1] = adde;
    }

    else if (ask == "remove") {
        let i = 0;
        console.log("Printing the array:\n");
        while (i < arr.length) {
            console.log(arr[i]);
        }
        var rem = prompt("Which element do you want to remove?   ");
        i = 0;
        while(i<arr.length) {
            if (arr[i] == rem) {
                arr.splice(i,1);
                break;
            }
        }
    }

    else if (ask == "get") {
        console.log("The array length is "+arr.length);
        var i = 0;
        
        var get = prompt("Which index element do you want to get?");
        var res = arr[+get];   
    }

    else if (ask == "set"){
        var setEl = prompt("Give an element to set in the array: ");
        var setI = prompt("Give the index where to set it. Current array length is " +arr.length);
        arr.splice(+setI,0,setEl);
    }

    else if (ask == "check") {
        var check = prompt("Which element do you want to check if it is in the array? ");
        var i = 0;
        while (i < arr.length) {
            if (arr[i] == check) {
                console.log("True");
                break
            }
        }
        console.log("Scan finished");

    }

}

else if (req == "dictionary"){
    var dick = {
        "Ciccio": "Cornetto",
        "Grenbaud": 1,
        "Zeb": "Ban"
        
        };

    var ask = prompt("add/remove/get/set/check the existence of key/value");
    if (ask == "add") {
        var key = prompt("Insert the key you want to add: ");
        var valk = prompt("Insert the value you want to add to the key: ");
        dick.push({
            key: valk
        });
    }
    else if (ask == "remove") {
        var key = prompt("Choose the key to remove: ");
        if (dick.hasKey(key)) {
            delete dick[key];
        }
    }

    else if (ask == "get"){
        var key = prompt("Choose the key to get value of: ");
        var res = [];
        for (el in dick[key]) {
            res.push(el);
        }
    }

    else if (ask == "set") {
        var key = prompt("Choose the key to set the value of: ");
        var value = prompt("Choose the value to set: ")
        dick[key] = value;
    }

    else if (ask == "check") {
        var key = prompt("Choose the key to check: ");
        var value = prompt("Choose the value to check: ")
        if(dick.hasKey(key) && dick[key] == value)
            console.log("True");
        else
            console.log("False");

    }
}



else if (req == "hashset") {

    var hashs = new Set();
    hashs.add("Bho");
    hashs.add("Non");
    hashs.add("Lo");
    hashs.add("So");

    var ask = prompt("add/remove/get/set/check the existence of key/value"):
    if (ask == "add"){
        var value = prompt("Choose the value to add: ");
        hashs.add(value);
    }

    else if (ask == "remove") {
        var value = prompt("Choose the value to remove: ");
        hashs.delete(value);
    }

    else if (ask == "get") {
        var value = prompt("Choose the value to get: ");
        hashs.get(value);
    }


    else if (ask == "check") {
        var value = prompt("Choose the value to check: ");
        if(value in hashs)
            console.log("Value in");
        else
            console.log("Value out");
    }
}

else if (req == "queue"){

    var que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    var ask = prompt("add/remove/get/set/check the existence of key/value"):
    if (ask == "add"){
        var value = prompt("Choose the value to add: ");
        que.enqueue(value);
    }

    else if (ask == "remove") {
        hashs.dequeue();
    }

    else if (ask == "get") {
        hashs.peek();
    }


    else if (ask == "check") {
        var value = prompt("Choose the value to check: ");
        if(value in que.elements)
            console.log("Value in");
        else
            console.log("Value out");
    }

}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}


console.log('Hello world');
