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

  "Chants_Basques_img/ABENTURAZ_ABENTURA_1.jpg",
  "Chants_Basques_img/ABENTURAZ_ABENTURA_2.jpg",
  "Chants_Basques_img/Aberriaren_Mugak_1.jpg",
  "Chants_Basques_img/Agure_Zaharra_1.jpg",
  "Chants_Basques_img/Agur_Jaunak_1.jpg",
  "Chants_Basques_img/Aita_Semeak_1.jpg",
  "Chants_Basques_img/Aitorren_Hizkuntz_Zaharra_1.jpg",
  "Chants_Basques_img/Aitorren_Hizkuntz_Zaharra_2.jpg",
  "Chants_Basques_img/Ama_Lurraren_Oihua_1.jpg",
  "Chants_Basques_img/Amets_bat_ote_da_1.jpg",
  "Chants_Basques_img/Amets_bat_ote_da_2.jpg",
  "Chants_Basques_img/Andre_Madalen_1.jpg",
  "Chants_Basques_img/Andre_Madalen_2.jpg",
  "Chants_Basques_img/Arbola_Gainean_1.jpg",
  "Chants_Basques_img/Ardiak_Lerro_Lerro_1.jpg",
  "Chants_Basques_img/ARGI_ZIRRINTA_ZENIAN_1.jpg",
  "Chants_Basques_img/ARGI_ZIRRINTA_ZENIAN_2.jpg",
  "Chants_Basques_img/Arrantzaleak_1.jpg",
  "Chants_Basques_img/Arrosako_Zolan_1.jpg",
  "Chants_Basques_img/Askatasunaren_Adarra_1.jpg",
  "Chants_Basques_img/Askatasunera_1.jpg",
  "Chants_Basques_img/Atarratzeko_Gazteluko_Kantua_1.jpg",
  "Chants_Basques_img/Athenry-Ko_Zelaiak_1.jpg",
  "Chants_Basques_img/Auzoan_Zer_Berri_Den_1.jpg",
  "Chants_Basques_img/Auzoan_Zer_Berri_Den_2.jpg",
  "Chants_Basques_img/Azken_Dantza_Hau_1.jpg",
  "Chants_Basques_img/Bagare_1.jpg",
  "Chants_Basques_img/BAKEAREN_MUSIKA_1.jpg",
  "Chants_Basques_img/BAKEAREN_MUSIKA_2.jpg",
  "Chants_Basques_img/Baldorba_1.jpg",
  "Chants_Basques_img/Baldorba_2.jpg",
  "Chants_Basques_img/Bale_ihizi_1.jpg",
  "Chants_Basques_img/Baratze_Bat_1.jpg",
  "Chants_Basques_img/Bedatsian_1.jpg",
  "Chants_Basques_img/Bedatsian_2.jpg",
  "Chants_Basques_img/Begiak_Farrez_1.jpg",
  "Chants_Basques_img/Begi_Urdinezko_Izarra_1.jpg",
  "Chants_Basques_img/Begi_Urdinezko_Izarra_2.jpg",
  "Chants_Basques_img/Bella_Ciao_1.jpg",
  "Chants_Basques_img/BELLA_CIAO_ABERTZALE_1.jpg",
  "Chants_Basques_img/Bihotza_1.jpg",
  "Chants_Basques_img/Bi_Haurren_Ametsa_1.jpg",
  "Chants_Basques_img/Boga_Boga_1.jpg",
  "Chants_Basques_img/DIN_DAN_DON_1.jpg",
  "Chants_Basques_img/DONOSTIAKO_MARTXA_1.jpg",
  "Chants_Basques_img/De_Treville_ren_Azken_Hitzak_1.jpg",
  "Chants_Basques_img/Egun_Da_Santi_Mamina_1.jpg",
  "Chants_Basques_img/EGUN_ON_1.jpg",
  "Chants_Basques_img/Ekaitza_1.jpg",
  "Chants_Basques_img/Eki_Eder_1.jpg",
  "Chants_Basques_img/Eki_Eder_2.jpg",
  "Chants_Basques_img/ELURRA_TEILATUAN_1.jpg",
  "Chants_Basques_img/Ene_Amodioa_1.jpg",
  "Chants_Basques_img/Enaut_Bidegorri_1.jpg",
  "Chants_Basques_img/Enaut_Bidegorri_2.jpg",
  "Chants_Basques_img/Eperra_1.jpg",
  "Chants_Basques_img/Eskualduna_Naiz_Eta_1.jpg",
  "Chants_Basques_img/Etxahun_Iruri_1.jpg",
  "Chants_Basques_img/Euskal_Herrian_Euskaraz_1.jpg",
  "Chants_Basques_img/Ez_Ginuke_1.jpg",
  "Chants_Basques_img/Ez_Ginuke_2.jpg",
  "Chants_Basques_img/Ez_Ez_Dut_Nahi_1.jpg",
  "Chants_Basques_img/Galdetzen_1.jpg",
  "Chants_Basques_img/Galdetzen_2.jpg",
  "Chants_Basques_img/Gazte_Naiz_Gazte_1.jpg",
  "Chants_Basques_img/GEREZIEN_DENBORA_1.jpg",
  "Chants_Basques_img/Gogoaren_Baitan_1.jpg",
  "Chants_Basques_img/GOIZEAN_GOIZ_JEIKIRIK_1.jpg",
  "Chants_Basques_img/GOIZEAN_GOIZ_JEIKIRIK_2.jpg",
  "Chants_Basques_img/Goizian_Argi_Hastian_1.jpg",
  "Chants_Basques_img/Gora_Ta_Gora_Beti_1.jpg",
  "Chants_Basques_img/Gora_Ta_Gora_Beti_2.jpg",
  "Chants_Basques_img/Greziako_Itsasontzia_1.jpg",
  "Chants_Basques_img/Guk_Euskaraz_1.jpg",
  "Chants_Basques_img/GURE_AITA_1.jpg",
  "Chants_Basques_img/Habanera_1.jpg",
  "Chants_Basques_img/Habanera_2.jpg",
  "Chants_Basques_img/Haizea_1.jpg",
  "Chants_Basques_img/Haizea_2.jpg",
  "Chants_Basques_img/HATOR_1.jpg",
  "Chants_Basques_img/Haurtxo_Seaskan_1.jpg",
  "Chants_Basques_img/Hegoak_1.jpg",
  "Chants_Basques_img/Herribehera_1.jpg",
  "Chants_Basques_img/Haurrak_ikasazue_1.jpg",
  "Chants_Basques_img/Ikusi_Nuenean_1.jpg",
  "Chants_Basques_img/Ikusi_Nuenean_2.jpg",
  "Chants_Basques_img/Ikusten_Duzu_Goizean_1.jpg",
  "Chants_Basques_img/Iluntzean_1.jpg",
  "Chants_Basques_img/ITSASOA_1.jpg",
  "Chants_Basques_img/Itsasoan_Urak_Haundi_1.jpg",
  "Chants_Basques_img/ITSASOARI_BEGIRA_1.jpg",
  "Chants_Basques_img/ITSASOARI_BEGIRA_2.jpg",
  "Chants_Basques_img/Itsas_Ontzi_Baten_1.jpg",
  "Chants_Basques_img/Ituringo_Arotza_1.jpg",
  "Chants_Basques_img/Ixiltasuna_1.jpg",
  "Chants_Basques_img/Ixilik_Dago_1.jpg",
  "Chants_Basques_img/Jaun_Baruak_1.jpg",
  "Chants_Basques_img/Joseba_Elosegi_1.jpg",
  "Chants_Basques_img/Joseba_Elosegi_2.jpg",
  "Chants_Basques_img/Kattalin_1.jpg",
  "Chants_Basques_img/Kriolinak_1.jpg",
  "Chants_Basques_img/Kriolinak_2.jpg",
  "Chants_Basques_img/Kultur_Kirol_1.jpg",
  "Chants_Basques_img/Lagun_Etor_Gurekin_1.jpg",
  "Chants_Basques_img/Lanik_Gabe_1.jpg",
  "Chants_Basques_img/Lanik_Gabe_2.jpg",
  "Chants_Basques_img/Larrosa_Kolorez_1.jpg",
  "Chants_Basques_img/Larrosa_Kolorez_2.jpg",
  "Chants_Basques_img/Lau_Teilatu_1.jpg",
  "Chants_Basques_img/LA_PALOMA_1.jpg",
  "Chants_Basques_img/LA_PALOMA_2.jpg",
  "Chants_Basques_img/Loreak_Udan_1.jpg",
  "Chants_Basques_img/Loretxoa_1.jpg",
  "Chants_Basques_img/Lore_Polit_Baten_Bila_1.jpg",
  "Chants_Basques_img/Maitasun_Aroak_1.jpg",
  "Chants_Basques_img/Maitasun_Nortasun_1.jpg",
  "Chants_Basques_img/Maitiak_Galde_Egin_Zautan_1.jpg",
  "Chants_Basques_img/Maria_Solt_Eta_Kastero_1.jpg",
  "Chants_Basques_img/Marinelaren_Kontra_Pasa_1.jpg",
  "Chants_Basques_img/Marinelaren_Kontra_Pasa_2.jpg",
  "Chants_Basques_img/Martxa_Baten_Lehen_Notak_1.jpg",
  "Chants_Basques_img/Matalaz_1.jpg",
  "Chants_Basques_img/Mendian_Gora_Haritza_1.jpg",
  "Chants_Basques_img/Munagorriren_Bertsoak_1.jpg",
  "Chants_Basques_img/Munagorriren_Bertsoak_2.jpg",
  "Chants_Basques_img/MUNDUKO_JABE_1.jpg",
  "Chants_Basques_img/Mundurat_Eman_Ninduzun_1.jpg",
  "Chants_Basques_img/Nere_Heriko_Neskatxa_Maite_1.jpg",
  "Chants_Basques_img/Neskatxa_ezagun_bat_1.jpg",
  "Chants_Basques_img/Neure_Andrea_Andre_Ona_Da_1.jpg",
  "Chants_Basques_img/Nevadarat_Joan_Nintzan_1.jpg",
  "Chants_Basques_img/Nigarra_Begian_1.jpg",
  "Chants_Basques_img/Nigarrez_Sortu_1.jpg",
  "Chants_Basques_img/NIRE_HERRIA_BEZALA_1.jpg",
  "Chants_Basques_img/Nola_Bizi_Hala_Kanta_1.jpg",
  "Chants_Basques_img/Non_Geratzen_Den_Denbora_1.jpg",
  "Chants_Basques_img/Oihan_Beltzian_1.jpg",
  "Chants_Basques_img/Oi_Ama_Eskual_Herri_1.jpg",
  "Chants_Basques_img/Oi_Gu_Hemen_1.jpg",
  "Chants_Basques_img/Oi_Kanta_Berri_1.jpg",
  "Chants_Basques_img/Oi_Kanta_Berri_2.jpg",
  "Chants_Basques_img/Olentzero_1.jpg",
  "Chants_Basques_img/ONDARABIA_1.jpg",
  "Chants_Basques_img/Olentzeroren_oparia_1.jpg",
  "Chants_Basques_img/Olentzeroren_oparia_2.jpg",
  "Chants_Basques_img/Parisen_Eta_Madrilen_1.jpg",
  "Chants_Basques_img/Pena_Baiona_1.jpg",
  "Chants_Basques_img/Pena_Baiona_2.jpg",
  "Chants_Basques_img/Pena_Baiona_(Euskara)_1.jpg",
  "Chants_Basques_img/Pena_Baiona_(Euskara)_2.jpg",
  "Chants_Basques_img/Pilotarien_Biltzarra_1.jpg",
  "Chants_Basques_img/Pottoka_1.jpg",
  "Chants_Basques_img/Primaderako_Liliak_1.jpg",
  "Chants_Basques_img/Primaderako_Liliak_2.jpg",
  "Chants_Basques_img/Prima_Eijerra_1.jpg",
  "Chants_Basques_img/Seaska_Kanta_1.jpg",
  "Chants_Basques_img/Topa_Dagigun_1.jpg",
  "Chants_Basques_img/Txalaparta_1.jpg",
  "Chants_Basques_img/TXIKIA_1.jpg",
  "Chants_Basques_img/TXIKIA_2.jpg",
  "Chants_Basques_img/Ttiki_Ttikitik_1.jpg",
  "Chants_Basques_img/Ttiki_Ttikitik_2.jpg",
  "Chants_Basques_img/Urte_Batez_1.jpg",
  "Chants_Basques_img/Urte_Batez_2.jpg",
  "Chants_Basques_img/Urtxintxak_1.jpg",
  "Chants_Basques_img/Urtxintxak_2.jpg",
  "Chants_Basques_img/Usaian_Bezala_1.jpg",
  "Chants_Basques_img/Usaian_Bezala_2.jpg",
  "Chants_Basques_img/Urtoroz_bezala_1.jpg",
  "Chants_Basques_img/Xalbadorren_Heriotzean_1.jpg",
  "Chants_Basques_img/Xorieri_Mintzo_Zen_1.jpg",
  "Chants_Basques_img/Xorieri_Mintzo_Zen_2.jpg",
  "Chants_Basques_img/XORROTXAK_1.jpg",
  "Chants_Basques_img/XORROTXAK_2.jpg",
  "Chants_Basques_img/Zazpi_Euskal_Herriek_1.jpg",
  "Chants_Basques_img/ZAZPI_LORE_1.jpg",
  "Chants_Basques_img/Zenbat_Gara_Angelu_1.jpg",
  "Chants_Basques_img/Zenbat_Gera_1.jpg",
  "Chants_Basques_img/Zertarako_1.jpg",
  "Chants_Basques_img/Zato_Olentzero_1.jpg",
  "Chants_Basques_img/Zato_Olentzero_2.jpg",
  "Chants_Basques_img/Zazpiak_Oihal_Batetik_1.jpg",
  "Chants_Basques_img/Zazpiak_Oihal_Batetik_2.jpg",
  "Chants_Basques_img/Zurekin_batera_1.jpg",
  "Chants_Basques_img/Zurekin_batera_2.jpg",
  "Chants_Basques_img/index_1.jpg",
  "Chants_Basques_img/style.css",
  "Chants_Corses_img/COMPANERO_1.jpg",
  "Chants_Corses_img/VOLE_1.jpg",
  "Chants_Corses_img/index.html",
  "Chants_Corses_img/style.css",
  "Chants_Creoles_img/Ba_moin_en_tibo_1.jpg",
  "Chants_Creoles_img/Ba_moin_en_tibo_2.jpg",
  "Chants_Creoles_img/INN_TI_MANZEL_1.jpg",
  "Chants_Creoles_img/INN_TI_MANZEL_2.jpg",
  "Chants_Creoles_img/P_tite_Fleur_Aime_1.jpg",
  "Chants_Creoles_img/index.html",
  "Chants_Creoles_img/style.css",
  "Chants_Espagnols_img/AMOR_DE_MIS_AMORES_1.jpg",
  "Chants_Espagnols_img/AMOR_DE_MIS_AMORES_2.jpg",
  "Chants_Espagnols_img/CHIRI_BIRIBIN_MARIA_ISABEL_1.jpg",
  "Chants_Espagnols_img/CIELITO_LINDO_1.jpg",
  "Chants_Espagnols_img/CLAVERITOS_1.jpg",
  "Chants_Espagnols_img/COLEGIALA_1.jpg",
  "Chants_Espagnols_img/DE_COLORES_1.jpg",
  "Chants_Espagnols_img/DIOS_TE_SALVE_MARIA_1.jpg",
  "Chants_Espagnols_img/GUANTANAMERA_1.jpg",
  "Chants_Espagnols_img/Las_Mananitas_1.jpg",
  "Chants_Espagnols_img/Las_Mananitas_2.jpg",
  "Chants_Espagnols_img/LA_ADELITA_1.jpg",
  "Chants_Espagnols_img/LA_CAMIONETA_DE_MI_PAPA_1.jpg",
  "Chants_Espagnols_img/LA_CLARA_1.jpg",
  "Chants_Espagnols_img/LA_MINA_MARIA_LUISA_1.jpg",
  "Chants_Espagnols_img/NO_NOS_MOVERAN_1.jpg",
  "Chants_Espagnols_img/NO_NOS_MOVERAN_2.jpg",
  "Chants_Espagnols_img/PORQUE_TE_VAS_1.jpg",
  "Chants_Espagnols_img/index.html",
  "Chants_Espagnols_img/style.css",
  "Chants_Francophones_img/ATTENTION_MESDAMES_ET_MESSIEURS_1.jpg",
  "Chants_Francophones_img/ATTENTION_MESDAMES_ET_MESSIEURS_2.jpg",
  "Chants_Francophones_img/AUPA_BO_1.jpg",
  "Chants_Francophones_img/AUPA_BO_2.jpg",
  "Chants_Francophones_img/A_toi_1.jpg",
  "Chants_Francophones_img/A_toi_2.jpg",
  "Chants_Francophones_img/Aline_1.jpg",
  "Chants_Francophones_img/BELLE_1.jpg",
  "Chants_Francophones_img/BELLE_2.jpg",
  "Chants_Francophones_img/CA_SERT_A_QUOI_1.jpg",
  "Chants_Francophones_img/CA_SERT_A_QUOI_2.jpg",
  "Chants_Francophones_img/CHANTE_1.jpg",
  "Chants_Francophones_img/Comme_Un_Soleil_1.jpg",
  "Chants_Francophones_img/Comme_Un_Soleil_2.jpg",
  "Chants_Francophones_img/Ca_fait_rire_les_oiseaux_1.jpg",
  "Chants_Francophones_img/Ca_fait_rire_les_oiseaux_2.jpg",
  "Chants_Francophones_img/DONNE_DU_RHUM_A_TON_HOMME_1.jpg",
  "Chants_Francophones_img/DONNE_DU_RHUM_A_TON_HOMME_2.jpg",
  "Chants_Francophones_img/EMMENEZ_MOI_1.jpg",
  "Chants_Francophones_img/EMMENEZ_MOI_2.jpg",
  "Chants_Francophones_img/ETOILE_DES_NEIGES_1.jpg",
  "Chants_Francophones_img/ETOILE_DES_NEIGES_2.jpg",
  "Chants_Francophones_img/ET_MAINTENANT_1.jpg",
  "Chants_Francophones_img/ET_MAINTENANT_2.jpg",
  "Chants_Francophones_img/Fais_comme_l_oiseau_1.jpg",
  "Chants_Francophones_img/Fais_comme_l_oiseau_2.jpg",
  "Chants_Francophones_img/GENS_DU_PAYS_1.jpg",
  "Chants_Francophones_img/HARMONIE_DU_SOIR_A_CHATEAUGAY_1.jpg",
  "Chants_Francophones_img/HARMONIE_DU_SOIR_A_CHATEAUGAY_2.jpg",
  "Chants_Francophones_img/IL_FAUT_QUE_JE_M_EN_AILLE_1.jpg",
  "Chants_Francophones_img/JE_N_AURAI_PAS_LE_TEMPS_1.jpg",
  "Chants_Francophones_img/JOLIE_BOUTEILLE_1.jpg",
  "Chants_Francophones_img/L_EQUIPE_A_JOJO_1.jpg",
  "Chants_Francophones_img/L_EQUIPE_A_JOJO_2.jpg",
  "Chants_Francophones_img/LA_BALADE_NORD_IRLANDAISE_1.jpg",
  "Chants_Francophones_img/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA_1.jpg",
  "Chants_Francophones_img/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA_2.jpg",
  "Chants_Francophones_img/LA_MALADIE_D_AMOUR_1.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU_1.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU_2.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU_3.jpg",
  "Chants_Francophones_img/LA_NOCE_A_YANTOU_4.jpg",
  "Chants_Francophones_img/LES_AMANTS_DUN_JOUR_1.jpg",
  "Chants_Francophones_img/LES_AMANTS_DUN_JOUR_2.jpg",
  "Chants_Francophones_img/LES_COPAINS_D_ABORD_1.jpg",
  "Chants_Francophones_img/LES_COPAINS_D_ABORD_2.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon_1.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon_2.jpg",
  "Chants_Francophones_img/Les_Fetes_De_Mauleon_3.jpg",
  "Chants_Francophones_img/Le_berger_d_aure_1.jpg",
  "Chants_Francophones_img/Le_berger_d_aure_2.jpg",
  "Chants_Francophones_img/LE_LION_EST_MORT_CE_SOIR_1.jpg",
  "Chants_Francophones_img/LE_LION_EST_MORT_CE_SOIR_2.jpg",
  "Chants_Francophones_img/LE_PETIT_BONHEUR_1.jpg",
  "Chants_Francophones_img/LE_PETIT_BONHEUR_2.jpg",
  "Chants_Francophones_img/LE_ROCK_DU_COCHON_1.jpg",
  "Chants_Francophones_img/La_Montagne_1.jpg",
  "Chants_Francophones_img/La_Montagne_2.jpg",
  "Chants_Francophones_img/La_ballade_des_gens_heureux_1.jpg",
  "Chants_Francophones_img/La_ballade_des_gens_heureux_2.jpg",
  "Chants_Francophones_img/La_chanson_de_Prevert_1.jpg",
  "Chants_Francophones_img/La_fleur_aux_dents_1.jpg",
  "Chants_Francophones_img/La_javanaise_1.jpg",
  "Chants_Francophones_img/Le_Chiffon_Rouge_1.jpg",
  "Chants_Francophones_img/Le_Chiffon_Rouge_2.jpg",
  "Chants_Francophones_img/Le_Steak_1.jpg",
  "Chants_Francophones_img/Le_Steak_2.jpg",
  "Chants_Francophones_img/Le_Steak_3.jpg",
  "Chants_Francophones_img/Les_Champs_ELYSEES_1.jpg",
  "Chants_Francophones_img/Les_Rois_Mages_1.jpg",
  "Chants_Francophones_img/Les_Rois_Mages_2.jpg",
  "Chants_Francophones_img/MAMY_BLUE_1.jpg",
  "Chants_Francophones_img/Mon_Dieu_1.jpg",
  "Chants_Francophones_img/Mon_Dieu_2.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean_1.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean_2.jpg",
  "Chants_Francophones_img/Mon-Amant_de_Saint_Jean_3.jpg",
  "Chants_Francophones_img/NON_RIEN_DE_RIEN_1.jpg",
  "Chants_Francophones_img/POUR_UN_FLIRT_1.jpg",
  "Chants_Francophones_img/S_ASSOIR_PAR_TERRE_1.jpg",
  "Chants_Francophones_img/SALUT_LES_AMOUREUX_1.jpg",
  "Chants_Francophones_img/SANTIANO_1.jpg",
  "Chants_Francophones_img/SANTIANO_2.jpg",
  "Chants_Francophones_img/Siffler_sur_la_colline_1.jpg",
  "Chants_Francophones_img/Tous_les_garcons_et_les_filles_1.jpg",
  "Chants_Francophones_img/Tous_les_garcons_et_les_filles_2.jpg",
  "Chants_Francophones_img/Travailler_c_est_trop_dur_1.jpg",
  "Chants_Francophones_img/UN_BEAU_ROMAN_1.jpg",
  "Chants_Francophones_img/UN_BEAU_ROMAN_2.jpg",
  "Chants_Francophones_img/YA_SA_PICHOU_1.jpg",
  "Chants_Francophones_img/YA_SA_PICHOU_2.jpg",
  "Chants_Francophones_img/index.html",
  "Chants_Francophones_img/style.css",
  "Chants_Gascons_img/DE_CAP_TA_L_IMMORTELA_1.jpg",
  "Chants_Gascons_img/DIS_MAMIE_1.jpg",
  "Chants_Gascons_img/L_ENCANTADA_1.jpg",
  "Chants_Gascons_img/L_ENCANTADA_2.jpg",
  "Chants_Gascons_img/L_ENCANTADA_Phonetique_1.jpg",
  "Chants_Gascons_img/L_ENCANTADA_Phonetique_2.jpg",
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

