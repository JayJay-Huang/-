let gArr = [1,2,3,4,5];

// Arrey
function Array(){
    console.log(gArr);
};

// POP: 從尾部刪除，回傳值為刪除值
function pop(){
    let pop = gArr.pop();
    console.log(pop);
    console.log(gArr);
};

// shift: 從頭部刪除，回傳值為刪除值
function shift(){
    let shief = gArr.shift();
    console.log(shief);
    console.log(gArr);
};

// unshift: 從頭部加入元素，回傳值是增加完後之arr長度
function unshift(){
    let unshift = gArr.unshift({k:100});
    console.log(unshift);
    console.log(gArr);
};

// push: 從尾部加入元素，回傳值是增加完後之arr長度
function push(){
    let push = gArr.push(99);
    console.log(push);
    console.log(gArr);
};

// splice: 刪除從i(索引值)開始之後之元素(不包含i)，回傳值是被刪除的元素
function splice(){
    let splice = gArr.splice({K:100},2); // gArr.splice(i,n); i為索引值，n為個數
    console.log(splice);
    console.log(gArr);
};

// concat: 合併兩個arr，回傳值是合併後的arr(對原arr不影響)
function concat(){
    let concat = gArr.concat(['a','b']); // 如果concat()裡面放的是物件或值，結果會等於push()
    console.log(concat);
    console.log(gArr);
};

// split: 將string轉為array
function split(){
    let str = '123456789'
    let split_1 = str.split();
    let split_2 = str.split('');
    console.log(split_1); // split() 帶空值，會將字串轉成一個 ['123456789']
    console.log(split_2); // split('') 帶空字串，會將字串轉成 ['1', '2', '3','4', '5', '6','7', '8', '9']
};

// sort: 陣列排序，回傳值是排序後陣列
function sort(){
    let arr = [2, 10, 6, 1, 3 ];
    console.log(arr.sort()); // 預設按照最左邊數字排序

    let arr_1 = arr.sort((a,b)=>a-b); // 升冪
    let arr_2 = arr.sort((a,b)=>b-a); // 降冪
    console.log(arr_1);
    console.log(arr_2);
};

// reverse: 反轉，回傳值是反轉值
function reverse(){
    let arr_un = [1,2,3,4,5,6]
    let arr_rev = arr_un.reverse();
    console.log(arr_rev);
};

// slice: 裁剪array
function slice(){
    let arr_unslice = ['a','b','c','d','f'];
    let slice = arr_unslice.slice(1,3); // 輸入index值 (start,end)
    console.log(slice);
};

// foreach: 檢查陣列，無回傳值 ( callback: value-目前值 index-目前索引 array-原本arr)
function forEach(){
    let arr_3 = [1,2,3,4,5,6,7];
    arr_3.forEach((v, i, arr) => {
        console.log(
            'value: '+ v + '  ' +
            'index: '+ i + '  ' +
            'array: '+ arr + '  '
        );
    });
    arr_3.forEach((v, i) => {
        console.log(
            'index: '+ i + '  '
        );
    });
};

// map: 對映array，陣列中每個元素執行完該函式後，將結果回傳到一個新的陣列。不會改變原本array。若無回傳則顯示 undefined
function map(){
    let arr_4 = [1, 2, 3, 4, 9];
    let mapArr_1 = arr_4.map((value, index) => value = value * 2 );
    let mapArr_2 = arr_4.map(function (value, index, array) { return value * 2; }); // 有function就要有"return"
    console.log(arr_4);
    console.log(mapArr_1);
    console.log(mapArr_2);
    const arr_5 = [
        { itemName: "Book",price : 220 },
        { itemName: "Bag",price : 350 }
    ];
    let b = arr_5.map(x => x.itemName);
    console.log(b);
};

// filter: 過濾array，回傳滿足要求之array
function filter(){
    let arr_7 = [1,2,3,4,5,6,7,8,9];
    let filter = arr_7.filter((v,i,a) => {
        console.log('v:'+ v + '  i:'+ i + '  a:'+ a);
        return v >= 3;
    });
    console.log(filter);
};

// every: 依據條件判斷array元素，若「全部」滿足則回傳"true"
function every(){
    let arr_8 = [1,2,3,4];
    let every = arr_8.every(v => v < 5);
    console.log(every);
};

