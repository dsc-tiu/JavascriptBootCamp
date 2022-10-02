# Google Docs  [DocumentApp]
## Open Documents

- ```DocumentApp``` is used to access and modify documents, something that can't be done with ```DriveApp```.<br />

- For example, we can insert and edit text inside a document using DocumentApp.<br />

- ```DocumentApp.openById()``` is used to get a document file in Google Docs. The syntax is similar to ```DriveApp.getFileById()```<br />

### <br />Code Example:
```JavaScript
let id = '1VFYfiTWVTahG9G8xG9G8x2a76ejv1fiTWVTahsAM';

let doc = DocumentApp.openById(id);
let docName = doc.getName();
console.log(docName);
```
- This code snippet gets the document by its unique file id and then prints the document name fetched with ```getName()``` and stored in the variable ```docName```.

### Note:
- DriveApp.getFileById() returns a file from Google Drive.

- DocumentApp.openById() returns a document from Google Docs.

- getId() is a function that returns the id of the file or document it is called on. <br/>

---

## Get File Contents
- The ```getText()``` method returns the contents of the document.

### <br />Code Example:

```JavaScript
let id = "1x1Ky-x1Kyejv1fiTejv1fiTWVTahG9GMgmAM";

let doc = DocumentApp.openById(id);
let text = doc1.getText();
console.log(text);
```
- In this code snippet we open the document and get its text content using ```getText()``` and then print its contents out.

---

## Replace Text
- The ```replaceText()``` method is used to edit and modify the document.<br/>

- It takes <em>2 arguments</em>: 
    1. A string to be replaced 
    2. A new string to replace it with <br/>
<br/>   
- Every occurrence of the string to replace is replaced with the new string.

### <br />Code Example:

```JavaScript
let id = '1x1Ky-x1Kyejv1fiTejv1fiTWVTahG9GMgmAM';

let doc = DocumentApp.openById(id);
let oldText = doc.getText();
console.log(oldText);

doc.replaceText('brilliant', 'exceptional');
let newText = doc.getText();
console.log(newText);
```
- In this code snippet we are replacing every occurence of the word <em>"brilliant"</em> with <em>"exceptional"</em> using the ```replaceText()``` method.
---

## Example Exercise:
```JavaScript
let doc = DocumentApp.openById('226uAXY0YRUjHMW5LQqmJTpnzRkGmFLch0');
let replacements = [
    ['Dog', 'Cat'],
    ['dog food', 'cat food'],
    ['chicken bones and mutton', 'fish bones and salmon']
];

for (let replacement of replacements) {
    doc.replaceText(replacement[0],replacement[1]);
}
```
- In this code snippet we make multiple replacements in the document. <br/>

- If you look closely, you will notice we want to convert a document on dogs to a document on cats. <br/>

- The ```replacements``` array consists of 3 arrays, that contain 2 strings each. 
    + The first string is the text to be replaced.
    + The second string is new text to replace it with.<br/>
<br/>

- Inside the for...of loop we are making the replacements in the document as per each array defined above.<br/>
---
## <em>We will be applying the skills learnt here in the Sum-Up Module.</em>
