const API =
  process.env.NODE_ENV === "production"
    ? `https://paperly-114b9e.us1.kinto.io`
    : "http://localhost:5000";

// const API = `https://paperly-114b9e.us1.kinto.io`;

let data = {
  paperId: "1",
  content: {
    title: "Advanced Level 2019 Biology",
    pages: [
      {
        title: "## 1. Some nucleotides",
        choices: [
          { id: 1, text: "contain hexose sugars" },
          { id: 2, text: "act as organic cofactors" },
          { id: 3, text: "serve as enzymes" },
          { id: 4, text: "act as oxygen carriers." },
          { id: 5, text: "serve as food reserves." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 2. Which of the following statements regarding microscopes is correct?",
        choices: [
          {
            id: 1,
            text:
              "In a light microscope, visible light is passed through the objective lens and then through the specimen.",
          },
          {
            id: 2,
            text:
              "Projection of a light beam through a vacuum is the principle of an electron microscope.",
          },
          {
            id: 3,
            text:
              "Scanning electron microscope is used to study the internal structure of cells.",
          },
          {
            id: 4,
            text:
              "Transmission electron microscope is used for detail studies of living specimens.",
          },
          {
            id: 5,
            text:
              "Magnification and resolution power are important properties of all microscopes.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 3. In the cytoskeleton,",
        choices: [
          { id: 1, text: "microtubules are formed by actin." },
          { id: 2, text: "keratin is not present." },
          {
            id: 3,
            text: "microtubules are involved in the movement of organelles.",
          },
          {
            id: 4,
            text:
              "microfilaments are involved in the movement of chromosomes during cell division.",
          },
          {
            id: 5,
            text:
              "intermediate filaments provide channels to secrete materials from the cell.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 4. In the cell cycle,",
        choices: [
          { id: 1, text: "DNA synthesis takes place during G1 phase." },
          { id: 2, text: "protein synthesis occurs during G2 phase." },
          { id: 3, text: "formation of spindle begins during metaphase." },
          {
            id: 4,
            text:
              "condensation of chromatin fibres takes place during S phase.",
          },
          {
            id: 5,
            text: " division of the cytoplasm occurs during anaphase.",
          },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 5. Which of the following statements regarding chlorophyll is correct?",
        choices: [
          { id: 1, text: "Chlorophyll absorbs violet, blue and red light." },
          {
            id: 2,
            text:
              "Chlorophyll-b is the main light capturing pigment in plants.",
          },
          {
            id: 3,
            text: "Chlorophyll-a is most efficient for capturing green light.",
          },
          {
            id: 4,
            text:
              "Chlorophyll-a is involved in absorption and dissipation of excessive light energy.",
          },
          {
            id: 5,
            text:
              "In photosystem-I, chlorophyll-a absorbs light at 680 nm wavelength.",
          },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 6. A compound formed during ethyl alcohol fermentation, lactic acid fermentation and aerobic respiration is",
        choices: [
          { id: 1, text: "oxaloacetate" },
          { id: 2, text: "citrate" },
          { id: 3, text: "acetaldehyde" },
          { id: 4, text: "acetyl CoA." },
          { id: 5, text: "pyruvate" },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 7. During the evolution of organisms, coelom was first developed in",
        choices: [
          { id: 1, text: "Annelida" },
          { id: 2, text: "Arthropoda" },
          { id: 3, text: "Mollusca" },
          { id: 4, text: "Echinodermata" },
          { id: 5, text: "Chordata" },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 8. Which of the following structures can be seen in annelids as well as in arthropods?",
        choices: [
          { id: 1, text: "Clitellum" },
          { id: 2, text: "Parapodia" },
          { id: 3, text: "Ventral nerve cord" },
          { id: 4, text: "Capillaries" },
          { id: 5, text: "Chitinous exoskeleton" },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 9. Which of the following plants is evolutionarily closest to Marchantial",
        choices: [
          { id: 1, text: "Anthoceros" },
          { id: 2, text: "Selaginella" },
          { id: 3, text: "Gnetum" },
          { id: 4, text: "Pogonatum" },
          { id: 5, text: "Nephrolepis" },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 10. In dicotyledonous plants",
        choices: [
          {
            id: 1,
            text: "stamens produce megaspores that develop into pollen grains.",
          },
          { id: 2, text: "pollen grain has two openings." },
          { id: 3, text: "seeds are present within carpels." },
          { id: 4, text: "perianth may be present." },
          { id: 5, text: "vascular bundles in the stem are scattered." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 11. Which of the following statements regarding the epidermis of plants is correct?",
        choices: [
          { id: 1, text: "It usually consists of several layers of cells." },
          { id: 2, text: "It is a permanent tissue." },
          {
            id: 3,
            text:
              "Root hairs are multicellular projections of epidermal cells.",
          },
          { id: 4, text: "Trichomes are specialized epidermal cells." },
          {
            id: 5,
            text:
              "Deposition of suberin in epidermal cells prevents water loss.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 12. Select the correct statement regarding the adaptations of plants for efficient photosynthesis.",
        choices: [
          {
            id: 1,
            text:
              "Plants are branched in a pattern that is suitable to absorb the maximum amount of carbon dioxide from atmosphere.",
          },
          {
            id: 2,
            text:
              "Large leaves are present in plants growing in dry environments to maximize light capture.",
          },
          {
            id: 3,
            text:
              "Leaves of some plants are arranged almost vertically to get the maximum amount of light.",
          },
          {
            id: 4,
            text:
              "Leaves of some plants are arranged horizontally to avoid damage by over intense light.",
          },
          {
            id: 5,
            text: "Plants grow tall to avoid shading by neighbouring plants.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 13. During the opening of stomata",
        choices: [
          {
            id: 1,
            text: "sodium ions are actively transported into guard cells.",
          },
          { id: 2, text: "turgor pressure of guard cells reduces." },
          {
            id: 3,
            text: "carbon dioxide content in the substomatal cavity increases.",
          },
          { id: 4, text: "water potential in guard cells decreases." },
          {
            id: 5,
            text: "potassium ions are passively transported into guard cells.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 14. Select the correct statement regarding nutritional requirements of plants.",
        choices: [
          { id: 1, text: "Iron is a macronutrient required by plants." },
          {
            id: 2,
            text:
              "Deficiency of sulphur can be identified by chlorosis of older leaves.",
          },
          { id: 3, text: "Magnesium is a component of carotenoids." },
          {
            id: 4,
            text:
              "Deficiency of nitrogen causes chlorosis mainly in young leaves.",
          },
          { id: 5, text: "Molybdenum is required for nitrogen metabolism." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 15. A feature seen in the sexual reproduction of all land plants is",
        choices: [
          {
            id: 1,
            text: "non-requirement of external water for fertilization.",
          },
          { id: 2, text: "internal fertilization." },
          { id: 3, text: "reduced gametophyte." },
          { id: 4, text: "production of two types of spores." },
          { id: 5, text: "having two types of sporophytes." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 16. Which of the following statements regarding the responses of plants to light is correct?",
        choices: [
          {
            id: 1,
            text: "There are two major classes of photoreceptors in plants.",
          },
          {
            id: 2,
            text: "Blue light photoreceptors regulate seed germination.",
          },
          {
            id: 3,
            text: "Exposure to direct sunlight stimulates vertical growth.",
          },
          {
            id: 4,
            text:
              "Green and red are the most important colours of light for regulating photomorphogenesis.",
          },
          {
            id: 5,
            text:
              "Positive phototropism occurs due to faster elongation of cells in the brighter side of the shoot.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 17. The connective tissue that does not contain fibres under normal conditions is",
        choices: [
          { id: 1, text: "areolar tissue." },
          { id: 2, text: "adipose tissue." },
          { id: 3, text: "blood" },
          { id: 4, text: "cartilage" },
          { id: 5, text: "bone" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 18. **Select the response with the correct example for different types of feeders seen among animals , \n" +
          " Type of feeders Example",
        choices: [
          { id: 1, text: "Substrate feeders Oysters" },
          { id: 2, text: "Fluid feeders Maggots" },
          { id: 3, text: "Filter feeders Clams" },
          { id: 4, text: "Substrate feeders Aphids" },
          { id: 5, text: "Bulk feeders Humming birds" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 19. Which of the following statements regarding the digestion of nucleic acids in food in man is correct?",
        choices: [
          { id: 1, text: "It starts in the stomach." },
          {
            id: 2,
            text: "DNA is broken down to nucleotides by nucleotidase.",
          },
          {
            id: 3,
            text:
              "Nucleosidase is involved in the digestion of nitrogenous bases.",
          },
          {
            id: 4,
            text: "RNA is broken down to nucleotides by pancreatic nuclease.",
          },
          {
            id: 5,
            text: "Intestinal nucleotidase acts on nitrogenous bases.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 20. Which of the following may be a consequence of hypotension?",
        choices: [
          { id: 1, text: "Unconsciousness" },
          { id: 2, text: "Kidney damage" },
          { id: 3, text: "Internal haemorrhage" },
          { id: 4, text: "Increase in heart beat" },
          { id: 5, text: "Stroke" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 21. The cells that mediate internal defences in innate immunity in man are",
        choices: [
          { id: 1, text: "T cells and B cells." },
          { id: 2, text: "T cells and phagocytes." },
          { id: 3, text: "B cells and phagocytes." },
          { id: 4, text: "natural killer cells and T cells." },
          { id: 5, text: "natural killer cells and phagocytes." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 22. **Which of the following responses correctly indicates the main nitrogenous excretory product of the given animal group?        Animal group",
        choices: [
          {
            id: 1,
            text: "macromoleculeaasasaasalslsaslaslsalsalslalsalslas",
          },
          { id: 2, text: "organelle" },
          { id: 3, text: "cell" },
          { id: 4, text: "tissue" },
          { id: 5, text: "organ" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 23.  In humans, voluntary muscular movements are coordinated by",
        choices: [
          { id: 1, text: "thalamus" },
          { id: 2, text: "medulla oblongata." },
          { id: 3, text: "pons Varolii." },
          { id: 4, text: "cerebellum" },
          { id: 5, text: "mid-brain." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 24. Which of the following is the correct pathway of light and nerve impulses for the vision of humans?",
        choices: [
          {
            id: 1,
            text:
              "cornea -> aqueous humour ->lens -> vitreous humour -> photoreceptors -> ganglion cells —> bipolar cells -> optic nerve -> occipital lobe of cerebrum",
          },
          {
            id: 2,
            text:
              "cornea —» aqueous humour —* lens —* vitreous humour —»> photoreceptors —» ganglion cells —» bipolar cells —* optic nerve temporal lobe of cerebrum",
          },
          {
            id: 3,
            text:
              "cornea -» aqueous humour -»lens -» vitreous humour —» photoreceptors -» bipolar cells -* ganglion cells -* optic nerve —* occipital lobe of cerebrum",
          },
          {
            id: 4,
            text:
              "cornea -» vitreous humour -> lens -» aqueous humour photoreceptors —» bipolar cells -* ganglion cells-Coptic nerve-» occipital lobe of cerebrum",
          },
          {
            id: 5,
            text:
              "cornea -*• vitreous humour -*lens aqueous humour -> photoreceptors -» bipolar cells -» ganglion cells—» optic nerve —* temporal lobe of cerebrum",
          },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 25. In which of the following responses, the hormone and its main function are correctly matched?",
        choices: [
          { id: 1, text: "Melatonin - Regulating biological rhythms" },
          { id: 2, text: "Thymosin - Regulating innate immunity" },
          { id: 3, text: "Adrenalin - Decreasing the metabolic rate" },
          { id: 4, text: "Oxytocin - Stimulating milk production" },
          {
            id: 5,
            text: "Parathyroid hormone - Lowering blood calcium level",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 26. In spermatogenesis of man, reduction of chromosome number from diploid to haploid occurs during the production of",
        choices: [
          { id: 1, text: "sperms from spermatids." },
          { id: 2, text: "spermatids from secondary spermatocytes." },
          {
            id: 3,
            text: "secondary spermatocytes from primary spermatocytes.",
          },
          { id: 4, text: "spermatogonia from primordial germ cells." },
          { id: 5, text: "primary spermatocytes from spermatogonia." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 27. **This question is based on the following figure which shows the levels of hormones secreted by the anterior pituitary and ovary in blood during the normal reproductive cycle of mature human females. The hormones indicated as A, B, C and D are respectively",
        choices: [
          { id: 1, text: "FSH, LH, estradiol and progesterone." },
          { id: 2, text: "LH, progesterone, estradiol and FSH." },
          { id: 3, text: "estradiol, LH, FSH and progesterone." },
          { id: 4, text: "LH, estradiol, progesterone and FSH." },
          { id: 5, text: "FSH, LH, progesterone and estradiol." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 28. Select the correct statement regarding human skeletal system.",
        choices: [
          {
            id: 1,
            text:
              "Elbow joint formed by humerus, radius and ulna permits only flexion and extension of the fore arm.",
          },
          {
            id: 2,
            text:
              "Hinge joint formed by femur, fibula and patella permits standing upright for a long time.",
          },
          {
            id: 3,
            text:
              "Arches of the foot are important in distributing body weight only while standing.",
          },
          {
            id: 4,
            text:
              "Secondary curvatures in the thoracic and sacral regions of the vertebral column help to maintain erect posture.",
          },
          {
            id: 5,
            text:
              "A non-inflammatory degenerative disease called osteoporosis causes pain and restricted movement       in the affected joints.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 29. In man, sickle cell anaemia is an example for",
        choices: [
          { id: 1, text: "heterozygous dominance." },
          { id: 2, text: "polygenic inheritance." },
          { id: 3, text: "epistasis" },
          { id: 4, text: "pleiotropy" },
          { id: 5, text: "epigenetics" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 30. Which of the following statements regarding the cross Rr x Rr is correct?",
        choices: [
          {
            id: 1,
            text:
              "The probability of having the allele r in both the egg and sperm at fertilization is 1/2",
          },
          {
            id: 2,
            text: "This is a dihybrid cross because two alleles are involved.",
          },
          {
            id: 3,
            text:
              "According to Mendelian inheritance, the probability of having dominant phenotype in F2 generation by interbreeding of F1, is 9/16",
          },
          {
            id: 4,
            text:
              "If 1:2:1 ratio of phenotypes was obtained in F2 generation by interbreeding of F1, generation, it may be due to codominance.",
          },
          { id: 5, text: "R and r are linked." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 31. During the gametogenesis of a particular person, a gamete with 24 chromosomes was produced.       This gamete was fertilized with a normal gamete and a child was born. Which of the following best explains this process and its result?",
        choices: [
          { id: 1, text: "Aneuploidy, trisomy, Down syndrome" },
          { id: 2, text: "Polyploidy, trisomy, Klinefelter syndrome" },
          { id: 3, text: "Aneuploidy, monosomy, Down syndrome" },
          { id: 4, text: "Aneuploidy, monosomy, Klinefelter syndrome" },
          { id: 5, text: "Polyploidy, trisomy, Down syndrome" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 32. During replication of DNA, a cytosine molecule had been added instead of a thymine molecule  in a gene. This mutated gene produced a peptide with the same amino acid sequence as the gene before mutation. This is an example for",
        choices: [
          { id: 1, text: "insertion and nonsense mutation." },
          { id: 2, text: "substitution and silent mutation." },
          { id: 3, text: "insertion and silent mutation." },
          { id: 4, text: "substitution and missense mutation." },
          { id: 5, text: "insertion and missense mutation." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 33. DNA polymerase obtained from thermophilic bacteria is used for PCR because",
        choices: [
          {
            id: 1,
            text: "they contain more DNA polymerase than other organisms.",
          },
          {
            id: 2,
            text: "that DNA polymerase does not have proofreading ability.",
          },
          {
            id: 3,
            text:
              "that DNA polymerase is stable at high temperatures required for separation of DNA strands in the laboratory.",
          },
          {
            id: 4,
            text:
              "it is the only DNA polymerase which can copy DNA in the laboratory.",
          },
          {
            id: 5,
            text:
              "that DNA polymerase does not need a primer to initiate DNA synthesis.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 34. A DNA fragment can be inserted in to a plasmid vector if that fragment has",
        choices: [
          {
            id: 1,
            text: "a nucleotide sequence identical to that of the vector.",
          },
          {
            id: 2,
            text:
              "been cut by the same restriction enzyme which had been used to cut the vector.",
          },
          {
            id: 3,
            text: "originated from the same cell type as of the vector.",
          },
          { id: 4, text: "the same length as that of the vector." },
          { id: 5, text: "at least one origin of replication (Ori)." },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 35. Dry patana grasslands in Sri Lanka are found in",
        choices: [
          { id: 1, text: "intermediate and wet zones." },
          { id: 2, text: "dry and intermediate zones" },
          { id: 3, text: "dry and arid zones." },
          { id: 4, text: "dry, intermediate and wet zones." },
          { id: 5, text: "arid, dry and intermediate zones." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 36. Which of the following is not an environmental service value of biodiversity?",
        choices: [
          { id: 1, text: "Regulating climate" },
          { id: 2, text: "Recharging ground water" },
          { id: 3, text: "Water purification" },
          { id: 4, text: "Helping disaster management" },
          { id: 5, text: "Prevention of soil erosion" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 37. Which of the following does not contribute to global warming?",
        choices: [
          { id: 1, text: "Depletion of ozone layer" },
          { id: 2, text: "Cattle farming" },
          { id: 3, text: "Ozone in the lower atmosphere" },
          { id: 4, text: "Growth of phytoplankton" },
          { id: 5, text: "Water vapour in the atmosphere" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 38. Which of the following statements is correct regarding the culture media used to grow microbes in the laboratory?",
        choices: [
          {
            id: 1,
            text:
              "Agar in culture media provides the suitable pH range for the growth of microorganisms.",
          },
          {
            id: 2,
            text:
              "Glucose is generally used to prepare culture media to grow fungi.",
          },
          {
            id: 3,
            text: "Culture media for bacteria are prepared using potatoes.",
          },
          {
            id: 4,
            text: "Any microorganism can be cultured in a culture medium.",
          },
          {
            id: 5,
            text: "Sodium chloride is usually added to all culture media.",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 39. Coliform bacteria were detected in a water sample obtained from a river. Drinking untreated water from this river may not likely to cause",
        choices: [
          { id: 1, text: "typhoid" },
          { id: 2, text: "cholera" },
          { id: 3, text: "dysentery" },
          { id: 4, text: "paratyphoid" },
          { id: 5, text: "tetanus" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 40. For each of the questions 41 to 50 one or more of the responses is/are correct. Decide which response/responses is/are correct and then select the correct number \n" +
          " If only A, B and D are correct 1 \n" +
          " If only A, C and D are correct 2 \n" +
          " If only A and B are correct 3 \n" +
          " If only C and D are correct 4 \n" +
          " If any other response or combination of responses is correct 5 \n" +
          " Directions summarised 1 2 3 4 5 \n" +
          " A,B,Dcorrect.A,C,Dcorrect.A,Bcorrect.C,Dcorrect.Any other response or combination of responses correct.\n" +
          "Which of the following statements regarding energy relations in organisms is/are correct?",
        choices: [
          {
            id: 1,
            text:
              "(A) In cellular respiration, photophosphorylation and oxidative phosphorylation occur.",
          },
          {
            id: 2,
            text: "(B) During metabolic reactions, ATP oxidises to ADP.",
          },
          {
            id: 3,
            text:
              "(C) Energy stored in ATP can be converted to electrical energy.",
          },
          {
            id: 4,
            text: "(D) Substrate phosphorylation occurs in Krebs cycle.",
          },
          { id: 5, text: "(E) All metabolic reactions release energy." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 41. Which of the following classes includes/include animals having internal fertilization as well as those having external fertilization?",
        choices: [
          { id: 1, text: "Osteichthyes" },
          { id: 2, text: "Amphibia" },
          { id: 3, text: "Reptilia" },
          { id: 4, text: "Chondrichthyes" },
          { id: 5, text: "Aves" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 42. Select the correct statement/statements regarding the respiratory pigments of animals.",
        choices: [
          { id: 1, text: "Myoglobin is present in bony fishes." },
          { id: 2, text: "Haemoglobin is present in mollusks." },
          { id: 3, text: "Chlorocruorin is present in annelids." },
          { id: 4, text: "Haemerythrin is present in annelids." },
          { id: 5, text: "Haemocyanin is present in reptiles." },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 43. Smoking",
        choices: [
          {
            id: 1,
            text:
              "stimulates the secretion of mucus by goblet cells in the respiratory tract.",
          },
          { id: 2, text: "causes tuberculosis." },
          { id: 3, text: "decreases the oxygen transport in blood." },
          {
            id: 4,
            text: "inhibits the action of cilia in the respiratory tract.",
          },
          { id: 5, text: "reduces heart beat." },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 44. Which of the following contributes/contribute for the maintenance of resting potential of a neuron?",
        choices: [
          {
            id: 1,
            text:
              "Unequal distribution of Na+, K+, Cl- and large anions inside and outside the neuron",
          },
          {
            id: 2,
            text:
              "Active transport of Na+ out of the neuron and K+ in to the neuron in 3:2 ratio",
          },
          {
            id: 3,
            text:
              "Opening of more K+ channels than Na+ channels in the neuron membrane",
          },
          {
            id: 4,
            text:
              "Transport of more Na+ in to the intracellular fluid of the neuron than K+",
          },
          {
            id: 5,
            text: "Transport of Cl” from the neuron to the extracellular fluid",
          },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 45. Parthenogenesis",
        choices: [
          {
            id: 1,
            text: "produces a complete individual from an unfertilized egg.",
          },
          { id: 2, text: "produces female honey bees." },
          { id: 3, text: "can be observed in some lizards." },
          { id: 4, text: "forms only diploid progeny." },
          { id: 5, text: "can be seen in all invertebrates." },
        ],
        correctAnswer: 5,
      },

      {
        title:
          "## 46. Which of the following combinations is/are correct regarding the skeletons of animals? Skeleton Example",
        choices: [
          { id: 1, text: "Coelom Annelids" },
          { id: 2, text: "Pseudocoelom Cnidarians" },
          { id: 3, text: "Calcium carbonate plates Echinoderms" },
          { id: 4, text: "Bony plates Reptiles" },
          { id: 5, text: "Gastrovascular cavity Nematodes" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 47. In which of the following responses, the biomes that are encountered when traveling from the north pole towards equator are given in correct sequence?",
        choices: [
          {
            id: 1,
            text:
              "Tundra, coniferous forests, temperate grasslands, deserts, tropical forests",
          },
          {
            id: 2,
            text:
              "Tundra, coniferous forests, temperate broad-leaf forests, chaparral, deserts",
          },
          {
            id: 3,
            text:
              "Tundra, temperate grasslands, coniferous forests, deserts, tropical forests",
          },
          {
            id: 4,
            text:
              "Tundra, temperate broad-leaf forests, coniferous forests, tropical forests, deserts",
          },
          {
            id: 5,
            text:
              "Tundra, coniferous forests, chaparral, temperate grasslands, savanna",
          },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 48. Select the correct combination/combinations with respect to the use of microbes in industries. Product Microorganism used in the production",
        choices: [
          { id: 1, text: "Yoghurt Lactobacillus bulgaricus" },
          { id: 2, text: "Vinegar Gluconobacter sp." },
          { id: 3, text: "Citric acid Spirulina sp." },
          { id: 4, text: "Lipase Rhizopus sp." },
          { id: 5, text: "Vitamin C Aspergillus oryzae" },
        ],
        correctAnswer: 5,
      },
      {
        title:
          "## 49. Which of the following statements is/are correct regarding spoilage of food?",
        choices: [
          {
            id: 1,
            text:
              "Saccharolytic microorganisms are responsible for rancidity of food.",
          },
          {
            id: 2,
            text: "Putrefaction occurs mainly due to breakdown of proteins.",
          },
          {
            id: 3,
            text:
              "Lipolytic microorganisms are responsible for fermentation of food.",
          },
          { id: 4, text: "Acids are formed during fermentation." },
          { id: 5, text: "Rancidity occurs due to generation of amines" },
        ],
        correctAnswer: 5,
      },
      {
        title: "## 1. Some nucleotides",
        choices: [
          { id: 1, text: "contain hexose sugars" },
          { id: 2, text: "act as organic cofactors" },
          { id: 3, text: "serve as enzymes" },
          { id: 4, text: "act as oxygen carriers." },
          { id: 5, text: "serve as food reserves." },
        ],
        correctAnswer: 5,
      },
    ],
  },
};
export default data;
