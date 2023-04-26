-- Insert test data into organization table
INSERT INTO organization (id_organization, name, status)
VALUES (1, 'ACME Corp', 1),
(2, 'Globex', 2),
(3, 'Wayne Enterprises', 1),
(4, 'Stark Industries', 2),
(5, 'Umbrella Corporation', 1),
(6, 'Tyrell Corporation', 2),
(7, 'Wonka Industries', 1),
(8, 'Initech', 2),
(9, 'Weyland-Yutani', 1),
(10, 'Oscorp', 2);

-- Insert test data into tribe table
INSERT INTO tribe (id_tribe, id_organization, name, status)
VALUES (1, 1, 'Engineering', 1),
(2, 1, 'Sales', 1),
(3, 1, 'Marketing', 2),
(4, 2, 'Research', 1),
(5, 2, 'Development', 2),
(6, 2, 'Operations', 1),
(7, 3, 'Finance', 2),
(8, 3, 'HR', 1),
(9, 3, 'Legal', 2),
(10, 4, 'Design', 1);

-- Insert test data into repository table
INSERT INTO repository (id_repository, id_tribe, name, state, create_time, status)
VALUES (1, 1, 'Project X', 'A', '2023-04-26 09:00:00', 'A'),
(2, 1, 'Project Y', 'E', '2023-04-25 10:30:00', 'A'),
(3, 2, 'Project Z', 'A', '2023-04-24 12:45:00', 'I'),
(4, 2, 'Project A', 'D', '2023-04-23 14:20:00', 'I'),
(5, 3, 'Project B', 'E', '2023-04-22 15:55:00', 'A'),
(6, 3, 'Project C', 'A', '2023-04-21 17:10:00', 'A'),
(7, 4, 'Project D', 'A', '2023-04-20 18:25:00', 'I'),
(8, 4, 'Project E', 'E', '2023-04-19 19:40:00', 'I'),
(9, 5, 'Project F', 'D', '2023-04-18 20:55:00', 'A'),
(10, 5, 'Project G', 'A', '2023-04-17 22:10:00', 'A');

-- Insert test data into metrics table
INSERT INTO metrics (id_repository, coverage, bugs, vulnerabilities, hotspot, code_smells)
VALUES (1, 95.3, 7, 4, 10, 32),
(2, 87.6, 5, 2, 5, 28),
(3, 93.2, 6, 1, 8, 23),
(4, 89.4, 9, 3, 11, 29),
(5, 82.1, 3, 5, 7, 26),
(6, 91.8, 4, 2, 9, 22),
(7, 84.5, 6, 3, 6, 25),
(8, 79.3, 8, 6, 12, 34),
(9, 90.5, 5, 4, 10, 30),
(10, 86.2, 7, 1, 4, 27);