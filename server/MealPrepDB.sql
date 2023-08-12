--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: chef_employed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chef_employed (
    mid integer NOT NULL,
    chefname character varying(50),
    role character varying(50) NOT NULL,
    chefid integer NOT NULL
);


ALTER TABLE public.chef_employed OWNER TO postgres;

--
-- Name: chef_employed_chefid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chef_employed_chefid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chef_employed_chefid_seq OWNER TO postgres;

--
-- Name: chef_employed_chefid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chef_employed_chefid_seq OWNED BY public.chef_employed.chefid;


--
-- Name: cooks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cooks (
    chefid integer NOT NULL,
    menuid integer NOT NULL,
    orderid integer NOT NULL,
    dateprepared date
);


ALTER TABLE public.cooks OWNER TO postgres;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    customername character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    creditcardinfo character varying(50) NOT NULL,
    housenum integer NOT NULL,
    street character varying(30) NOT NULL,
    postalcode character varying(6) NOT NULL,
    province character varying(30) NOT NULL,
    customerid integer NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: customer_customerid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_customerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_customerid_seq OWNER TO postgres;

--
-- Name: customer_customerid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_customerid_seq OWNED BY public.customer.customerid;


--
-- Name: deliveryservice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.deliveryservice (
    companyname character(50) NOT NULL,
    drivername character(50) NOT NULL,
    vehiclemake character(50),
    vehiclemodel character(50),
    driverid integer NOT NULL
);


ALTER TABLE public.deliveryservice OWNER TO postgres;

--
-- Name: deliveryservice_driverid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.deliveryservice_driverid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.deliveryservice_driverid_seq OWNER TO postgres;

--
-- Name: deliveryservice_driverid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.deliveryservice_driverid_seq OWNED BY public.deliveryservice.driverid;


--
-- Name: drink; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drink (
    menuid integer NOT NULL,
    sugarlevel character varying(20) DEFAULT 'Regular'::character varying NOT NULL,
    caffeine boolean NOT NULL
);


ALTER TABLE public.drink OWNER TO postgres;

--
-- Name: entree; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entree (
    menuid integer NOT NULL,
    extracarb character varying(20) DEFAULT 'One Serving'::character varying NOT NULL,
    extraprotein character varying(20) DEFAULT 'One Serving'::character varying NOT NULL
);


ALTER TABLE public.entree OWNER TO postgres;

--
-- Name: has; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.has (
    sid integer NOT NULL,
    ingid integer NOT NULL
);


ALTER TABLE public.has OWNER TO postgres;

--
-- Name: ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingredients (
    ingid integer NOT NULL,
    ingname character varying(40) NOT NULL
);


ALTER TABLE public.ingredients OWNER TO postgres;

--
-- Name: ingredients_ingid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ingredients_ingid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingredients_ingid_seq OWNER TO postgres;

--
-- Name: ingredients_ingid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingredients_ingid_seq OWNED BY public.ingredients.ingid;


--
-- Name: manager; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manager (
    mname character varying(50) NOT NULL,
    mid integer NOT NULL
);


ALTER TABLE public.manager OWNER TO postgres;

--
-- Name: manager_mid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.manager_mid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.manager_mid_seq OWNER TO postgres;

--
-- Name: manager_mid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.manager_mid_seq OWNED BY public.manager.mid;


