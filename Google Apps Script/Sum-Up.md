# Sum-Up 
## Summary
- In this section we will try to use all our knowledge of manipulating files in the Google Drive, Docs and Sheets to automate a task. <br />

- We will try to automate the task of creating wedding invitation cards but this can be used for other purposes as well.<br />

- If you think about it, you will come to realize that a wedding invitation card is essentially the same for everyone except the Name of the person and a few other key details.

- The intuition is to create the first card and then follow it like a template to create all the other cards until you are done creating all the cards necessary.

- We will use DriveApp, DocumentApp, and SpreadsheetApp to automate this process.
---

<details>
<summary><strong><h1>Requirements</h1></strong></summary>
The program to automate our task, will need 2 files in order to work as expected.

1. &nbsp;&nbsp;An invitation card document in Docs, where each key term is placeholder text. 

    - For example:

      - ```We cordially invite TITLE GUEST to our daughter's wedding. Being her RELATIONSHIP, your presence is highly appreciated.```

<br/>

2. &nbsp;&nbsp;A spreadsheet in Sheets, that stores the values of the key terms for every invitation card.  

    - For example:

        |   | A        | B     | C             |
        |---|----------|-------|---------------|
        | 1 | GUEST    | TITLE | RELATIONSHIP  |
        | 2 | Bob      | Mr.   | Brother       |
        | 3 | Maya     | Mrs.  | Sister-in-Law |
        | 4 | Rajiv    | Mr.   | Friend        |
        | 5 | Anika    | Ms.   | Friend        |
        | 6 | Vikram   | Mr.   | Colleague     |
        | 7 | Anish    | Mr.   | Father-in-law |
        | 8 | Priyanka | Ms.   | Cousin        |
        | 9 | Alisha   | Mrs.  | Cousin        |

<br />
</details>



[comment]: <> (STEP 1)

<details>
<summary><strong><h1>Step 1: Create a Copy of the File</strong></h1></summary>

```javascript
let fileId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
  
function makeCopy(id, name) {
    let file = DriveApp.getFileById(id);
    let copy = file.makeCopy(name);
    return copy.getId();
}

console.log(makeCopy(fileId, 'Copy of the invitation card template'));
```
<ul>
<li> Use DriveApp to create a copy of a invitation card template document from Docs.</li><br />

<li>Rename the copy.</li><br />

<li>Returns its id.</li><br />

<li>We will use this function later. </li><br />

</details>



[comment]: <> (STEP 2)

<details>
<summary><strong><h1>Step 2: Update Document</strong></h1></summary>

```javascript
import { fileCopy, Edits } from <file-location>;

function updateDoc(doc, edits) {
    
    for(let edit of edits){
        doc.replaceText(edit[0], edit[1])    
    }
}

updateDoc(fileCopy, Edits);
```
<ul>
<li>This function replaces text in a document copied from a invitation card template.</li><br />

<li>We will use this function later.</li><br />

</details>



[comment]: <> (STEP 3)

<details>
<summary><strong><h1>Step 3: Get The Actual Values From The Spreadsheet</strong></h1></summary>

```javascript
let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';

function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
  for (let edit of edits) {
    doc.replaceText(edit[0], edit[1]);
  }
}

function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange('A2:C5').getValues();
  console.log(values[0][0])
}

main();
```

<ul>
<li>This is part 1 of the main function that uses <em><strong>SpreadsheetApp</em></strong> to get values in a spreadsheet from. <br /></li><br>

<li>Here we print out the values fetched from the sheet to make sure everything is working as expected.
</li> <br />

</details>


 
[comment]: <> (STEP 4)
<details>
<summary><strong><h1>Step 4: Make Multiple Copies Of the File</strong></h1></summary>

```javascript
let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';
let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';


function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
  for (let edit of edits) {
    doc.replaceText(edit[0], edit[1]);
  }
}

function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
  
  for(let row of values){
      let copyId = makeCopy(contractId, row[0] + 'Contract');
      console.log(row, ' ', copyId);
  }
}

main();
```

<ul>
<li>This is part 2 of the main function, where we loop through the spreadsheet values and use ```makeCopy()``` to create copies of the invitation card template file. <br />
<br /></li>

</details>



[comment]: <> (STEP 5)

<details>
<summary><strong><h1>Step 5: Create a Copy</strong></h1></summary>

```javascript
let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';
let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';


function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
  for (let edit of edits) {
    doc.replaceText(edit[0], edit[1]);
  }
}

function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
 
  for (let row of values) {
    let copyId = makeCopy(contractId, row[0] + ' Contract');
    let copy = DocumentApp.openById(copyId);
    let edits = [
        
        ['GUEST', row[0]],
        ['TITLE', row[1]],
        ['RELATIONSHIP', row[2]]
    ]
  updateDoc(copy, edits);
  }
}

main();
```
<ul>
<li>This is part 3 of the main function that uses <em><strong>DocumentApp</em></strong> to open each copy and ```updateDoc()``` to replace the copy's text with text from the spreadsheet. <br />
<br /></li>


</details>

## <em>Congratulations!! 
### You just learnt how to apply Apps Script to Automate a tedious task of creating the writeups for a Wedding Invitation Card using <strong>DriveApp</strong>, <strong>DocumentApp</strong> and <strong>SpreadsheetApp</strong></em>.
