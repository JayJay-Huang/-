
### 引用 \<vector>
```
#include <vector>
```
### 初始化
```
// 初始化
vector<int> v1;

// 初始化 (限定大小)
vector<int> v2(8); // 預設值為 0 
vector<int> v3(8,2); // 預設值為 2 

// 初始化
vector<int> v4{ 1,2,3 };

// 初始化 8 * 7 
vector<vector<bool>> v5(8, vector<bool>(7,true)); // 預設值 true
```

### 常用成員函數

```
// 初始化
vector<int> vet(10);

// bool 是否空值
cout << vet.empty();

// 尺寸
cout << vet.size();

// 回傳最後參數
cout << vet.back();

// 添加於尾端
vet.push_back(20);

// 刪除於尾端
vet.pop_back();
```





