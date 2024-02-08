const Visitor = require('../model/Visitor');

//전체 방명록 조회
const allvisitor = async (req, res) => {
    const data = await Visitor.allvisitor();
    console.log(data);
    res.json({ result: data });
};

//하나 방명록 조회
const getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await Visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};

// 방명록 하나 작성
const postVisitor = async (req, res) => {
    console.log(req.body);
    const data = await Visitor.postVisitor(req.body);
    console.log(data);
    res.json({ result: true, id: data.insertId, name: req.body.name, comment: req.body.comment });
};

// 방명록 하나 수정
const patchVisitor = async (req, res) => {
    const data = await Visitor.patchVisitor(req.body);
    console.log(data);
    res.json({ result: true });
};

// 방명록 하나 삭제
const deletevisitor = async (req, res) => {
    await Visitor.deletevisitor(req.body.id);
    res.json({ result: true });
};

module.exports = { allvisitor, getVisitor, postVisitor, patchVisitor, deletevisitor };
