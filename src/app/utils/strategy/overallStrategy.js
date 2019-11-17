function overallZag(habilits) {
  const paceWeight = 0.1
  const shootingWeight = 0.1
  const passingWeight = 0.15
  const dribblingWeight = 0.15
  const defenseWeight = 0.5

  // const overall = int(round(habilits.pace * paceWeight + 
  //   habilits.shooting * shootingWeight + habilits.passing * passingWeight +
  //   habilits.dribbling * dribblingWeight + habilits.defending * defenseWeight + 
  //   habilits.physical * physicalWeight))
  return 10;
}

function overallMei(habilit) {
  const paceWeight = 0.2
  const shootingWeight = 0.15
  const passingWeight = 0.35
  const dribblingWeight = 0.2
  const defenseWeight = 0.1

  return 5;
}

function overallAta(habilit) {
  const paceWeight = 0.3
  const shootingWeight = 0.25
  const passingWeight = 0.1
  const dribblingWeight = 0.25
  const defenseWeight = 0.1

  return 15;
}

module.exports["zag"] = overallZag;
module.exports["mei"] = overallMei;
module.exports["ata"] = overallAta;