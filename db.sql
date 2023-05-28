drop database Pashmak;
Create database Pashmak;
use Pashmak;


Create table roles(
	id int primary key auto_increment,
    role_name char(16)
);


Create table users(
	id int primary key AUTO_INCREMENT,
    username char(10) not null,
    user_password char(32) not null,
	user_email varchar(50) not null,
	user_pic char(32),
    address1 varchar(50),
	address2 varchar(50),
    post char(10),
	user_role int not null,
    foreign key (user_role) references roles(id)
);


CREATE table poster_Groups(
	id int primary key auto_increment,
    group_name varchar(32)
);

CREATE table drawings(
	id int primary key AUTO_INCREMENT,
    drawing_name varchar(50),
    url char(32) not null,
    original_size char(10) not null,
    artist_id int not null,
    group_id int,
    isDefault bit,
    foreign key (group_id) references poster_Groups(id),
    foreign key (artist_id) references users(id)
);

CREATE table products(
	id int primary key auto_increment,
	product_name char(16),
    price int
);


Create table orders(
	id int primary key AUTO_INCREMENT,
    order_size int not null,
    UserId int not null,
	drawingId int not null,
    productId int not null,
    orderDate datetime not null,
    foreign key (UserId) references users(id),
    foreign key (drawingId) references drawings(id),
    foreign key (productId) references products(id)
)