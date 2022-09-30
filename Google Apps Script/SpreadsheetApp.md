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
let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange("A2:B6").getValues();

console.log(values[0][0])
```
