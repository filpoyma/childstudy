export const dinamicBackLight = (
  timeline,
  playedTime,
  isAudioEnd,
  index,
  answersAmount,
  propsIsDisabled,
  styleOpt
) => {

  if (timeline && timeline.length > index && timeline[index] !== null) {
    if (playedTime > timeline[index] && playedTime < timeline[index] + 0.9)
      styleOpt.className += ' answerOptionBacklight';
    else styleOpt.className = 'answerOption';
  }

  if (isAudioEnd) styleOpt.isDisabled = false;
  else styleOpt.className += ' answerOptionNoHover'; // невозможность нажатия

  if (propsIsDisabled) {
    styleOpt.className += ' answerOptionDisabled'; //мутная картинка
    styleOpt.isDisabled = true;
  }
  if (answersAmount > 4) styleOpt.className += ' answerOptonFlex4Row';
};
