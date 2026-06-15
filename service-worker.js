const CACHE_NAME = "chants-cache-v1";

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
  "Chants_Basques_acc/ABERRIAREN_MUGAK.pdf",
  "Chants_Basques_acc/AGURE_ZAHARRA.pdf",
  "Chants_Basques_acc/AGUR_JAUNAK.pdf",
  "Chants_Basques_acc/AITA_SEMEAK.pdf",
  "Chants_Basques_acc/AITORREN_HIZKUNTZ_ZAHARRA.pdf",
  "Chants_Basques_acc/AMA_LURRAREN_OIHUA.pdf",
  "Chants_Basques_acc/AMETS_BAT_OTE_DA.pdf",
  "Chants_Basques_acc/ANDRE_MADALEN.pdf",
  "Chants_Basques_acc/ARBOLA_GAINEAN.pdf",
  "Chants_Basques_acc/ARDIAK_LERRO_LERRO.pdf",
  "Chants_Basques_acc/ARGI_ZIRRINTA_ZENIAN.pdf",
  "Chants_Basques_acc/ARRANTZALEAK.pdf",
  "Chants_Basques_acc/ARROSAKO_ZOLAN.pdf",
  "Chants_Basques_acc/ASKATASUNAREN_ADARRA.pdf",
  "Chants_Basques_acc/ASKATASUNERA.pdf",
  "Chants_Basques_acc/ATARRATZEKO_GAZTELUKO_KANTUA.pdf",
  "Chants_Basques_acc/ATHENRY-KO_ZELAIAK.pdf",
  "Chants_Basques_acc/AUZOAN_ZER_BERRI_DEN.pdf",
  "Chants_Basques_acc/AZKEN_DANTZA_HAU.pdf",
  "Chants_Basques_acc/BAGARE.pdf",
  "Chants_Basques_acc/BAKEAREN_MUSIKA.pdf",
  "Chants_Basques_acc/BALDORBA.pdf",
  "Chants_Basques_acc/BALE_IHIZI.pdf",
  "Chants_Basques_acc/BARATZE_BAT.pdf",
  "Chants_Basques_acc/BEDATSIAN.pdf",
  "Chants_Basques_acc/BEGIAK_FARREZ.pdf",
  "Chants_Basques_acc/BEGI_URDINEZKO_IZARRA.pdf",
  "Chants_Basques_acc/BELLA_CIAO.pdf",
  "Chants_Basques_acc/BELLA_CIAO_ABERTZALE.pdf",
  "Chants_Basques_acc/BIHOTZA.pdf",
  "Chants_Basques_acc/BI_HAURREN_AMETSA.pdf",
  "Chants_Basques_acc/BOGA_BOGA.pdf",
  "Chants_Basques_acc/DIN_DAN_DON.pdf",
  "Chants_Basques_acc/DONOSTIAKO_MARTXA.pdf",
  "Chants_Basques_acc/De_Treville_ren_Azken_Hitzak.pdf",
  "Chants_Basques_acc/EGUN_DA_SANTI_MAMINA.pdf",
  "Chants_Basques_acc/EGUN_ON.pdf",
  "Chants_Basques_acc/EKAITZA.pdf",
  "Chants_Basques_acc/EKI_EDER.pdf",
  "Chants_Basques_acc/ELURRA_TEILATUAN.pdf",
  "Chants_Basques_acc/ENE_AMODIOA.pdf",
  "Chants_Basques_acc/ENAUT_BIDEGORRI.pdf",
  "Chants_Basques_acc/EPERRA.pdf",
  "Chants_Basques_acc/ESKUALDUNA_NAIZ_ETA.pdf",
  "Chants_Basques_acc/ETXAHUN_IRURI.pdf",
  "Chants_Basques_acc/EUSKUAL_HERRIAN_EUSKARAZ.pdf",
  "Chants_Basques_acc/EZ_GINUKE.pdf",
  "Chants_Basques_acc/Ez_Ez_Dut_Nahi.pdf",
  "Chants_Basques_acc/GALDETZEN.pdf",
  "Chants_Basques_acc/GAZTE_NAIZ_GAZTE.pdf",
  "Chants_Basques_acc/GEREZIEN_DENBORA.pdf",
  "Chants_Basques_acc/GOGOAREN_BAITAN.pdf",
  "Chants_Basques_acc/GOIZEAN_GOIZ_JEIKIRIK.pdf",
  "Chants_Basques_acc/GOIZIAN_ARGI_HASTIAN.pdf",
  "Chants_Basques_acc/GORA_TA_GORA_BETI.pdf",
  "Chants_Basques_acc/GREZIAKO_ITSASONTZIA.pdf",
  "Chants_Basques_acc/GUK_EUSKARAZ.pdf",
  "Chants_Basques_acc/GURE_AITA.pdf",
  "Chants_Basques_acc/HABANERA.pdf",
  "Chants_Basques_acc/HAIZEA.pdf",
  "Chants_Basques_acc/HATOR.pdf",
  "Chants_Basques_acc/HAURTXO_SEASKAN.pdf",
  "Chants_Basques_acc/HEGOAK.pdf",
  "Chants_Basques_acc/HERRIBEHERA.pdf",
  "Chants_Basques_acc/Haurrak_ikasazue.pdf",
  "Chants_Basques_acc/IKUSI_NUENEAN.pdf",
  "Chants_Basques_acc/IKUSTEN_DUZU_GOIZEAN.pdf",
  "Chants_Basques_acc/ILUNTZEAN.pdf",
  "Chants_Basques_acc/ITSASOA.pdf",
  "Chants_Basques_acc/ITSASOAN_URAK_HAUNDI.pdf",
  "Chants_Basques_acc/ITSASOARI_BEGIRA.pdf",
  "Chants_Basques_acc/ITSAS_ONTZI_BATEN.pdf",
  "Chants_Basques_acc/ITURINGO_AROTZA.pdf",
  "Chants_Basques_acc/IXILTASUNA.pdf",
  "Chants_Basques_acc/IXIL_IXILIK_DAGO.pdf",
  "Chants_Basques_acc/JAUN_BARUAK.pdf",
  "Chants_Basques_acc/JOSEBA_ELOSEGI.pdf",
  "Chants_Basques_acc/KATTALIN.pdf",
  "Chants_Basques_acc/KRIOLINAK.pdf",
  "Chants_Basques_acc/KULTUR_KIROL.pdf",
  "Chants_Basques_acc/LAGUN_ETOR_GUREKIN.pdf",
  "Chants_Basques_acc/LANIK_GABE.pdf",
  "Chants_Basques_acc/LARROSA_KOLOREZ.pdf",
  "Chants_Basques_acc/LAU_TEILATU.pdf",
  "Chants_Basques_acc/LA_PALOMA.pdf",
  "Chants_Basques_acc/LOREAK_UDAN.pdf",
  "Chants_Basques_acc/LORETXOA.pdf",
  "Chants_Basques_acc/LORE_POLIT_BATEN_BILA.pdf",
  "Chants_Basques_acc/MAITASUN_AROAK.pdf",
  "Chants_Basques_acc/MAITASUN_NORTASUN.pdf",
  "Chants_Basques_acc/MAITIAK_GALDE_EGIN_ZAUTAN.pdf",
  "Chants_Basques_acc/MARIA_SOLT_ETA_KASTERO.pdf",
  "Chants_Basques_acc/MARINELAREN_KONTRA_PASA.pdf",
  "Chants_Basques_acc/MARTXA_BATEN_LEHEN_NOTAK.pdf",
  "Chants_Basques_acc/MATALAZ.pdf",
  "Chants_Basques_acc/MENDIAN_GORA_HARITZA.pdf",
  "Chants_Basques_acc/MUNAGORRIREN_BERTSOAK.pdf",
  "Chants_Basques_acc/MUNDUKO_JABE.pdf",
  "Chants_Basques_acc/MUNDURAT_EMAN_NINDUZUN.pdf",
  "Chants_Basques_acc/NERE_HERRIKO_NESKATXA_MAITE.pdf",
  "Chants_Basques_acc/NESKATXA_EZAGUN_BAT.pdf",
  "Chants_Basques_acc/NEURE_ANDREA_ANDRE_ONA_DA.pdf",
  "Chants_Basques_acc/NEVADARAT_JOAN_NINTZAN.pdf",
  "Chants_Basques_acc/NIGARRA_BEGIAN.pdf",
  "Chants_Basques_acc/NIGARREZ_SORTU.pdf",
  "Chants_Basques_acc/NIRE_HERRIA_BEZALA.pdf",
  "Chants_Basques_acc/NOLA_BIZI_HALA_KANTA.pdf",
  "Chants_Basques_acc/NON_GERATZEN_DEN_DENBORA.pdf",
  "Chants_Basques_acc/OIHAN_BELTZIAN.pdf",
  "Chants_Basques_acc/OI_AMA_ESKUAL_HERRI.pdf",
  "Chants_Basques_acc/OI_GU_HEMEN.pdf",
  "Chants_Basques_acc/OI_KANTA_BERRI.pdf",
  "Chants_Basques_acc/OLENTZERO.pdf",
  "Chants_Basques_acc/ONDARABIA.pdf",
  "Chants_Basques_acc/Olentzeroren_oparia.pdf",
  "Chants_Basques_acc/PARISEN_ETA_MADRILEN.pdf",
  "Chants_Basques_acc/PENA_BAIONA.pdf",
  "Chants_Basques_acc/PENA_BAIONA_(Euskara).pdf",
  "Chants_Basques_acc/PILOTARIEN_BILTZARRA.pdf",
  "Chants_Basques_acc/POTTOKA.pdf",
  "Chants_Basques_acc/PRIMADERAKO_LILIAK.pdf",
  "Chants_Basques_acc/PRIMA_EIJERRA.pdf",
  "Chants_Basques_acc/SEASKA_KANTA.pdf",
  "Chants_Basques_acc/TOPA_DAGIGUN.pdf",
  "Chants_Basques_acc/TXALAPARTA.pdf",
  "Chants_Basques_acc/TXIKIA.pdf",
  "Chants_Basques_acc/Ttiki_Ttikitik.pdf",
  "Chants_Basques_acc/URTE_BATEZ.pdf",
  "Chants_Basques_acc/URTXINTXAK.pdf",
  "Chants_Basques_acc/USAIAN_BEZALA.pdf",
  "Chants_Basques_acc/Urtoroz_bezala.pdf",
  "Chants_Basques_acc/XALBADORREN_HERIOTZEAN.pdf",
  "Chants_Basques_acc/XORIERI_MINTZO_ZEN.pdf",
  "Chants_Basques_acc/XORROTXAK.pdf",
  "Chants_Basques_acc/ZAZPI_EUSKAL_HERRIEK.pdf",
  "Chants_Basques_acc/ZAZPI_LORE.pdf",
  "Chants_Basques_acc/ZENBAT_GARA_ANGELU.pdf",
  "Chants_Basques_acc/ZENBAT_GERA.pdf",
  "Chants_Basques_acc/ZERTARAKO.pdf",
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
  "Chants_Espagnols_acc/LAS_MANANITAS.pdf",
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
  "Chants_Francophones_acc/COMME_UN_SOLEIL.pdf",
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
  "Chants_Francophones_acc/LES_FETES_DE_MAULEON.pdf",
  "Chants_Francophones_acc/LE_BERGER_D_AURE.pdf",
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
  "Chants_Francophones_acc/MON_DIEU.pdf",
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

