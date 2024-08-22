const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data by new line and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header line
    lines.shift();

    // Initialize variables for counting students and organizing them by field
    const totalStudents = lines.length;
    const studentsByField = {};

    // Iterate through each line to process the student data
    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    // Output the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Output the number of students in each field and their names
    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
