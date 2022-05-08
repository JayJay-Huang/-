### 去除重複的array object

```
// To remove duplicates
function removeDouble(pOriginalArray, pProp){
    let vNewArray = [];
    let lookupObject  = {};
    for(let i in pOriginalArray){
        lookupObject[pOriginalArray[i][pProp]] = pOriginalArray[i];
    };
    for(let i in lookupObject) {
        vNewArray.push(lookupObject[i]);
    };
    return vNewArray;
};
```