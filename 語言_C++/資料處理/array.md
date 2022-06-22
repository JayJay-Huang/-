
#### 宣告
```
int aaa[2];
```
### 指派
```
aaa[0] = 100;
```

### 輸入
```
cin >> aaa[1];
```

### 輸出
```
cout << aaa[1];
```
### 取長度


```
// 取string array
string cars[3] = { "Volvo", "BMW", "Ford" };
int getLength1 = sizeof(cars) / sizeof(string);
cout << getLength1 << endl; // 3

// 取int array
int myNumbers[5] = { 10, 20, 30, 40, 50 };
int getLength2 = sizeof(myNumbers) / sizeof(int);
cout << getLength2 << endl; // 5
```
