    function computerPlay() {
    items = ['rock', 'scissors', 'paper']
    element = Math.floor(Math.random() * items.length)
    return items[element]
  } 
  
  function playRound(playerSelection, computerSelection) { //라운드 진행
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'win';
    } 
    
    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
      return 'lose';
    } 
    else {
      return 'tie';
    } 
  }
  
  function countScore(userScore, computerScore) { //스코어를 카운트하여 표시
    if(userScore > computerScore) {
      resultBoard.textContent = `당신이 이겼습니다. 유저: ${userScore} - 컴퓨터: ${computerScore}`;
    }
    else {
      resultBoard.textContent = `컴퓨터가 이겼습니다. 유저: ${userScore} - 컴퓨터: ${computerScore}`;
    }
  }
  
  function checkScore(user, computer) { //5점에 도달했을 시 승자 선언
    if (user >= 5 || computer >= 5) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function reset() { //리셋버튼 함수
    userScore = 0;
    computerScore = 0;
    userScoreBoard.textContent = userScore;
    computerScoreBoard.textContent = computerScore;
    roundResult.textContent = "게임 시작";
  }

    const rspBox = document.querySelector("#rspBoxes");
    const rspItem = document.querySelectorAll(".rspItem");
    const rsButton = document.querySelector("#resetButton");
    let userSelect = '';
    let computerSelect = '';
    let result = '';
    let roundResult = '';
    let userScore = '0';
    let computerScore = '0';
    let userScoreBoard = '';
    let computerScoreBoard = '';

    rsButton.addEventListener('click', () => {
        reset();
        rspBox.style.display = 'flex';
    })

    rspItem.forEach((button) => { //노드 그룹에 이벤트 리스너 추가하기
        button.addEventListener('click', (e) => {
            userSelect = button.getAttribute('id');
            computerSelect = computerPlay();
            result = playRound(userSelect, computerSelect);
            roundResult = document.querySelector("#roundResult");
            
            if(result === 'win') {
                roundResult.textContent = "당신이 이겼습니다.";
                userScoreBoard = document.querySelector("#userScore");
                userScore = Number(userScore) + 1;
                userScoreBoard.textContent = userScore;
                console.log(userScore);
            }

            else if(result === 'lose') {
                roundResult.textContent = "컴퓨터가 이겼습니다.";
                computerScoreBoard = document.querySelector("#computerScore");
                computerScore = Number(computerScore) + 1;
                computerScoreBoard.textContent = computerScore;
                console.log(userScore);
            }

            else if(result === 'tie') {
                roundResult.textContent = "비겼습니다.";
                console.log(userScore);
            }

            if(checkScore(userScore, computerScore)) { // 5점 도달시 승자 선언
                if(userScore>computerScore) {
                    roundResult.textContent = "당신이 최종 우승입니다!";
                }
                else {
                    roundResult.textContent = "컴퓨터가 최종 우승입니다..";
                }
                rspBox.style.display = 'none';            
            }
        })
    })