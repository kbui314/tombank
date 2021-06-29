drop table if exists accountholder;
drop table if exists transholder;
drop table if exists users;
drop table if exists accounts;
drop table if exists transactions;

create table transactions(
	id serial primary key,
	fromacc text,
	toacc text not null,
	transtype text not null,
	value text not null,
	created_at text not null,
	update_at text not null
);

create table accounts(
	accid serial primary key,
	accnumber text not null,
	balance numeric not null
);

create table users(
	userid serial primary key,
	username text not null, 
	password text not null,
	firstname text not null,
	lastname text not null,
	phone text not null,
	usertype text not null
);

create table accountholder(
	id serial primary key,
	user_id integer references users(userid) on delete cascade,
	account_id integer references accounts(accid) on delete cascade
);

create table transholder(
	id serial primary key,
	account_id integer references accounts(accid) on delete cascade,
	trans_id integer references transactions(id) on delete cascade
);