--
-- Name: meals_from_contains; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meals_from_contains (
    orderid integer NOT NULL,
    menuid integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.meals_from_contains OWNER TO postgres;

--
-- Name: menuitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menuitem (
    menuid integer NOT NULL,
    menuname character varying(30) NOT NULL,
    mealtype character varying(50) NOT NULL,
    calories integer NOT NULL,
    cost double precision NOT NULL
);


ALTER TABLE public.menuitem OWNER TO postgres;

--
-- Name: menuitem_menuid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menuitem_menuid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menuitem_menuid_seq OWNER TO postgres;

--
-- Name: menuitem_menuid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menuitem_menuid_seq OWNED BY public.menuitem.menuid;


--
-- Name: order_makes_sent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_makes_sent (
    customerid integer NOT NULL,
    driverid integer NOT NULL,
    cost double precision,
    orderstatus character varying(30),
    orderid integer NOT NULL
);


ALTER TABLE public.order_makes_sent OWNER TO postgres;

--
-- Name: order_makes_sent_orderid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_makes_sent_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_makes_sent_orderid_seq OWNER TO postgres;

--
-- Name: order_makes_sent_orderid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_makes_sent_orderid_seq OWNED BY public.order_makes_sent.orderid;


--
-- Name: snack; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snack (
    menuid integer NOT NULL,
    healthy character varying(10) NOT NULL
);


ALTER TABLE public.snack OWNER TO postgres;

--
-- Name: specify; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specify (
    menuid integer NOT NULL,
    ingid integer NOT NULL,
    qty double precision DEFAULT 1.00
);


ALTER TABLE public.specify OWNER TO postgres;

--
-- Name: supplier; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supplier (
    sname character varying(80) NOT NULL,
    phone character(12) NOT NULL,
    address character varying(100) NOT NULL,
    supplierid integer NOT NULL
);


ALTER TABLE public.supplier OWNER TO postgres;

--
-- Name: supplier_supplierid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.supplier_supplierid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.supplier_supplierid_seq OWNER TO postgres;

--
-- Name: supplier_supplierid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.supplier_supplierid_seq OWNED BY public.supplier.supplierid;


--
-- Name: supply_supplies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supply_supplies (
    supplierid integer NOT NULL,
    sid integer NOT NULL
);


ALTER TABLE public.supply_supplies OWNER TO postgres;

--
-- Name: supply_supplies_sid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.supply_supplies_sid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.supply_supplies_sid_seq OWNER TO postgres;

--
-- Name: supply_supplies_sid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.supply_supplies_sid_seq OWNED BY public.supply_supplies.sid;


--
-- Name: chef_employed chefid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chef_employed ALTER COLUMN chefid SET DEFAULT nextval('public.chef_employed_chefid_seq'::regclass);


--
-- Name: customer customerid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN customerid SET DEFAULT nextval('public.customer_customerid_seq'::regclass);


--
-- Name: deliveryservice driverid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveryservice ALTER COLUMN driverid SET DEFAULT nextval('public.deliveryservice_driverid_seq'::regclass);


--
-- Name: ingredients ingid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredients ALTER COLUMN ingid SET DEFAULT nextval('public.ingredients_ingid_seq'::regclass);


--
-- Name: manager mid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager ALTER COLUMN mid SET DEFAULT nextval('public.manager_mid_seq'::regclass);


--
-- Name: menuitem menuid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menuitem ALTER COLUMN menuid SET DEFAULT nextval('public.menuitem_menuid_seq'::regclass);


--
-- Name: order_makes_sent orderid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_makes_sent ALTER COLUMN orderid SET DEFAULT nextval('public.order_makes_sent_orderid_seq'::regclass);


--
-- Name: supplier supplierid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier ALTER COLUMN supplierid SET DEFAULT nextval('public.supplier_supplierid_seq'::regclass);


--
-- Name: supply_supplies sid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supply_supplies ALTER COLUMN sid SET DEFAULT nextval('public.supply_supplies_sid_seq'::regclass);


--
-- Data for Name: chef_employed; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chef_employed (mid, chefname, role, chefid) FROM stdin;
1	ChefA	Sous-chef	1
2	ChefB	Wait staff	2
3	ChefC	Butcher Chef	3
4	ChefD	Saucier	4
5	ChefE	Pastry Chef	5
\.


--
-- Data for Name: cooks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cooks (chefid, menuid, orderid, dateprepared) FROM stdin;
1	1	1	2023-07-26
1	2	2	2023-05-16
3	2	3	2023-07-23
4	4	3	2023-07-11
5	2	4	2023-07-22
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (customername, phone, creditcardinfo, housenum, street, postalcode, province, customerid) FROM stdin;
John Doe	416-555-1223	4929303566879010	22	Denlow	M4B1B3	Ontario	10
Emily Johnson	604-555-1234	3781621497638429	233	Maple Avenue	V5K2S7	British Columbia	11
Liam Parker	613-555-9876	5412764893052156	44	Cedar Street	H3A1X9	Ontario	12
Sophia Mitchell	780-555-4567	6290813245761029	12	Oak Crescent	T2N3R1	Alberta	13
Kostia Putilkin	6472780802	3444	7	Purling Place	M3B1V4	ON	24
Oliver Tree	444	4412	2123	Benbury	PC487S	Alberta	27
Noah Leeson	902-555-5678	7405936210835246	67	Birch Road	E1C9R9	New Brunswick	14
\.


--
-- Data for Name: deliveryservice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.deliveryservice (companyname, drivername, vehiclemake, vehiclemodel, driverid) FROM stdin;
FEDEX                                             	John Smith                                        	Mercedes                                          	Sprinter                                          	1
FEDEX                                             	Olivia Anderson                                   	Mercedes                                          	Sprinter                                          	2
FEDEX                                             	Ethan Martinez                                    	Mercedes                                          	Sprinter                                          	3
UPS                                               	Sophia Garcia                                     	Nissan                                            	NV200                                             	4
UPS                                               	Benjamin Patel                                    	Nissan                                            	NV200                                             	5
\.


--
-- Data for Name: drink; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drink (menuid, sugarlevel, caffeine) FROM stdin;
11	Low	f
12	Regular	f
13	Low	f
14	Regular	f
15	High	f
\.


--
-- Data for Name: entree; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entree (menuid, extracarb, extraprotein) FROM stdin;
6	One serving	One serving
7	One serving	Two serving
8	Two serving	One serving
9	Two serving	Two serving
10	One serving	One serving
\.


--
-- Data for Name: has; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.has (sid, ingid) FROM stdin;
1	1
2	2
3	3
4	4
5	5
1	2
1	3
1	4
1	5
2	1
4	3
5	4
5	2
5	3
5	1
\.


--
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingredients (ingid, ingname) FROM stdin;
1	Egg
2	Beef
3	Salmon
4	Chicken
5	Penne
\.


--
-- Data for Name: manager; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manager (mname, mid) FROM stdin;
ManagerA	1
ManagerB	2
ManagerC	3
ManagerD	4
ManagerE	5
\.


--
-- Data for Name: meals_from_contains; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meals_from_contains (orderid, menuid, quantity) FROM stdin;
1	1	1
2	2	2
3	2	1
3	4	3
4	2	1
5	11	1
6	15	2
7	12	1
8	4	3
4	7	1
2	8	1
7	10	3
5	2	1
\.


--
-- Data for Name: menuitem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menuitem (menuid, menuname, mealtype, calories, cost) FROM stdin;
1	Cookies	high calories	850	5.99
2	Keto cookies	low calories	200	5.99
3	Candies	regular calories	600	5.99
4	Chips	high calories	350	5.99
5	Watermelon	low calories	130	5.99
6	Chicken burger	high calories	350	5.99
7	Chicken burger	low calories	130	5.99
8	Chicken burger	high calories	350	5.99
9	Chicken burger	high calories	850	5.99
10	Beef burger	low calories	200	5.99
11	Watermelon smoothie	regular calories	600	5.99
12	Watermeloon smoothie	high calories	350	5.99
13	Strawberry smoothie	low calories	130	5.99
14	Strawberry smoothie	high calories	350	5.99
15	Strawberry smoothie	low calories	130	5.99
\.


--
-- Data for Name: order_makes_sent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_makes_sent (customerid, driverid, cost, orderstatus, orderid) FROM stdin;
10	1	19.99	completed	1
12	2	15.45	Being Prepared	2
11	2	12.33	completed	3
13	3	16.23	completed	4
14	4	17.33	completed	5
14	4	12.33	Incomplete	6
27	2	16	Incomplete	7
11	1	25	completed	8
\.


--
-- Data for Name: snack; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.snack (menuid, healthy) FROM stdin;
1	No
2	Yes
3	No
4	Yes
5	No
\.


--
-- Data for Name: specify; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specify (menuid, ingid, qty) FROM stdin;
6	4	3
7	4	4
10	2	4
1	1	3
6	1	1
\.


--
-- Data for Name: supplier; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supplier (sname, phone, address, supplierid) FROM stdin;
John	604-986-7020	309 63rd St. #411	1
Mark	604-658-9932	6223 Bateman St.	2
Dean	604-822-6935	589 Darwin Ln.	3
Ed	604-822-2811	67 Seventh Av.	4
Alex	604-822-2812	5420 Telegraph Av.	5
\.


--
-- Data for Name: supply_supplies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supply_supplies (supplierid, sid) FROM stdin;
1	1
2	2
3	3
4	4
5	5
\.


--
-- Name: chef_employed_chefid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chef_employed_chefid_seq', 5, true);


--
-- Name: customer_customerid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_customerid_seq', 28, true);


--
-- Name: deliveryservice_driverid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.deliveryservice_driverid_seq', 5, true);


--
-- Name: ingredients_ingid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingredients_ingid_seq', 1, false);


--
-- Name: manager_mid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.manager_mid_seq', 5, true);


--
-- Name: menuitem_menuid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menuitem_menuid_seq', 1, false);


--
-- Name: order_makes_sent_orderid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_makes_sent_orderid_seq', 8, true);


--
-- Name: supplier_supplierid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.supplier_supplierid_seq', 5, true);


--
-- Name: supply_supplies_sid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.supply_supplies_sid_seq', 5, true);


--
-- Name: chef_employed chef_employed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chef_employed
    ADD CONSTRAINT chef_employed_pkey PRIMARY KEY (chefid);


--
-- Name: cooks cooks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cooks
    ADD CONSTRAINT cooks_pkey PRIMARY KEY (chefid, menuid, orderid);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customerid);