// some: 依據條件判斷array元素，若「有一」滿足則回傳"true"
function some(){
    let arr_9 = [1,2,3,4];
    let some = arr_9.some(v => v == 3);
    console.log(some);
};

// reduce(callback, initialValue): array累加，反覆運算array所有選項，從左到右合併，回傳計算結果。
function reduce(){
    let arr_1 = [1, 2, 3, 4, 5];
    let reduceArr_1 = arr_1.reduce((preValue, curValue) => {
        return preValue + curValue}, 1000);
    console.log(reduceArr_1);

    let arr_2 = ['A', 2, 3, 4, 5]; // 遇字串轉型
    let reduceArr_2 = arr_2.reduce((preValue, curValue) => {
      return preValue + curValue}, 1000);
    console.log(reduceArr_2);
};

// Array.from(): 將偽array轉為array。(只要有 length 就可以轉成array)(ES6新增)。
function Arrayfrom(){
    let str = 'kojh132134';
    console.log(Array.from(str));
    console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
    let obj = {
        0: 'a',
        1: 'b',
        length: 2
    };
    console.log(Array.from(obj)); // [ 'a', 'b']
};

// Array.of(): 將一組值轉為array，類似宣告array。(ES6新增)
function Arrayof(){
  	console.log(Array.of('11')); // ['11']
    console.log(new Array('11')); // ['11']
    // new Array()缺點為，參數問題引起的多載。
    console.log(Array.of(2)); // [2]
    console.log(new Array(2)); // [undefined, undefined]
};

// copyWithin(target, start, end): 在目前array內部，將指定位置的array複製到其他位置。會覆蓋原array，回傳目前array。
function copyWithin(){
    let arr = ['1','2','3','4','5'];
    let arr_1 = arr.copyWithin(2); // index:2
    let arr_2 = arr.copyWithin(2,); // index:2
    console.log(arr_1);
    console.log(arr_2); 
};

// find(callback): 找到第一個符合資格成員，回傳該單筆資料
function find(){
    let arr = [1,2,3,5,4,1];
    let arr_1 = arr.find(v => v > 3); // 5
    console.log(arr_1)
};

// findIndex(callback): 找到第一個符合資格成員，回傳該單筆資料「索引值」
function findIndex(){
    let arr = [1,2,3,5,4,1];
    let arr_1 = arr.findIndex(v => v > 3); // 3 (index從0開始計算)
    console.log(arr_1)
};

// fill(target, start, end): 使用指定的值，填充一個array。會改變原本array
function fill(){
    let arr = [1,2,3,4,5];
    let arr_1 = arr.fill('a', 2, 4); // start: 起始index，end: 結束index(不包含本身)
    console.log(arr); // [ 1, 2, 'a', 'a', 5 ]
    console.log(arr_1); // [ 1, 2, 'a', 'a', 5 ]
};

// includes(): 判斷是否包含指定的值，回傳值為 boolean。
// includes() 與 indexOf(): includes回傳boolean，indexOf回傳值。indexOf不能判斷NaN (回傳會為 -1)。
function includes(){
    let arr = ['a','b',1,2,3];
    console.log(arr.includes('b')); // true
    console.log(arr.includes('c')); // false
    let arr_2 = [1,2,3,NaN];
    console.log(arr_2.includes(NaN)); // true
    console.log('>>')
};

// keys(): 檢查array的鍵名
function keys(){
    let arr = [1,2,3,4];
    let keys = arr.keys();
    for(let k of keys){ console.log(k) }; // 0 1 2 3
    let arr_2 = [
        {num:1, name:'JJ'},
        {num:2, name:'KK'}
    ];
    let keys_2 = arr_2.keys();
    for(let k of keys_2){ console.log(k) }; // 0 1
};

// values(): 檢查array的鍵值
function values(){
    let arr = [1,2,3,4];
    let values = arr.values();
    for(let v of values){ console.log(v) }; // 1 2 3 4
};

// entries(): 檢查array的鍵名和鍵值
function entries(){
    let arr = [1,2,3];
    let ent = arr.entries();
    for(let e  of ent){ console.log(e) }; // [ 0, 1 ] [ 1, 2 ] [ 2, 3 ]
    let arr_2 = [
        {name:'JJ',num:1},
        {name:'KK',num:2}
    ];
    let ent_2 = arr_2.entries();
    for(let e of ent_2){ console.log(e) }
};
