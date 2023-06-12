CREATE TABLE empresas ( 
	cnpj_empresa         VARCHAR(14) NOT NULL  PRIMARY KEY  ,
	senha_empresa        VARCHAR(255) NOT NULL    ,
	nome_empresa         VARCHAR(255) NOT NULL    
 );

CREATE TABLE relatorios ( 
	id_relatorio         INTEGER NOT NULL PRIMARY KEY  ,
	data_relatorio       DATE NOT NULL    ,
	cnpj_empresa         VARCHAR(14)     ,
	FOREIGN KEY ( cnpj_empresa ) REFERENCES empresas( cnpj_empresa )  
 );

CREATE TABLE tecnicos_ipt ( 
	user_tecnico         VARCHAR(255) NOT NULL  PRIMARY KEY  ,
	senha_tecnico        VARCHAR(255) NOT NULL    ,
	nome_tecnico         VARCHAR(255) NOT NULL    
 );

CREATE TABLE vagoes ( 
	id_vagao             INTEGER NOT NULL PRIMARY KEY  ,
	tipo_vagao           VARCHAR(255) NOT NULL    ,
	grafico_de_marcov_viagem BLOB     
 );

CREATE TABLE viagens ( 
	id_viagem            INTEGER NOT NULL PRIMARY KEY  ,
	data_viagem          DATE NOT NULL    ,
	id_relatorio         INTEGER     ,
	FOREIGN KEY ( id_relatorio ) REFERENCES relatorios( id_relatorio )  
 );

CREATE TABLE choques ( 
	id_choque            INTEGER NOT NULL PRIMARY KEY  ,
	tipo_choque          VARCHAR(255) NOT NULL    ,
	data_choque          DATE NOT NULL    ,
	hora_choque          TIME NOT NULL    ,
	latitude_choque      VARCHAR(255) NOT NULL    ,
	longitude_choque     VARCHAR(255) NOT NULL    ,
	velocidade_choque    FLOAT(4) NOT NULL    ,
	posicao_choque       FLOAT(4) NOT NULL    ,
	placa_virtual_choque VARCHAR(255) NOT NULL    ,
	trecho_choque        VARCHAR(255) NOT NULL    ,
	forca_maxima_choque  VARCHAR(255) NOT NULL    ,
	ACT_choque           VARCHAR(255) NOT NULL    ,
	PEG_choque           VARCHAR(255) NOT NULL    ,
	id_vagao             INTEGER     ,
	id_viagem			 INTEGER	 ,
	FOREIGN KEY ( id_vagao ) REFERENCES vagoes( id_vagao )	,
	FOREIGN KEY ( id_viagem ) REFERENCES viagens( id_viagem )  
 );

CREATE TABLE vagao_x_viagem ( 
	id_vagao_x_viagem    INTEGER NOT NULL PRIMARY KEY  ,
	id_viagem            INTEGER     ,
	id_vagao             INTEGER     ,
	FOREIGN KEY ( id_viagem ) REFERENCES viagens( id_viagem )  ,
	FOREIGN KEY ( id_vagao ) REFERENCES vagoes( id_vagao )  
 );
