# Google Drive [SpreadsheetApp]
## Open Spreadsheets
- Similar to the DocumentApp, we can use ```SpreadsheetApp.openById()``` in the SpreadsheetApp to open a spreadsheet.
- The function call takes the file id as an argument.

---
## Printing Cell Values
- The ```getRange().getValues()``` syntax is used to print cell values.<br/>

- The ```getRange()``` method takes the table range and the ```getValues()``` method returns the values in that range as a <strong><em>nested array</em></strong>.<br/>

<br/>
### <br />Code Example:

```JavaScript
let id = '1QE4Zf1b_Sw7sss8efMoHKGOEFCk2J2pZHyXGT_nPueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange("A3:C9").getValues();

console.log(values[0][0])
```
- The code snippet above prints the value at cell A3. Since this is a nested array, the indexing [0]&nbsp;[0] returns the first element in the array of values returned.
---

## Example Exercise 1:
- Suppose we have a table with 2 columns A and B, and 6 rows.
- If we want to print all the values of column A first and then all the values of column B, we will use the following code snippet.

### <br />Code Example:
```JavaScript
let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let columnA = sheet.getRange('A1:A6').getValues();
let columnB = sheet.getRange('B1:B6').getValues();

for (let row of columnA) {
    for (let value of row) {
        console.log(value);
    }
}

for(let row of columnB){
    for(let value of row){
        console.log(value)
    }
}
```
- In this code snippet, we read the spreadsheet into the sheet variable. <br/>

- Then we get the values of column A into the variable columnA and we do the same for column B.<br/>

- Then we traverse the Nested Array returned for column A and print all its values and then we do the same for column B.<br/>

- The output of the code is all the values of column A are printed first, then all the values of column B are printed.
---

## Example Exercise 2:
Suppose we have the following table

|   | A        | B        |
|---|----------|----------|
| 1 | CUSTOMER | CURRENCY |
| 2 | Bob      | USD      |
| 3 | Jay      | INR      |
| 4 | Vikram   | INR      |
| 5 | Akhil    | GBP      |
| 6 | Raj      | USD      |
| 7 | Manisha  | GBP      |
| 8 | Priyanka | GBP      |
| 9 | Alisha   | GBP      |

- Here the column name A and B are used by Sheets to index columns. It is not a part of the table data. <br />

- The sl. nos. 1-9 are used by Sheets to index rows. It is not a part of the table data.<br />

- <strong>Question:</strong> Find out how many customers are paying with INR.

### <br />Code Example:

```JavaScript
let id = 'oHnPZf1b_Sw7ssFCk2KGOEHyXGT_1QE4pZs8efMJ2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let vals = sheet.getRange('B1:B8').getValues();
let rupeeCount = 0;
for (let row of vals) {
    for (let cell of row) {
        if(cell === 'INR'){
            rupeeCount++;
        }
    }
}
console.log(rupeeCount + ' customers are paying with INR.');
```

<strong>Output:</strong>  &nbsp;&nbsp; 2 customers are paying with INR.

---
## <em>We will be applying the skills learnt here in the Sum-Up Module.</em>