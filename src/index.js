const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName)
		.then(function (result) {
			console.log("" + result);
		})
		.catch(function (error) {
			console.log(error);
		});
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	fs.appendFile(fileName, fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName);
}

//myFileWriter("index.txt","Hello world");
//myFileReader("index.txt");
//myFileUpdater("index.txt","\n I this second add");
//myFileDeleter("index.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
