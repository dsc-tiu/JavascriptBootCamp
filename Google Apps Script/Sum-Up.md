# Sum-Up 
- In this section we will try to use all our knowledge of manipulating files in the Google Drive, Docs and Sheets to automate a task. <br />

- We will try to automate the task of creating wedding invitation cards but this can be used for other purposes as well.<br />

- If you think about it, you will come to realize that a wedding invitation card is essentially the same for everyone except the Name of the person and a few other key details.

- The intuition is to create the first card and then follow it like a template to create all the other cards until you are done creating all the cards necessary.

- We will use DriveApp, DocumentApp, and SpreadsheetApp to automate this process.
---
## Step 1: Create a Copy of the File
- Use DriveApp to create a copy of a invitation card template document from Docs.
- Rename the copy.
- Returns its id.

```javascript
let fileId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
  
function makeCopy(id, name) {
    let file = DriveApp.getFileById(id);
    let copy = file.makeCopy(name);
    return copy.getId();
}

console.log(makeCopy(fileId, 'Copy of the invitation card template'));
```

- We will use this function later. <br />
<br />

## Step 2: Update Document
- This function replaces text in a document copied from a invitation card template.

```javascript
import { fileCopy, Edits } from <file-location>;

function updateDoc(doc, edits) {
    
    for(let edit of edits){
        doc.replaceText(edit[0], edit[1])    
    }
}

updateDoc(fileCopy, Edits);
```
- We will use this function later. <br />
<br />


## Step 3: Get The Actual Values From The Spreadsheet

```javascript
function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange('A2:C5').getValues();
  console.log(values[0][0])
}
```
- This is part 1 of the main function that uses <em><strong>SpreadsheetApp</em></strong> to get values in a spreadsheet from. <br />

- Here we print out the values fetched from the sheet to make sure everything is working as expected.
<br />


## Step 4: Make Multiple Copies
```javascript
function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
  
  for(let row of values){
      let copyId = makeCopy(fileId, row[0] + 'Card');
      console.log(row, ' ', copyId);
  }
}
```
- This is part 2 of the main function, where we loop through the spreadsheet values and use ```makeCopy()``` to create copies of the invitation card template file. <br />
<br />



## Step 5: Create a Copy
```javascript
function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
 
  for (let row of values) {
    let copyId = makeCopy(fileId, row[0] + ' Card');
    let copy = DocumentApp.openById(copyId);
    let edits = [
        
        ['GUEST', row[0]],
        ['TITLE', row[1]],
        ['RELATIONSHIP', row[2]]
    ]
  updateDoc(copy, edits);
  }
}
```
- This is part 3 of the main function that uses <em><strong>DocumentApp</em></strong> to open each copy and ```updateDoc()``` to replace the copy's text with text from the spreadsheet. <br />
<br />
