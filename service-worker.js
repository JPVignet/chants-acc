const CACHE_NAME = "chants-cache-v3";

/**
 * ⚠️ LISTE COMPLETE DES FICHIERS A METTRE EN OFFLINE
 * (index + catégories + 220 chants)
 */
const FILES = [
  "./",
  "index.html",
  "style.css",

  "Chants_Basques_img/index.html",
  "Chants_Gascons_img/index.html",
  "Chants_Francophones_img/index.html",
  "Chants_Espagnols_img/index.html",
  "Chants_Creoles_img/index.html",
  "Chants_Corses_img/index.html",

  "Chants_Basques_img/ABENTURAZ_ABENTURA-1.jpg",
  "Chants_Basques_img/ABENTURAZ_ABENTURA-2.jpg",
  "Chants_Basques_img/Aberriaren_Mugak-1.jpg",
  "Chants_Basques_img/Agure_Zaharra-1.jpg",
  "Chants_Basques_img/Agur_Jaunak-1.jpg",
  "Chants_Basques_img/Aita_Semeak-1.jpg",
  "Chants_Basques_img/Aitorren_Hizkuntz_Zaharra-1.jpg",
  "Chants_Basques_img/Aitorren_Hizkuntz_Zaharra-2.jpg",
  "Chants_Basques_img/Ama_Lurraren_Oihua-1.jpg",
  "Chants_Basques_img/Amets_bat_ote_da-1.jpg",
  "Chants_Basques_img/Amets_bat_ote_da-2.jpg",
  "Chants_Basques_img/Andre_Madalen-1.jpg",
  "Chants_Basques_img/Andre_Madalen-2.jpg",
  "Chants_Basques_img/Arbola_Gainean-1.jpg",
  "Chants_Basques_img/Ardiak_Lerro_Lerro-1.jpg",
  "Chants_Basques_img/ARGI_ZIRRINTA_ZENIAN-1.jpg",
  "Chants_Basques_img/ARGI_ZIRRINTA_ZENIAN-2.jpg",
  "Chants_Basques_img/Arrantzaleak-1.jpg",
  "Chants_Basques_img/Arrosako_Zolan-1.jpg",
  "Chants_Basques_img/Askatasunaren_Adarra-1.jpg",
  "Chants_Basques_img/Askatasunera-1.jpg",
  "Chants_Basques_img/Atarratzeko_Gazteluko_Kantua-1.jpg",
  "Chants_Basques_img/Athenry-Ko_Zelaiak-1.jpg",
  "Chants_Basques_img/Auzoan_Zer_Berri_Den-1.jpg",
  "Chants_Basques_img/Auzoan_Zer_Berri_Den-2.jpg",
  "Chants_Basques_img/Azken_Dantza_Hau-1.jpg",
  "Chants_Basques_img/Bagare-1.jpg",
  "Chants_Basques_img/BAKEAREN_MUSIKA-1.jpg",
  "Chants_Basques_img/BAKEAREN_MUSIKA-2.jpg",
  "Chants_Basques_img/Baldorba-1.jpg",
  "Chants_Basques_img/Baldorba-2.jpg",
  "Chants_Basques_img/Bale_ihizi-1.jpg",
  "Chants_Basques_img/Baratze_Bat-1.jpg",
  "Chants_Basques_img/Bedatsian-1.jpg",
  "Chants_Basques_img/Bedatsian-2.jpg",
  "Chants_Basques_img/Begiak_Farrez-1.jpg",
  "Chants_Basques_img/Begi_Urdinezko_Izarra-1.jpg",
  "Chants_Basques_img/Begi_Urdinezko_Izarra-2.jpg",
  "Chants_Basques_img/Bella_Ciao-1.jpg",
  "Chants_Basques_img/BELLA_CIAO_ABERTZALE-1.jpg",
  "Chants_Basques_img/Bihotza-1.jpg",
  "Chants_Basques_img/Bi_Haurren_Ametsa-1.jpg",
  "Chants_Basques_img/Boga_Boga-1.jpg",
  "Chants_Basques_img/DIN_DAN_DON-1.jpg",
  "Chants_Basques_img/DONOSTIAKO_MARTXA-1.jpg",
  "Chants_Basques_img/De_Treville_ren_Azken_Hitzak-1.jpg",
  "Chants_Basques_img/Egun_Da_Santi_Mamina-1.jpg",
  "Chants_Basques_img/EGUN_ON-1.jpg",
  "Chants_Basques_img/Ekaitza-1.jpg",
  "Chants_Basques_img/Eki_Eder-1.jpg",
  "Chants_Basques_img/Eki_Eder-2.jpg",
  "Chants_Basques_img/ELURRA_TEILATUAN-1.jpg",
  "Chants_Basques_img/Ene_Amodioa-1.jpg",
  "Chants_Basques_img/Enaut_Bidegorri-1.jpg",
  "Chants_Basques_img/Enaut_Bidegorri-2.jpg",
  "Chants_Basques_img/Eperra-1.jpg",
  "Chants_Basques_img/Eskualduna_Naiz_Eta-1.jpg",
  "Chants_Basques_img/Etxahun_Iruri-1.jpg",
  "Chants_Basques_img/Euskal_Herrian_Euskaraz-1.jpg",
  "Chants_Basques_img/Ez_Ginuke-1.jpg",
  "Chants_Basques_img/Ez_Ginuke-2.jpg",
  "Chants_Basques_img/Ez_Ez_Dut_Nahi-1.jpg",
  "Chants_Basques_img/Galdetzen-1.jpg",
  "Chants_Basques_img/Galdetzen-2.jpg",
  "Chants_Basques_img/Gazte_Naiz_Gazte-1.jpg",
  "Chants_Basques_img/GEREZIEN_DENBORA-1.jpg",
  "Chants_Basques_img/Gogoaren_Baitan-1.jpg",
  "Chants_Basques_img/GOIZEAN_GOIZ_JEIKIRIK-1.jpg",
  "Chants_Basques_img/GOIZEAN_GOIZ_JEIKIRIK-2.jpg",
  "Chants_Basques_img/Goizian_Argi_Hastian-1.jpg",
  "Chants_Basques_img/Gora_Ta_Gora_Beti-1.jpg",
  "Chants_Basques_img/Gora_Ta_Gora_Beti-2.jpg",
  "Chants_Basques_img/Greziako_Itsasontzia-1.jpg",
  "Chants_Basques_img/Guk_Euskaraz-1.jpg",
  "Chants_Basques_img/GURE_AITA-1.jpg",
  "Chants_Basques_img/Habanera-1.jpg",
  "Chants_Basques_img/Habanera-2.jpg",
  "Chants_Basques_img/Haizea-1.jpg",
  "Chants_Basques_img/Haizea-2.jpg",
  "Chants_Basques_img/HATOR-1.jpg",
  "Chants_Basques_img/Haurtxo_Seaskan-1.jpg",
  "Chants_Basques_img/Hegoak-1.jpg",
  "Chants_Basques_img/Herribehera-1.jpg",
  "Chants_Basques_img/Haurrak_ikasazue-1.jpg",
  "Chants_Basques_img/Ikusi_Nuenean-1.jpg",
  "Chants_Basques_img/Ikusi_Nuenean-2.jpg",
  "Chants_Basques_img/Ikusten_Duzu_Goizean-1.jpg",
  "Chants_Basques_img/Iluntzean-1.jpg",
  "Chants_Basques_img/ITSASOA-1.jpg",
  "Chants_Basques_img/Itsasoan_Urak_Haundi-1.jpg",
  "Chants_Basques_img/ITSASOARI_BEGIRA-1.jpg",
  "Chants_Basques_img/ITSASOARI_BEGIRA-2.jpg",
  "Chants_Basques_img/Itsas_Ontzi_Baten-1.jpg",
  "Chants_Basques_img/Ituringo_Arotza-1.jpg",
  "Chants_Basques_img/Ixiltasuna-1.jpg",
  "Chants_Basques_img/Ixilik_Dago-1.jpg",
  "Chants_Basques_img/Jaun_Baruak-1.jpg",
  "Chants_Basques_img/Joseba_Elosegi-1.jpg",
  "Chants_Basques_img/Joseba_Elosegi-2.jpg",
  "Chants_Basques_img/Kattalin-1.jpg",
  "Chants_Basques_img/Kriolinak-1.jpg",
  "Chants_Basques_img/Kriolinak-2.jpg",
  "Chants_Basques_img/Kultur_Kirol-1.jpg",
  "Chants_Basques_img/Lagun_Etor_Gurekin-1.jpg",
  "Chants_Basques_img/Lanik_Gabe-1.jpg",
  "Chants_Basques_img/Lanik_Gabe-2.jpg",
  "Chants_Basques_img/Larrosa_Kolorez-1.jpg",
  "Chants_Basques_img/Larrosa_Kolorez-2.jpg",
  "Chants_Basques_img/Lau_Teilatu-1.jpg",
  "Chants_Basques_img/LA_PALOMA-1.jpg",
  "Chants_Basques_img/LA_PALOMA-2.jpg",
  "Chants_Basques_img/Loreak_Udan-1.jpg",
  "Chants_Basques_img/Loretxoa-1.jpg",
  "Chants_Basques_img/Lore_Polit_Baten_Bila-1.jpg",
  "Chants_Basques_img/Maitasun_Aroak-1.jpg",
  "Chants_Basques_img/Maitasun_Nortasun-1.jpg",
  "Chants_Basques_img/Maitiak_Galde_Egin_Zautan-1.jpg",
  "Chants_Basques_img/Maria_Solt_Eta_Kastero-1.jpg",
  "Chants_Basques_img/Marinelaren_Kontra_Pasa-1.jpg",
  "Chants_Basques_img/Marinelaren_Kontra_Pasa-2.jpg",
  "Chants_Basques_img/Martxa_Baten_Lehen_Notak-1.jpg",
  "Chants_Basques_img/Matalaz-1.jpg",
  "Chants_Basques_img/Mendian_Gora_Haritza-1.jpg",
  "Chants_Basques_img/Munagorriren_Bertsoak-1.jpg",
  "Chants_Basques_img/Munagorriren_Bertsoak-2.jpg",
  "Chants_Basques_img/MUNDUKO_JABE-1.jpg",
  "Chants_Basques_img/Mundurat_Eman_Ninduzun-1.jpg",
  "Chants_Basques_img/Nere_Heriko_Neskatxa_Maite-1.jpg",
  "Chants_Basques_img/Neskatxa_ezagun_bat-1.jpg",
  "Chants_Basques_img/Neure_Andrea_Andre_Ona_Da-1.jpg",
  "Chants_Basques_img/Nevadarat_Joan_Nintzan-1.jpg",
  "Chants_Basques_img/Nigarra_Begian-1.jpg",
  "Chants_Basques_img/Nigarrez_Sortu-1.jpg",
  "Chants_Basques_img/NIRE_HERRIA_BEZALA-1.jpg",
  "Chants_Basques_img/Nola_Bizi_Hala_Kanta-1.jpg",
  "Chants_Basques_img/Non_Geratzen_Den_Denbora-1.jpg",
  "Chants_Basques_img/Oihan_Beltzian-1.jpg",
  "Chants_Basques_img/Oi_Ama_Eskual_Herri-1.jpg",
  "Chants_Basques_img/Oi_Gu_Hemen-1.jpg",
  "Chants_Basques_img/Oi_Kanta_Berri-1.jpg",
  "Chants_Basques_img/Oi_Kanta_Berri-2.jpg",
  "Chants_Basques_img/Olentzero-1.jpg",
  "Chants_Basques_img/ONDARABIA-1.jpg",
  "Chants_Basques_img/Olentzeroren_oparia-1.jpg",
  "Chants_Basques_img/Olentzeroren_oparia-2.jpg",
  "Chants_Basques_img/Parisen_Eta_Madrilen-1.jpg",
  "Chants_Basques_img/Pena_Baiona-1.jpg",
  "Chants_Basques_img/Pena_Baiona-2.jpg",
  "Chants_Basques_img/Pena_Baiona_(Euskara)-1.jpg",
  "Chants_Basques_img/Pena_Baiona_(Euskara)-2.jpg",
  "Chants_Basques_img/Pilotarien_Biltzarra-1.jpg",
  "Chants_Basques_img/Pottoka-1.jpg",
  "Chants_Basques_img/Primaderako_Liliak-1.jpg",
  "Chants_Basques_img/Primaderako_Liliak-2.jpg",
  "Chants_Basques_img/Prima_Eijerra-1.jpg",
  "Chants_Basques_img/Seaska_Kanta-1.jpg",
  "Chants_Basques_img/Topa_Dagigun-1.jpg",
  "Chants_Basques_img/Txalaparta-1.jpg",
  "Chants_Basques_img/TXIKIA-1.jpg",
  "Chants_Basques_img/TXIKIA-2.jpg",
  "Chants_Basques_img/Ttiki_Ttikitik-1.jpg",
  "Chants_Basques_img/Ttiki_Ttikitik-2.jpg",
  "Chants_Basques_img/Urte_Batez-1.jpg",
  "Chants_Basques_img/Urte_Batez-2.jpg",
  "Chants_Basques_img/Urtxintxak-1.jpg",
  "Chants_Basques_img/Urtxintxak-2.jpg",
  "Chants_Basques_img/Usaian_Bezala-1.jpg",
  "Chants_Basques_img/Usaian_Bezala-2.jpg",
  "Chants_Basques_img/Urtoroz_bezala-1.jpg",
  "Chants_Basques_img/Xalbadorren_Heriotzean-1.jpg",
  "Chants_Basques_img/Xorieri_Mintzo_Zen-1.jpg",
  "Chants_Basques_img/Xorieri_Mintzo_Zen-2.jpg",
  "Chants_Basques_img/XORROTXAK-1.jpg",
  "Chants_Basques_img/XORROTXAK-2.jpg",
  "Chants_Basques_img/Zazpi_Euskal_Herriek-1.jpg",
  "Chants_Basques_img/ZAZPI_LORE-1.jpg",
  "Chants_Basques_img/Zenbat_Gara_Angelu-1.jpg",
  "Chants_Basques_img/Zenbat_Gera-1.jpg",
  "Chants_Basques_img/Zertarako-1.jpg",
  "Chants_Basques_img/Zato_Olentzero-1.jpg",
  "Chants_Basques_img/Zato_Olentzero-2.jpg",
  "Chants_Basques_img/Zazpiak_Oihal_Batetik-1.jpg",
  "Chants_Basques_img/Zazpiak_Oihal_Batetik-2.jpg",
  "Chants_Basques_img/Zurekin_batera-1.jpg",
  "Chants_Basques_img/Zurekin_batera-2.jpg",
  "Chants_Basques_img/index-1.jpg",
  "Chants_Basques_img/style.css",
  "Chants_Corses_img/COMPANERO-1.jpg",
  "Chants_Corses_img/VOLE-1.jpg",
  "Chants_Corses_img/index.html",
  "Chants_Corses_img/style.css",
  "Chants_Creoles_img/Ba_moin_en_tibo-1.jpg",
  "Chants_Creoles_img/Ba_moin_en_tibo-2.jpg",
  "Chants_Creoles_img/INN_TI_MANZEL-1.jpg",
  "Chants_Creoles_img/INN_TI_MANZEL-2.jpg",
  "Chants_Creoles_img/P_tite_Fleur_Aime-1.jpg",
  "Chants_Creoles_img/index.html",
  "Chants_Creoles_img/style.css",
  "Chants_Espagnols_img/AMOR_DE_MIS_AMORES-1.jpg",
  "Chants_Espagnols_img/AMOR_DE_MIS_AMORES-2.jpg",
  "Chants_Espagnols_img/CHIRI_BIRIBIN_MARIA_ISABEL-1.jpg",
  "Chants_Espagnols_img/CIELITO_LINDO-1.jpg",
  "Chants_Espagnols_img/CLAVERITOS-1.jpg",
  "Chants_Espagnols_img/COLEGIALA-1.jpg",
  "Chants_Espagnols_img/DE_COLORES-1.jpg",
  "Chants_Espagnols_img/DIOS_TE_SALVE_MARIA-1.jpg",
  "Chants_Espagnols_img/GUANTANAMERA-1.jpg",
  "Chants_Espagnols_img/Las_Mananitas-1.jpg",
  "Chants_Espagnols_img/Las_Mananitas-2.jpg",
  "Chants_Espagnols_img/LA_ADELITA-1.jpg",
  "Chants_Espagnols_img/LA_CAMIONETA_DE_MI_PAPA-1.jpg",
  "Chants_Espagnols_img/LA_CLARA-1.jpg",
  "Chants_Espagnols_img/LA_MINA_MARIA_LUISA-1.jpg",
  "Chants_Espagnols_img/NO_NOS_MOVERAN-1.jpg",
  "Chants_Espagnols_img/NO_NOS_MOVERAN-2.jpg",
  "Chants_Espagnols_img/PORQUE_TE_VAS-1.jpg",
  "Chants_Espagnols_img/index.html",
  "Chants_Espagnols_img/style.css",
  "Chants_Francophones_img/ATTENTION_MESDAMES_ET_MESSIEURS-1.jpg",
  "Chants_Francophones_img/ATTENTION_MESDAMES_ET_MESSIEURS-2.jpg",
  "Chants_Francophones_img/AUPA_BO-1.jpg",
  "Chants_Francophones_img/AUPA_BO-2.jpg",
  "Chants_Francophones_img/A_toi-1.jpg",
  "Chants_Francophones_img/A_toi-2.jpg",
  "Chants_Francophones_img/Aline-1.jpg",
  "Chants_Francophones_img/BELLE-1.jpg",
  "Chants_Francophones_img/BELLE-2.jpg",
  "Chants_Francophones_img/CA_SERT_A_QUOI-1.jpg",
  "Chants_Francophones_img/CA_SERT_A_QUOI-2.jpg",
  "Chants_Francophones_img/CHANTE-1.jpg",
  "Chants_Francophones_img/Comme_Un_Soleil-1.jpg",
  "Chants_Francophones_img/Comme_Un_Soleil-2.jpg",
  "Chants_Francophones_img/Ca_fait_rire_les_oiseaux-1.jpg",
  "Chants_Francophones_img/Ca_fait_rire_les_oiseaux-2.jpg",
  "Chants_Francophones_img/DONNE_DU_RHUM_A_TON_HOMME-1.jpg",
  "Chants_Francophones_img/DONNE_DU_RHUM_A_TON_HOMME-2.jpg",
  "Chants_Francophones_img/EMMENEZ_MOI-1.jpg",
  "Chants_Francophones_img/EMMENEZ_MOI-2.jpg",
  "Chants_Francophones_img/ETOILE_DES_NEIGES-1.jpg",
  "Chants_Francophones_img/ETOILE_DES_NEIGES-2.jpg",
  "Chants_Francophones_img/ET_MAINTENANT-1.jpg",
  "Chants_Francophones_img/ET_MAINTENANT-2.jpg",
  "Chants_Francophones_img/Fais_comme_l_oiseau-1.jpg",
  "Chants_Francophones_img/Fais_comme_l_oiseau-2.jpg",
  "Chants_Francophones_img/GENS_DU_PAYS-1.jpg",
  "Chants_Francophones_img/HARMONIE_DU_SOIR_A_CHATEAUGAY-1.jpg",
  "Chants_Francophones_img/HARMONIE_DU_SOIR_A_CHATEAUGAY-2.jpg",
  "Chants_Francophones_img/IL_FAUT_QUE_JE_M_EN_AILLE-1.jpg",
  "Chants_Francophones_img/JE_N_AURAI_PAS_LE_TEMPS-1.jpg",
  "Chants_Francophones_img/JOLIE_BOUTEILLE-1.jpg",
  "Chants_Francophones_img/L_EQUIPE_A_JOJO-1.jpg",
  "Chants_Francophones_img/L_EQUIPE_A_JOJO-2.jpg",
  "Chants_Francophones_img/LA_BALADE_NORD_IRLANDAISE-1.jpg",
  "Chants_Francophones_img/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA-1.jpg",
  "Chants_Francophones_img/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA-2.jpg",
  "Chants_Francophones_img/LA_MALADIE_D_AMOUR-1.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU-1.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU-2.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU-3.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU-4.jpg",
  "Chants_Francophones_img/LES_AMANTS_DUN_JOUR-1.jpg",
  "Chants_Francophones_img/LES_AMANTS_DUN_JOUR-2.jpg",
  "Chants_Francophones_img/LES_COPAINS_D_ABORD-1.jpg",
  "Chants_Francophones_img/LES_COPAINS_D_ABORD-2.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon-1.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon-2.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon-3.jpg",
  "Chants_Francophones_img/Le_berger_d_aure-1.jpg",
  "Chants_Francophones_img/Le_berger_d_aure-2.jpg",
  "Chants_Francophones_img/LE_LION_EST_MORT_CE_SOIR-1.jpg",
  "Chants_Francophones_img/LE_LION_EST_MORT_CE_SOIR-2.jpg",
  "Chants_Francophones_img/LE_PETIT_BONHEUR-1.jpg",
  "Chants_Francophones_img/LE_PETIT_BONHEUR-2.jpg",
  "Chants_Francophones_img/LE_ROCK_DU_COCHON-1.jpg",
  "Chants_Francophones_img/La_Montagne-1.jpg",
  "Chants_Francophones_img/La_Montagne-2.jpg",
  "Chants_Francophones_img/La_ballade_des_gens_heureux-1.jpg",
  "Chants_Francophones_img/La_ballade_des_gens_heureux-2.jpg",
  "Chants_Francophones_img/La_chanson_de_Prevert-1.jpg",
  "Chants_Francophones_img/La_fleur_aux_dents-1.jpg",
  "Chants_Francophones_img/La_javanaise-1.jpg",
  "Chants_Francophones_img/Le_Chiffon_Rouge-1.jpg",
  "Chants_Francophones_img/Le_Chiffon_Rouge-2.jpg",
  "Chants_Francophones_img/Le_Steak-1.jpg",
  "Chants_Francophones_img/Le_Steak-2.jpg",
  "Chants_Francophones_img/Le_Steak-3.jpg",
  "Chants_Francophones_img/Les_Champs_ELYSEES-1.jpg",
  "Chants_Francophones_img/Les_Rois_Mages-1.jpg",
  "Chants_Francophones_img/Les_Rois_Mages-2.jpg",
  "Chants_Francophones_img/MAMY_BLUE-1.jpg",
  "Chants_Francophones_img/Mon_Dieu-1.jpg",
  "Chants_Francophones_img/Mon_Dieu-2.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean-1.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean-2.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean-3.jpg",
  "Chants_Francophones_img/NON_RIEN_DE_RIEN-1.jpg",
  "Chants_Francophones_img/POUR_UN_FLIRT-1.jpg",
  "Chants_Francophones_img/S_ASSOIR_PAR_TERRE-1.jpg",
  "Chants_Francophones_img/SALUT_LES_AMOUREUX-1.jpg",
  "Chants_Francophones_img/SANTIANO-1.jpg",
  "Chants_Francophones_img/SANTIANO-2.jpg",
  "Chants_Francophones_img/Siffler_sur_la_colline-1.jpg",
  "Chants_Francophones_img/Tous_les_garcons_et_les_filles-1.jpg",
  "Chants_Francophones_img/Tous_les_garcons_et_les_filles-2.jpg",
  "Chants_Francophones_img/Travailler_c_est_trop_dur-1.jpg",
  "Chants_Francophones_img/UN_BEAU_ROMAN-1.jpg",
  "Chants_Francophones_img/UN_BEAU_ROMAN-2.jpg",
  "Chants_Francophones_img/YA_SA_PICHOU-1.jpg",
  "Chants_Francophones_img/YA_SA_PICHOU-2.jpg",
  "Chants_Francophones_img/index.html",
  "Chants_Francophones_img/style.css",
  "Chants_Gascons_img/DE_CAP_TA_L_IMMORTELA-1.jpg",
  "Chants_Gascons_img/DIS_MAMIE-1.jpg",
  "Chants_Gascons_img/L_ENCANTADA-1.jpg",
  "Chants_Gascons_img/L_ENCANTADA-2.jpg",
  "Chants_Gascons_img/L_ENCANTADA_Phonetique-1.jpg",
  "Chants_Gascons_img/L_ENCANTADA_Phonetique-2.jpg",
  "Chants_Gascons_img/index.html",
  "Chants_Gascons_img/style.css",


];