--
-- Name: deliveryservice deliveryservice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveryservice
    ADD CONSTRAINT deliveryservice_pkey PRIMARY KEY (driverid);


--
-- Name: drink drink_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drink
    ADD CONSTRAINT drink_pkey PRIMARY KEY (menuid);


--
-- Name: entree entree_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entree
    ADD CONSTRAINT entree_pkey PRIMARY KEY (menuid);


--
-- Name: has has_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.has
    ADD CONSTRAINT has_pkey PRIMARY KEY (sid, ingid);


--
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingid);


--
-- Name: manager manager_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_pkey PRIMARY KEY (mid);


--
-- Name: meals_from_contains meals_from_contains_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meals_from_contains
    ADD CONSTRAINT meals_from_contains_pkey PRIMARY KEY (orderid, menuid);


--
-- Name: menuitem menuitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menuitem
    ADD CONSTRAINT menuitem_pkey PRIMARY KEY (menuid);


--
-- Name: order_makes_sent order_makes_sent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_makes_sent
    ADD CONSTRAINT order_makes_sent_pkey PRIMARY KEY (orderid);


--
-- Name: snack snack_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack
    ADD CONSTRAINT snack_pkey PRIMARY KEY (menuid);


--
-- Name: specify specify_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specify
    ADD CONSTRAINT specify_pkey PRIMARY KEY (menuid, ingid);


