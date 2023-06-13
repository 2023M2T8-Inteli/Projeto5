PRAGMA foreign_keys=off;

CREATE TABLE "choques" (
	"id_choque"	INTEGER NOT NULL,
	"tipo_choque"	INTEGER NOT NULL,
	"data_choque"	DATE NOT NULL,
	"hora_choque"	TIME NOT NULL,
	"latitude_choque"	VARCHAR(255) NOT NULL,
	"longitude_choque"	VARCHAR(255) NOT NULL,
	"velocidade_choque"	FLOAT(15) NOT NULL,
	"posicao_choque"	FLOAT(15) NOT NULL,
	"trecho_choque"	TEXT NOT NULL,
	"forca_maxima_choque"	FLOAT(15) NOT NULL,
	"ACT_choque"	FLOAT(15) NOT NULL,
	"PEG_choque"	FLOAT(15) NOT NULL,
	"id_vagao"	INTEGER,
	"id_viagem"	INTEGER,
	"tipo_engate" VARCHAR(1),
	PRIMARY KEY("id_choque"),
	FOREIGN KEY("id_vagao") REFERENCES "vagoes"("id_vagao"),
	FOREIGN KEY("id_viagem") REFERENCES "viagens"("id_viagem")
);

INSERT INTO choques ("id_choque" , "tipo_choque", "data_choque", "hora_choque", "latitude_choque", "longitude_choque", "velocidade_choque", "posicao_choque","trecho_choque", "forca_maxima_choque", "ACT_choque", "PEG_choque", "id_vagao", "id_viagem", "tipo_engate")
SELECT "id_choque", "tipo_choque", "data_choque", "hora_choque", "latitude_choque", "longitude_choque", "velocidade_choque", "posicao_choque","trecho_choque", "forca_maxima_choque", "ACT_choque", "PEG_choque", "id_vagao", "id_viagem", "tipo_engate"
FROM choques_all;


PRAGMA foreign_keys=on;