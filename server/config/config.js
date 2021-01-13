// ===========================================
//  Puerto
// ===========================================
process.env.PORT = process.env.PORT || 3000;

// ===========================================
//  Entorno
// ===========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================================
//  Base de datos
// ===========================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    ulrDB = "mongodb://localhost:27017/cocoa";
} else {
    ulrDB = "mongodb+srv://cocoa-user:cocoa-user@cluster0.0jiih.mongodb.net/test"
}

process.env.URLDB = ulrDB;