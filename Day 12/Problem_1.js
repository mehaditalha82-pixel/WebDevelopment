function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
    if(teamAGoals === teamBGoals) return "Draw";
    return teamAGoals > teamBGoals ? "Team A Won" : "Team B Won";
}


