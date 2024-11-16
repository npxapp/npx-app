--
-- PostgreSQL database dump
--

-- Dumped from database version 11.22 (Debian 11.22-0+deb10u2)
-- Dumped by pg_dump version 11.22 (Debian 11.22-0+deb10u2)

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

SET default_with_oids = false;

--
-- Name: payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payments (
    id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    payment_intent_id character varying(255) NOT NULL,
    token integer NOT NULL,
    payment_status character varying(50) NOT NULL,
    card_last4 character varying(4) NOT NULL,
    card_type character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.payments OWNER TO postgres;

--
-- Name: payments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payments_id_seq OWNER TO postgres;

--
-- Name: payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payments_id_seq OWNED BY public.payments.id;


--
-- Name: payments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments ALTER COLUMN id SET DEFAULT nextval('public.payments_id_seq'::regclass);


--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payments (id, session_id, payment_intent_id, token, payment_status, card_last4, card_type, created_at) FROM stdin;
1	npx-app-0a1b2c3d4e5f6g7h	pi_1FjdiAhJKg5h78y	123456	succeeded	1234	visa	2024-11-13 21:02:01.009684
2	npx-app-8i9j0k1l2m3n4o5p	pi_2GskdbUi67h78y	654321	succeeded	5678	mastercard	2024-11-13 21:02:01.105496
3	npx-app-6p7q8r9s0t1u2v3w	pi_3HskdbAK67h78y	789012	succeeded	3456	discover	2024-11-13 21:02:01.113687
4	npx-app-4x5y6z7a8b9c0d1e	pi_4IjdsngFK67h78y	234567	succeeded	2345	amex	2024-11-13 21:02:01.117619
5	npx-app-2f3g4h5i6j7k8l9m	pi_5KbdAKJG67h78y	890123	succeeded	7890	visa	2024-11-13 21:02:01.121334
6	npx-app-0n1o2p3q4r5s6t7u	pi_6LskdbFKJ67h78y	345678	succeeded	4567	mastercard	2024-11-13 21:02:01.129522
\.


--
-- Name: payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payments_id_seq', 6, true);


--
-- Name: payments payments_payment_intent_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_payment_intent_id_key UNIQUE (payment_intent_id);


--
-- Name: payments payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

