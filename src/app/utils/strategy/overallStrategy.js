function overallZag(skills) {
  const speedWeight = 0.1
  const kickWeight = 0.1
  const passWeight = 0.15
  const dribbleWeight = 0.15
  const defenseWeight = 0.5

  const overall = Math.round(skills.speed * speedWeight + 
    skills.kick * kickWeight + skills.pass * passWeight +
    skills.dribble * dribbleWeight + skills.defense * defenseWeight);
  
  return overall;
}

function overallMei(skills) {
  const speedWeight = 0.2
  const kickWeight = 0.15
  const passWeight = 0.35
  const dribbleWeight = 0.2
  const defenseWeight = 0.1

  const overall = Math.round(skills.speed * speedWeight + 
    skills.kick * kickWeight + skills.pass * passWeight +
    skills.dribble * dribbleWeight + skills.defense * defenseWeight);
  
  return overall;
}

function overallAta(skills) {
  const speedWeight = 0.3
  const kickWeight = 0.25
  const passWeight = 0.1
  const dribbleWeight = 0.25
  const defenseWeight = 0.1

  const overall = Math.round(skills.speed * speedWeight + 
    skills.kick * kickWeight + skills.pass * passWeight +
    skills.dribble * dribbleWeight + skills.defense * defenseWeight);
  
  return overall;
}

module.exports["zag"] = overallZag;
module.exports["mei"] = overallMei;
module.exports["ata"] = overallAta;