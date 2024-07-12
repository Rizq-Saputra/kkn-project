// routes/userRouter.js
const express = require('express');
const komentarController = require('../controller/komentar-controller');
const mpasiController = require('../controller/mpasi-controller');
const artikelController = require('../controller/artikel-controller');
const quizController = require('../controller/quiz-controller');
const categoryController = require('../controller/category-controller');
const pesertaController = require('../controller/peserta-controller');

const userRouter = new express.Router();

// Komentar API
userRouter.post('/api/komentar', komentarController.createKomentar);
userRouter.delete('/api/komentar/:id', komentarController.deleteKomentar);
userRouter.get('/api/komentar/artikel/:artikelId', komentarController.getKomentarByArtikelId);
userRouter.get('/api/komentar/mpasi/:mpasiId', komentarController.getKomentarByMpasiId);

// MPASI API
userRouter.post('/api/mpasi', mpasiController.createMpasi);
userRouter.get('/api/mpasi', mpasiController.getAllMpasi);
userRouter.get('/api/mpasi/:id', mpasiController.getMpasiById);
userRouter.put('/api/mpasi/:id', mpasiController.updateMpasi);
userRouter.delete('/api/mpasi/:id', mpasiController.deleteMpasi);

// Artikel API
userRouter.post('/api/artikel', artikelController.createArtikel);
userRouter.get('/api/artikel', artikelController.getAllArtikel);
userRouter.get('/api/artikel/:id', artikelController.getArtikelById);
userRouter.put('/api/artikel/:id', artikelController.updateArtikel);
userRouter.delete('/api/artikel/:id', artikelController.deleteArtikel);

// Quiz API
userRouter.post('/api/quiz', quizController.createQuiz);
userRouter.get('/api/quiz/category/:kategoriId', quizController.getQuizzesByCategoryId);
userRouter.delete('/api/quiz/:id', quizController.deleteQuiz);
userRouter.get('/api/quiz/:id', quizController.getQuizById);

// Category API
userRouter.post('/api/category', categoryController.createCategory);
userRouter.get('/api/category', categoryController.getAllCategories);

// Peserta API
userRouter.post('/api/peserta', pesertaController.createPeserta);
userRouter.get('/api/peserta', pesertaController.getAllPeserta);
userRouter.get('/api/peserta/:id', pesertaController.getPesertaById);
userRouter.delete('/api/peserta/:id', pesertaController.deletePeserta);

module.exports = userRouter;
