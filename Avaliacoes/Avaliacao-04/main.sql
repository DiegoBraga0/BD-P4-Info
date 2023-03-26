.header on
.mode column

CREATE TABLE TB_PROFESSOR (
    PROFESSOR_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL,
    DATA_NASC TEXT NOT NULL
);

CREATE TABLE TB_ALUNO (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL,
    DATA_NASC TEXT NOT NULL
);

CREATE TABLE TB_DISCIPLINA (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL
);

CREATE TABLE TB_MATRICULA (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    DATA_MATRICULA TEXT NOT NULL,
    ALUNO_ID INTEGER NOT NULL,
    DISCIPLINA_ID INTEGER NOT NULL,
    FOREIGN KEY(DISCIPLINA_ID)
     REFERENCES TB_DISCIPLINA(ID),
    FOREIGN KEY(ALUNO_ID)
     REFERENCES TB_ALUNO(ID)
);
