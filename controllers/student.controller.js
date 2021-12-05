const { Response } = require('../utils');

const getAll = async (req, res) => {
    try {
        const students = req.app.locals.studentData;
        const response = new Response(200, "", students);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const getById = async (req, res) => {
    try {
        const msv = req.params.id;
        const students = req.app.locals.studentData;
        const student = students.find(item => item.msv === msv);
        const response = new Response(200, "", student);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

const updateInfo = async (req, res) => {
    try {
        const students = req.app.locals.studentData;
        const newStudent = req.body;
        const student = students.find(item => item.msv === newStudent.msv);
        if (!student) {
            let newStudentlist = [...students, newStudent];
            req.app.locals.studentData = newStudentlist;
            console.log(req.app.locals.studentData);
            const response = new Response(200, "", newStudent);
            return res.status(200).send(response);
        }
        console.log('abbdsjcu');
        let newStudentlist = [...students.filter(item => item.msv !== newStudent.msv), newStudent];
        req.app.locals.studentData = newStudentlist;
        const response = new Response(200, "", newStudent);
        res.status(200).send(response);
    } catch (error) {
        const response = new Response(500, "Error", error);
        res.status(500).send(response);
    }
}

module.exports = {
    getAll,
    getById,
    updateInfo
}