CREATE TABLE organization (
    id_organization INT NOT NULL PRIMARY KEY,
    name CHAR(50) NOT NULL,
    status INT NOT NULL
);

CREATE TABLE tribe (
    id_tribe SERIAL NOT NULL PRIMARY KEY,
    id_organization INT NOT NULL REFERENCES organization(id_organization),
    name CHAR(50) NOT NULL,
    status INT NOT NULL
);

CREATE TABLE repository (
    id_repository INT NOT NULL PRIMARY KEY,
    id_tribe INT NOT NULL REFERENCES tribe(id_tribe),
    name CHAR(50) NOT NULL,
    state CHAR(1) NOT NULL,
    create_time TIMESTAMP NOT NULL,
    status CHAR(1) NOT NULL
);

CREATE TABLE metrics (
    id_repository INT NOT NULL REFERENCES repository(id_repository),
    coverage DOUBLE PRECISION NOT NULL,
    bugs INT NOT NULL,
    vulnerabilities INT NOT NULL,
    hotspot INT NOT NULL,
    code_smells INT NOT NULL,
    PRIMARY KEY (id_repository)
);
