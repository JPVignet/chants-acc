const CACHE_NAME = "chants-cache-v2";

/**
 * ⚠️ LISTE COMPLETE DES FICHIERS A METTRE EN OFFLINE
 * (index + catégories + 220 chants)
 */
const FILES = [
  "./",
  "index.html",
  "style.css",

  "Chants_Basques_acc/index.html",
  "Chants_Gascons_acc/index.html",
  "Chants_Francophones_acc/index.html",
  "Chants_Espagnols_acc/index.html",
  "Chants_Creoles_acc/index.html",
  "Chants_Corses_acc/index.html",


  "Chants_Basques_acc/ABENTURAZ_ABENTURA.pdf",
  "Chants_Basques_acc/Aberriaren_Mugak.pdf",
  "Chants_Basques_acc/Agure_Zaharra.pdf",
  "Chants_Basques_acc/Agur_Jaunak.pdf",
  "Chants_Basques_acc/Aita_Semeak.pdf",
  "Chants_Basques_acc/Aitorren_Hizkuntz_Zaharra.pdf",
  "Chants_Basques_acc/Ama_Lurraren_Oihua.pdf",
  "Chants_Basques_acc/Amets_bat_ote_da.pdf",
  "Chants_Basques_acc/Andre_Madalen.pdf",
  "Chants_Basques_acc/Arbola_Gainean.pdf",
  "Chants_Basques_acc/Ardiak_Lerro_Lerro.pdf",
  "Chants_Basques_acc/ARGI_ZIRRINTA_ZENIAN.pdf",
  "Chants_Basques_acc/Arrantzaleak.pdf",
  "Chants_Basques_acc/Arrosako_Zolan.pdf",
  "Chants_Basques_acc/Askatasunaren_Adarra.pdf",
  "Chants_Basques_acc/Askatasunera.pdf",
  "Chants_Basques_acc/Atarratzeko_Gazteluko_Kantua.pdf",
  "Chants_Basques_acc/Athenry-Ko_Zelaiak.pdf",
  "Chants_Basques_acc/Auzoan_Zer_Berri_Den.pdf",
  "Chants_Basques_acc/Azken_Dantza_Hau.pdf",
  "Chants_Basques_acc/Bagare.pdf",
  "Chants_Basques_acc/BAKEAREN_MUSIKA.pdf",
  "Chants_Basques_acc/Baldorba.pdf",
  "Chants_Basques_acc/Bale_ihizi.pdf",
  "Chants_Basques_acc/Baratze_Bat.pdf",
  "Chants_Basques_acc/Bedatsian.pdf",
  "Chants_Basques_acc/Begiak_Farrez.pdf",
  "Chants_Basques_acc/Begi_Urdinezko_Izarra.pdf",
  "Chants_Basques_acc/Bella_Ciao.pdf",
  "Chants_Basques_acc/BELLA_CIAO_ABERTZALE.pdf",
  "Chants_Basques_acc/Bihotza.pdf",
  "Chants_Basques_acc/Bi_Haurren_Ametsa.pdf",
  "Chants_Basques_acc/Boga_Boga.pdf",
  "Chants_Basques_acc/DIN_DAN_DON.pdf",
  "Chants_Basques_acc/DONOSTIAKO_MARTXA.pdf",
  "Chants_Basques_acc/De_Treville_ren_Azken_Hitzak.pdf",
  "Chants_Basques_acc/Egun_Da_Santi_Mamina.pdf",
  "Chants_Basques_acc/EGUN_ON.pdf",
  "Chants_Basques_acc/Ekaitza.pdf",
  "Chants_Basques_acc/Eki_Eder.pdf",
  "Chants_Basques_acc/ELURRA_TEILATUAN.pdf",
  "Chants_Basques_acc/Ene_Amodioa.pdf",
  "Chants_Basques_acc/Enaut_Bidegorri.pdf",
  "Chants_Basques_acc/Eperra.pdf",
  "Chants_Basques_acc/Eskualduna_Naiz_Eta.pdf",
  "Chants_Basques_acc/Etxahun_Iruri.pdf",
  "Chants_Basques_acc/Euskal_Herrian_Euskaraz.pdf",
  "Chants_Basques_acc/Ez_Ginuke.pdf",
  "Chants_Basques_acc/Ez_Ez_Dut_Nahi.pdf",
  "Chants_Basques_acc/Galdetzen.pdf",
  "Chants_Basques_acc/Gazte_Naiz_Gazte.pdf",
  "Chants_Basques_acc/GEREZIEN_DENBORA.pdf",
  "Chants_Basques_acc/Gogoaren_Baitan.pdf",
  "Chants_Basques_acc/Goizean_Goiz_Jeikirik.pdf",
  "Chants_Basques_acc/Goizian_Argi_Hastian.pdf",
  "Chants_Basques_acc/Gora_Ta_Gora_Beti.pdf",
  "Chants_Basques_acc/Greziako_Itsasontzia.pdf",
  "Chants_Basques_acc/Guk_Euskaraz.pdf",
  "Chants_Basques_acc/GURE_AITA.pdf",
  "Chants_Basques_acc/Habanera.pdf",
  "Chants_Basques_acc/Haizea.pdf",
  "Chants_Basques_acc/HATOR.pdf",
  "Chants_Basques_acc/Haurtxo_Seaskan.pdf",
  "Chants_Basques_acc/Hegoak.pdf",
  "Chants_Basques_acc/Herribehera.pdf",
  "Chants_Basques_acc/Haurrak_ikasazue.pdf",
  "Chants_Basques_acc/Ikusi_Nuenean.pdf",
  "Chants_Basques_acc/Ikusten_Duzu_Goizean.pdf",
  "Chants_Basques_acc/Iluntzean.pdf",
  "Chants_Basques_acc/ITSASOA.pdf",
  "Chants_Basques_acc/Itsasoan_Urak_Haundi.pdf",
  "Chants_Basques_acc/ITSASOARI_BEGIRA.pdf",
  "Chants_Basques_acc/Itsas_Ontzi_Baten.pdf",
  "Chants_Basques_acc/Ituringo_Arotza.pdf",
  "Chants_Basques_acc/Ixiltasuna.pdf",
  "Chants_Basques_acc/Ixilik_Dago.pdf",
  "Chants_Basques_acc/Jaun_Baruak.pdf",
  "Chants_Basques_acc/Joseba_Elosegi.pdf",
  "Chants_Basques_acc/Kattalin.pdf",
  "Chants_Basques_acc/Kriolinak.pdf",
  "Chants_Basques_acc/Kultur_Kirol.pdf",
  "Chants_Basques_acc/Lagun_Etor_Gurekin.pdf",
  "Chants_Basques_acc/Lanik_Gabe.pdf",
  "Chants_Basques_acc/Larrosa_Kolorez.pdf",
  "Chants_Basques_acc/Lau_Teilatu.pdf",
  "Chants_Basques_acc/LA_PALOMA.pdf",
  "Chants_Basques_acc/Loreak_Udan.pdf",
  "Chants_Basques_acc/Loretxoa.pdf",
  "Chants_Basques_acc/Lore_Polit_Baten_Bila.pdf",
  "Chants_Basques_acc/Maitasun_Aroak.pdf",
  "Chants_Basques_acc/Maitasun_Nortasun.pdf",
  "Chants_Basques_acc/Maitiak_Galde_Egin_Zautan.pdf",
  "Chants_Basques_acc/Maria_Solt_Eta_Kastero.pdf",
  "Chants_Basques_acc/Marinelaren_Kontra_Pasa.pdf",
  "Chants_Basques_acc/Martxa_Baten_Lehen_Notak.pdf",
  "Chants_Basques_acc/Matalaz.pdf",
  "Chants_Basques_acc/Mendian_Gora_Haritza.pdf",
  "Chants_Basques_acc/Munagorriren_Bertsoak.pdf",
  "Chants_Basques_acc/MUNDUKO_JABE.pdf",
  "Chants_Basques_acc/Mundurat_Eman_Ninduzun.pdf",
  "Chants_Basques_acc/Nere_Heriko_Neskatxa_Maite.pdf",
  "Chants_Basques_acc/Neskatxa_ezagun_bat.pdf",
  "Chants_Basques_acc/Neure_Andrea_Andre_Ona_Da.pdf",
  "Chants_Basques_acc/Nevadarat_Joan_Nintzan.pdf",
  "Chants_Basques_acc/Nigarra_Begian.pdf",
  "Chants_Basques_acc/Nigarrez_Sortu.pdf",
  "Chants_Basques_acc/NIRE_HERRIA_BEZALA.pdf",
  "Chants_Basques_acc/Nola_Bizi_Hala_Kanta.pdf",
  "Chants_Basques_acc/Non_Geratzen_Den_Denbora.pdf",
  "Chants_Basques_acc/Oihan_Beltzian.pdf",
  "Chants_Basques_acc/Oi_Ama_Eskual_Herri.pdf",
  "Chants_Basques_acc/Oi_Gu_Hemen.pdf",
  "Chants_Basques_acc/Oi_Kanta_Berri.pdf",
  "Chants_Basques_acc/Olentzero.pdf",
  "Chants_Basques_acc/ONDARABIA.pdf",
  "Chants_Basques_acc/Olentzeroren_oparia.pdf",
  "Chants_Basques_acc/Parisen_Eta_Madrilen.pdf",
  "Chants_Basques_acc/Pena_Baiona.pdf",
  "Chants_Basques_acc/"Pena_Baiona_(Euskara).pdf",
  "Chants_Basques_acc/Pilotarien_Biltzarra.pdf",
  "Chants_Basques_acc/Pottoka.pdf",
  "Chants_Basques_acc/Primaderako_Liliak.pdf",
  "Chants_Basques_acc/Prima_Eijerra.pdf",
  "Chants_Basques_acc/Seaska_Kanta.pdf",
  "Chants_Basques_acc/Topa_Dagigun.pdf",
  "Chants_Basques_acc/Txalaparta.pdf",
  "Chants_Basques_acc/TXIKIA.pdf",
  "Chants_Basques_acc/Ttiki_Ttikitik.pdf",
  "Chants_Basques_acc/Urte_Batez.pdf",
  "Chants_Basques_acc/Urtxintxak.pdf",
  "Chants_Basques_acc/Usaian_Bezala.pdf",
  "Chants_Basques_acc/Urtoroz_bezala.pdf",
  "Chants_Basques_acc/Xalbadorren_Heriotzean.pdf",
  "Chants_Basques_acc/Xorieri_Mintzo_Zen.pdf",
  "Chants_Basques_acc/XORROTXAK.pdf",
  "Chants_Basques_acc/Zazpi_Euskal_Herriek.pdf",
  "Chants_Basques_acc/ZAZPI_LORE.pdf",
  "Chants_Basques_acc/Zenbat_Gara_Angelu.pdf",
  "Chants_Basques_acc/Zenbat_Gera.pdf",
  "Chants_Basques_acc/Zertarako.pdf",
  "Chants_Basques_acc/Zato_Olentzero.pdf",
  "Chants_Basques_acc/Zazpiak_Oihal_Batetik.pdf",
  "Chants_Basques_acc/Zurekin_batera.pdf",
  "Chants_Basques_acc/index.pdf",
  "Chants_Basques_acc/style.css",
  "Chants_Corses_acc/COMPANERO.pdf",
  "Chants_Corses_acc/VOLE.pdf",
  "Chants_Corses_acc/index.html",
  "Chants_Corses_acc/style.css",
  "Chants_Creoles_acc/Ba_moin_en_tibo.pdf",
  "Chants_Creoles_acc/INN_TI_MANZEL.pdf",
  "Chants_Creoles_acc/P_tite_Fleur_Aime.pdf",
  "Chants_Creoles_acc/index.html",
  "Chants_Creoles_acc/style.css",
  "Chants_Espagnols_acc/AMOR_DE_MIS_AMORES.pdf",
  "Chants_Espagnols_acc/CHIRI_BIRIBIN_MARIA_ISABEL.pdf",
  "Chants_Espagnols_acc/CIELITO_LINDO.pdf",
  "Chants_Espagnols_acc/CLAVERITOS.pdf",
  "Chants_Espagnols_acc/COLEGIALA.pdf",
  "Chants_Espagnols_acc/DE_COLORES.pdf",
  "Chants_Espagnols_acc/DIOS_TE_SALVE_MARIA.pdf",
  "Chants_Espagnols_acc/GUANTANAMERA.pdf",
  "Chants_Espagnols_acc/Las_Mananitas.pdf",
  "Chants_Espagnols_acc/LA_ADELITA.pdf",
  "Chants_Espagnols_acc/LA_CAMIONETA_DE_MI_PAPA.pdf",
  "Chants_Espagnols_acc/LA_CLARA.pdf",
  "Chants_Espagnols_acc/LA_MINA_MARIA_LUISA.pdf",
  "Chants_Espagnols_acc/NO_NOS_MOVERAN.pdf",
  "Chants_Espagnols_acc/PORQUE_TE_VAS.pdf",
  "Chants_Espagnols_acc/index.html",
  "Chants_Espagnols_acc/style.css",
  "Chants_Francophones_acc/ATTENTION_MESDAMES_ET_MESSIEURS.pdf",
  "Chants_Francophones_acc/AUPA_BO.pdf",
  "Chants_Francophones_acc/A_toi.pdf",
  "Chants_Francophones_acc/Aline.pdf",
  "Chants_Francophones_acc/BELLE.pdf",
  "Chants_Francophones_acc/CA_SERT_A_QUOI.pdf",
  "Chants_Francophones_acc/CHANTE.pdf",
  "Chants_Francophones_acc/Comme_Un_Soleil.pdf",
  "Chants_Francophones_acc/Ca_fait_rire_les_oiseaux.pdf",
  "Chants_Francophones_acc/DONNE_DU_RHUM_A_TON_HOMME.pdf",
  "Chants_Francophones_acc/EMMENEZ_MOI.pdf",
  "Chants_Francophones_acc/ETOILE_DES_NEIGES.pdf",
  "Chants_Francophones_acc/ET_MAINTENANT.pdf",
  "Chants_Francophones_acc/Fais_comme_l_oiseau.pdf",
  "Chants_Francophones_acc/GENS_DU_PAYS.pdf",
  "Chants_Francophones_acc/HARMONIE_DU_SOIR_A_CHATEAUGAY.pdf",
  "Chants_Francophones_acc/IL_FAUT_QUE_JE_M_EN_AILLE.pdf",
  "Chants_Francophones_acc/JE_N_AURAI_PAS_LE_TEMPS.pdf",
  "Chants_Francophones_acc/JOLIE_BOUTEILLE.pdf",
  "Chants_Francophones_acc/L_EQUIPE_A_JOJO.pdf",
  "Chants_Francophones_acc/LA_BALADE_NORD_IRLANDAISE.pdf",
  "Chants_Francophones_acc/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA.pdf",
  "Chants_Francophones_acc/LA_MALADIE_D_AMOUR.pdf",
  "Chants_Francophones_acc/LA_NOCE_A_YANTOU.pdf",
  "Chants_Francophones_acc/LES_AMANTS_DUN_JOUR.pdf",
  "Chants_Francophones_acc/LES_COPAINS_D_ABORD.pdf",
  "Chants_Francophones_acc/Les_Fetes_De_Mauleon.pdf",
  "Chants_Francophones_acc/Le_berger_d_aure.pdf",
  "Chants_Francophones_acc/LE_LION_EST_MORT_CE_SOIR.pdf",
  "Chants_Francophones_acc/LE_PETIT_BONHEUR.pdf",
  "Chants_Francophones_acc/LE_ROCK_DU_COCHON.pdf",
  "Chants_Francophones_acc/La_Montagne.pdf",
  "Chants_Francophones_acc/La_ballade_des_gens_heureux.pdf",
  "Chants_Francophones_acc/La_chanson_de_Prevert.pdf",
  "Chants_Francophones_acc/La_fleur_aux_dents.pdf",
  "Chants_Francophones_acc/La_javanaise.pdf",
  "Chants_Francophones_acc/Le_Chiffon_Rouge.pdf",
  "Chants_Francophones_acc/Le_Steak.pdf",
  "Chants_Francophones_acc/Les_Champs_ELYSEES.pdf",
  "Chants_Francophones_acc/Les_Rois_Mages.pdf",
  "Chants_Francophones_acc/MAMY_BLUE.pdf",
  "Chants_Francophones_acc/Mon_Dieu.pdf",
  "Chants_Francophones_acc/Mon-Amant_de_Saint_Jean.pdf",
  "Chants_Francophones_acc/NON_RIEN_DE_RIEN.pdf",
  "Chants_Francophones_acc/POUR_UN_FLIRT.pdf",
  "Chants_Francophones_acc/S_ASSOIR_PAR_TERRE.pdf",
  "Chants_Francophones_acc/SALUT_LES_AMOUREUX.pdf",
  "Chants_Francophones_acc/SANTIANO.pdf",
  "Chants_Francophones_acc/Siffler_sur_la_colline.pdf",
  "Chants_Francophones_acc/Tous_les_garcons_et_les_filles.pdf",
  "Chants_Francophones_acc/Travailler_c_est_trop_dur.pdf",
  "Chants_Francophones_acc/UN_BEAU_ROMAN.pdf",
  "Chants_Francophones_acc/YA_SA_PICHOU.pdf",
  "Chants_Francophones_acc/index.html",
  "Chants_Francophones_acc/style.css",
  "Chants_Gascons_acc/DE_CAP_TA_L_IMMORTELA.pdf",
  "Chants_Gascons_acc/DIS_MAMIE.pdf",
  "Chants_Gascons_acc/L_ENCANTADA.pdf",
  "Chants_Gascons_acc/L_ENCANTADA_Phonetique.pdf",
  "Chants_Gascons_acc/index.html",
  "Chants_Gascons_acc/style.css",


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

  // musicien.js : toujours réseau d'abord
  if (url.pathname.endsWith("/musicien.js")) {

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

