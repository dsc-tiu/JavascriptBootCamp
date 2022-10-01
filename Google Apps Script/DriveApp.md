
## Get Files
- Every file in Google Drive has a unique id. <br />
- The id will be a string of characters and numbers something like: 'e514a7d3e2061ca9e3' <br />

- ```DriveApp.getFileById()``` takes an id as a parameter and returns the matching file. <br />

- The ```getName()``` is a method that returns the file name.

### Note: 
- The ID of a file can be found by navigating to the Google Drive web-app.
- Right Click on the file and click on "get sharable link" . 
- The File ID is the last part of that link, after id= . <br /> 


### <br />Code Example:


let id = 'ac7d3e20622af72303e7bcd67a8e953189205bb6728a';
let file = DriveApp.getFileById(id);
let fileName = file.getName();

console.log(fileName);
```
- This code snippet outputs the file name whose id is stored in the variable ```id```.  <br />

- Then fetches the matching file and returns it to the file object. <br />

- Then we use the .getName() method on the file object to retrieve the file name. <br />

---

## Rename Files

- The ```setName()``` method sets the file name.

### <br />Code Example:


let id = 'ac7d3e20622af72303e7bcd67a8e953189205bb6728a';
let file = DriveApp.getFileById(id);

let oldFileName = file.getName();
console.log(oldFileName);

file.setName('Renamed File');

let newName = file.getName();
console.log(newName);


```
- This code snippet first prints the old file name.<br />

- Renames the file.<br />
- Then prints the new file name "Renamed File". <br />

---

## Copy Files

- The ```makeCopy()``` method creates a copy of a file. <br />

- It returns a new file which has the same contents as the original file but has a different file id.<br />

- The ```getId()``` method gets the id of a file.<br />

### <br />Code Example:


let id = '1gJAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy();
let firstCopyId = firstCopy.getId();
console.log(firstCopyId);

let secondCopy = file.makeCopy();
let secondCopyId = secondCopy.getId();
console.log(secondCopyId);
```
- This code snippet makes a copy of the original file and then prints its id.<br />

- Then makes a second copy of the file and also prints its id.<br />

- This demonstrates how different copies of the same file can be made, and also that they have different file ids but the same file content. <br />

### Note: 
- makeCopy() can take a single argument which is the name of the copy of the file.

let secondCopy = file.makeCopy("GDSC");
```
- This code snippet will rename the second copy of the file object and save it as "GDSC" instead of some default file name.
---
## <em>We will be applying the skills learnt here in the Sum-Up Module.</em>