--
-- Name: supplier supplier_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplierid);


--
-- Name: supply_supplies supply_supplies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supply_supplies
    ADD CONSTRAINT supply_supplies_pkey PRIMARY KEY (sid);


--
-- Name: chef_employed chef_employed_mid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chef_employed
    ADD CONSTRAINT chef_employed_mid_fkey FOREIGN KEY (mid) REFERENCES public.manager(mid) ON DELETE CASCADE;


--
-- Name: cooks cooks_chefid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cooks
    ADD CONSTRAINT cooks_chefid_fkey FOREIGN KEY (chefid) REFERENCES public.chef_employed(chefid);


--
-- Name: cooks cooks_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cooks
    ADD CONSTRAINT cooks_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid);


--
-- Name: cooks cooks_orderid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cooks
    ADD CONSTRAINT cooks_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.order_makes_sent(orderid);


--
-- Name: drink drink_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drink
    ADD CONSTRAINT drink_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid);


--
-- Name: entree entree_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entree
    ADD CONSTRAINT entree_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid);


--
-- Name: has has_ingid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.has
    ADD CONSTRAINT has_ingid_fkey FOREIGN KEY (ingid) REFERENCES public.ingredients(ingid) ON DELETE CASCADE;


--
-- Name: has has_sid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.has
    ADD CONSTRAINT has_sid_fkey FOREIGN KEY (sid) REFERENCES public.supply_supplies(sid) ON DELETE CASCADE;


--
-- Name: meals_from_contains meals_from_contains_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meals_from_contains
    ADD CONSTRAINT meals_from_contains_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid);


--
-- Name: meals_from_contains meals_from_contains_orderid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meals_from_contains
    ADD CONSTRAINT meals_from_contains_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.order_makes_sent(orderid) ON DELETE CASCADE;


--
-- Name: order_makes_sent order_makes_sent_customerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_makes_sent
    ADD CONSTRAINT order_makes_sent_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.customer(customerid);


--
-- Name: order_makes_sent order_makes_sent_driverid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_makes_sent
    ADD CONSTRAINT order_makes_sent_driverid_fkey FOREIGN KEY (driverid) REFERENCES public.deliveryservice(driverid);


--
-- Name: snack snack_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack
    ADD CONSTRAINT snack_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid);


--
-- Name: specify specify_ingid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specify
    ADD CONSTRAINT specify_ingid_fkey FOREIGN KEY (ingid) REFERENCES public.ingredients(ingid) ON DELETE CASCADE;


--
-- Name: specify specify_menuid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specify
    ADD CONSTRAINT specify_menuid_fkey FOREIGN KEY (menuid) REFERENCES public.menuitem(menuid) ON DELETE CASCADE;


--
-- Name: supply_supplies supply_supplies_supplierid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supply_supplies
    ADD CONSTRAINT supply_supplies_supplierid_fkey FOREIGN KEY (supplierid) REFERENCES public.supplier(supplierid) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

