const getStudentsByLocation = (getListStudents, city) => {
  const newArray = getListStudents.filter((student) => student.location === city);
  return newArray;
};
export default getStudentsByLocation;
