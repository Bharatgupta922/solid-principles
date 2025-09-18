// Single Responsibility Principle - every class should have a single responsibility

class AWSSave {
    save () {
        console.log('Pushing data in S3 bucket...');
    }
}

class AWSRead {
    read () {
        console.log('Reading data from S3 bucket...');
    }   
}

class DatabaseSave {
    save () {
        console.log('Pushing data in Database...');
    }
}
const main = () => {
    const awsSave = new AWSSave();
    awsSave.save(); 
    const awsRead = new AWSRead();
    awsRead.read();
    const dbSave = new DatabaseSave();
    dbSave.save();
}

main();