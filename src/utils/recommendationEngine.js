/**
 * TimeTravel Agency — Recommendation Engine
 * Scores each destination based on quiz answers using a weighted matrix.
 */

const SCORING_MATRIX = {
  // Question 1: type of experience
  q1: {
    culture: { 'paris-1889': 3, 'cretaceous': 0, 'florence-1504': 2 },
    adventure: { 'paris-1889': 0, 'cretaceous': 3, 'florence-1504': 0 },
    elegance: { 'paris-1889': 2, 'cretaceous': 0, 'florence-1504': 3 },
  },
  // Question 2: historical period
  q2: {
    modern: { 'paris-1889': 3, 'cretaceous': 0, 'florence-1504': 0 },
    ancient: { 'paris-1889': 0, 'cretaceous': 3, 'florence-1504': 0 },
    renaissance: { 'paris-1889': 0, 'cretaceous': 0, 'florence-1504': 3 },
  },
  // Question 3: environment
  q3: {
    city: { 'paris-1889': 3, 'cretaceous': 0, 'florence-1504': 1 },
    nature: { 'paris-1889': 0, 'cretaceous': 3, 'florence-1504': 0 },
    museum: { 'paris-1889': 1, 'cretaceous': 0, 'florence-1504': 3 },
  },
  // Question 4: ideal activity
  q4: {
    monuments: { 'paris-1889': 3, 'cretaceous': 0, 'florence-1504': 1 },
    wildlife: { 'paris-1889': 0, 'cretaceous': 3, 'florence-1504': 0 },
    galleries: { 'paris-1889': 1, 'cretaceous': 0, 'florence-1504': 3 },
  },
}

const EXPLANATIONS = {
  'paris-1889': {
    title: 'Paris 1889',
    subtitle: 'Belle Époque',
    reason:
      "Votre profil révèle une âme éprise d'élégance urbaine et de culture moderne. Paris 1889 est votre odyssée — l'apogée du génie humain condensé dans une ville en pleine ébullition créative. Vous y côtoierez Gustave Eiffel, les Impressionnistes, et l'effervescence d'une époque qui a redéfini la modernité.",
  },
  cretaceous: {
    title: 'Crétacé Supérieur',
    subtitle: '−65 millions d\'années',
    reason:
      "Votre esprit d'aventure et votre fascination pour le monde sauvage vous destinent à l'expédition la plus audacieuse de notre catalogue. Le Crétacé vous offrira ce qu'aucun humain n'a jamais contemplé : une Terre vierge, brutale et magnifique, dominée par des créatures qui défient l'imagination.",
  },
  'florence-1504': {
    title: 'Florence 1504',
    subtitle: 'Renaissance Italienne',
    reason:
      "Votre sensibilité artistique et votre quête de raffinement intellectuel trouvent leur accomplissement dans la Florence des Médicis. Vous respirerez l'air du génie créatif le plus dense jamais concentré en un lieu et une époque — Michel-Ange, Léonard, Raphaël, tous à portée de conversation.",
  },
}

export function getRecommendation(answers) {
  const scores = {
    'paris-1889': 0,
    'cretaceous': 0,
    'florence-1504': 0,
  }

  Object.entries(answers).forEach(([question, answer]) => {
    const matrix = SCORING_MATRIX[question]
    if (matrix && matrix[answer]) {
      Object.entries(matrix[answer]).forEach(([dest, score]) => {
        scores[dest] += score
      })
    }
  })

  const winner = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0]

  return {
    destinationId: winner,
    scores,
    explanation: EXPLANATIONS[winner],
  }
}
