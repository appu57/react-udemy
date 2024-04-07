.outer-container {
  display: flex;
}

.container {
  margin: 10px;
  padding: 10px;
  border: 2px solid #b3adad;
  border-radius: 4px;
  background-color: #f3f3f3;
  box-shadow: 0px 0px 7px 1px #cfcece;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-title-container {
  display: flex;
  margin-bottom: 20px;
}

.app-title {
  /* border: 1px solid red; */
  flex: 11;
}

.create-button-container {
  flex: 2;
  text-align: right;
}

.app-title h1 {
  font-size: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: #1353b5;
  color: #ffffff;
  border-radius: 3px;
  padding: 4px 10px;
  text-shadow: 1px 1px 2px #313030;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: inline-block;
}

.button {
  padding: 6px 12px;
  border: 2px solid #dfdbdb;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  transition: box-shadow 0.2s, background-color 0.2s, transform 0.1s;
  outline: 0;
  margin-right: 5px;
}

.create-button {
  background-color: #6a6f74;
}

.create-button:hover {
  background-color: #37393a;
}

.button:hover {
  box-shadow: 0px 0px 3px 0px #0dcf54;
}

.button:active {
  transform: scale(0.95);
}

.search-box {
  position: relative;
  margin: 10px 10px 0px 10px;
}

.search-box input[type="search"] {
  padding: 6px 10px 6px 30px;
  width: 100%;
  border-radius: 1px;
  border: 1px solid #d8d7d7;
  transition: box-shadow 0.2s;
}

.search-box input[type="search"]:focus {
  outline: none;
  box-shadow: 0px 0px 2px 1px #0c6bc4;
}

.search-box i {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 7px 6px;
  color: #b8b3b3;
}

.content-body {
  padding: 10px;
}

.task {
  background-color: #faf9f9;
  border-left: 6px solid #04458f;
  transition: background-color 0.2s;
  display: flex;
  box-shadow: 1px 1px 3px 1px #dad8d8;
  margin-bottom: 14px;
}

.task:hover {
  background-color: #fabebe;
}

.task-body {
  flex: 11;
  padding: 10px;
}

.task-options {
  flex: 1;
  padding: 10px;
}

.task-title {
  font-weight: 500;
  margin-bottom: 8px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.task-subtitle {
  color: #5c5656;
  font-size: 80%;
}

.task-subtitle-text {
  margin-left: 3px;
}

.task-title-text {
  margin-left: 10px;
}

.icon-button {
  padding: 2px 8px;
  border: 2px solid #dfdbdb;
  border-radius: 6px;
  cursor: pointer;
  background-color: #db4242;
  color: #ffffff;
  transition: box-shadow 0.2s;
  outline: 0;
}

.icon-button:hover {
  box-shadow: 0px 0px 4px 2px #b1aaaa;
  background-color: #c22222;
}

.icon-button:active {
  transform: scale(0.95);
}

.form-group {
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin-top: 5px;
}

.form-label {
  flex: 1;
}

.form-input {
  flex: 1;
}

.text-box {
  padding: 6px 10px;
  margin: 3px 0px;
  width: 100%;
  border-radius: 1px;
  border: 1px solid #d8d7d7;
  transition: box-shadow 0.2s;
}

.text-box:focus {
  outline: none;
  box-shadow: 0px 0px 1px 1px #7d8994;
}

.new-task-container {
  padding: 0px 10px;
  margin-bottom: 16px;
}

.new-task-title {
  border-bottom: 1px solid #05812a;
  color: #05812a;
}

.save-button {
  background-color: #07772c;
}

.save-button:hover {
  background-color: #024717;
}

.cancel-button {
  background-color: #da9310;
}

.cancel-button:hover {
  background-color: #915f03;
}

.button-group {
  margin-top: 4px;
}

/* large devices */
@media only screen and (min-width: 1200px) {
  .outer-container {
    justify-content: center;
  }

  .container {
    min-width: 700px;
    max-width: 700px;
  }

  .form-group {
    flex-direction: row;
  }

  .form-label {
    flex: 3;
    padding-top: 5px;
  }

  .form-input {
    flex: 6;
  }
}
