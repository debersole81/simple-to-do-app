# **To-do App**

A simple, single page to-do application that helps users manage a to-do list.

## **Demo**
Here is a working, live demo: https://debersole81.github.io/simple-to-do-app/

## **Features**

### **Create To-do Item**
Users can enter a to-do item in the form field and click submit. The to-do item is displayed in a list format in the application UI. Uses Axios to post the to-do item to a JSON placeholder RESTful API.

### **Complete To-do Item**
Users can mark a to-do item as complete by clicking the checkbox in the application UI. Completed to-do items render with a strikethrough to help the user distinguish between completed and active to-dos.

### **Delete To-do Item**
Users can delete to-do items by clicking on the 'Delete' button in the application UI. This action will alert the user that a to-do item is about to be deleted and prompts the user for verification. Once verified, the to-do item is removed from the user's to-do list. Uses Axios to delete the to-do item from a JSON placeholder RESTful API.

## **Built With**

* [ReactJS](https://reactjs.org/) - a JavaScript library for building user interfaces.
* [Axios](https://axios-http.com/) - Axios is a simple, promise based HTTP client for the browser and node.js.

## **Pending Features and Improvements**
* Implement UI component library to improve usability and appearance of the UI.
* Build editing feature that allows users to edit to-do items that are currently rendered in the UI.
* Implement a completion date feature.
* Build sorting functionality to allow users to sort by completion date or status.