self.addEventListener("install", event => {
  self.skipWaiting();

  console.log("INSTALL SW - démarrage préchargement");

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      let ok = 0;
      let ko = 0;

      for (const url of FILES) {
        try {
          const response = await fetch(url, { cache: "reload" });

          if (response && response.ok) {
            await cache.put(url, response);
            ok++;
          } else {
            ko++;
            console.warn("skip fichier:", url);
          }
        } catch (e) {
          ko++;
          console.warn("erreur fichier:", url);
        }
      }

      console.log("INSTALL SW - terminé");
      console.log("OK =", ok);
      console.log("KO =", ko);

    })()
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys.map(k => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
        })
      );

      await self.clients.claim();
    })()
  );
});

/**
 * STRATÉGIE OFFLINE FIABLE :
 * - cache si dispo
 * - sinon réseau
 * - et on enrichit le cache progressivement
 */
self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // HTML : réseau d'abord
  if (
    event.request.mode === "navigate" ||
    url.pathname.endsWith(".html")
  ) {

    event.respondWith(
      (async () => {

        const cache = await caches.open(CACHE_NAME);

        try {

          const response = await fetch(event.request);

          if (response && response.ok) {
            cache.put(event.request, response.clone());
          }

          return response;

        } catch (e) {

          return cache.match(event.request);

        }

      })()
    );

    return;
  }

  // CSS, images, manifest, etc. : cache d'abord
  event.respondWith(
    (async () => {

      const cache = await caches.open(CACHE_NAME);

      const cached = await cache.match(event.request);

      if (cached) return cached;

      const response = await fetch(event.request);

      if (response && response.ok) {
        cache.put(event.request, response.clone());
      }

      return response;

    })()
  );

});

