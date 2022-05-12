#### 宣告
```
struct {
    int i = 10;
    string j = "ABC";
    bool b = true;
} myStruct;
cout << myStruct.i; // 10 // 取值
```
或
```
struct myStruct{
    int i = 10;
    string j = "ABC";
    bool b = true;
};
myStruct mySt;
cout << mySt.i; // 取值
```
#### 多個struct
```
struct {
    int i = 10;
    string j = "ABC";
    bool b = true;
} myStruct_1, myStruct_2, myStruct_3;
```