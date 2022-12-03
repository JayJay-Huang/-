



# vector
```
#include <vector>
```

以下為 std::vector 內常用的成員函式
push_back：把元素加到尾巴，必要時會進行記憶體配置
pop_back：移除尾巴的元素
insert：插入元素
erase：移除某個位置元素, 也可以移除某一段範圍的元素
clear：清空容器裡所有元素
size：回傳目前長度
empty：回傳是否為空
[i]：隨機存取索引值為i的元素，跟傳統陣列一樣索引值從 0 開始
at(i)：隨機存取索引值為i的元素，跟上面 operator[] 差異是 at(i) 會作邊界檢查，存取越界會拋出一個例外
reserve()：預先配置大小

```
vector<int> num;
vector<int> num2(5); // 數量 5，內容預設 0
vector<int> num(5, 1); // 數量 5，內容預設 1
vector<string> straa{ "a","b" };
vector<vector<int>> dp{ 
    {11,21},
    {2} 
};
vector<vector<bool>> dp(2, vector<bool>(3, true));
```

```
vector<int> num(5, 1);
cout << num.empty(); // 0 // 返回是否為空值
cout << num.size(); // 5 // 元素個素
cout << num.back(); // 1 // 最後一元素
num.push_back(666); // 尾部新增
num.pop_back(); // 尾部刪除
```

# swap
```
swap(num[0], num[1]);
```