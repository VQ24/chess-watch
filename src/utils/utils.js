export function oppositeColor(color) {
  if (color === 'white') {
    return 'black'
  }
  if (color === 'black') {
    return 'white'
  }
}

export function getLoser (gameType, whiteTime, blackTime, whiteTurnTime, blackTurnTime) {
  switch (gameType) {
    case 'STANDART': {
      if (whiteTime <= 0) {
        return 'white'
      }
      if (blackTime <= 0) {
        return 'black'
      } break;
    }
    case 'STANDART_TURN_LIMIT': {
      if (whiteTime <= 0 || whiteTurnTime <= 0) {
        return 'white'
      }
      if (blackTime <= 0 || blackTurnTime <= 0) {
        return 'black'
      } break;
    }
    case 'TURN_LIMIT': {
      if (whiteTurnTime <= 0) {
        return 'white'
      }
      if (blackTurnTime <= 0) {
        return 'black'
      } break;
    }
    default: return;
  }
}

export function timeStr (time, allwaysShowMinutes = false, showDeciSeconds = true) {
  const hours = Math.trunc(time / (1000 * 60 * 60));
  const minutes = Math.trunc(time / (1000 * 60)) - (hours * 60);
  const seconds = Math.trunc(time / (1000)) - (minutes * 60) - (hours * 60 * 60);
  const deciSeconds = Math.round((time % 1000)/10)
  const showHours = hours > 0;
  const showMinutes = hours > 0 || minutes > 0;
  const getStr = (t) => t < 10 ? `0${t}` : t;
  return `${
    showHours ? hours : ''
  } ${
    showHours ? ':' : ''
  } ${
    showMinutes || allwaysShowMinutes ? getStr(minutes) : ''
  } ${
    showMinutes || allwaysShowMinutes ? ':' : ''
  } ${
    getStr(seconds)
  } ${
    (!showMinutes && showDeciSeconds) ? ':' : ''
  } ${
    (!showMinutes && showDeciSeconds) ? getStr(deciSeconds) : ''
  }`
} 

export function setingsAreValid (settings) {
  const validGameTime = isStandartGameType(settings) ? Number(settings.gameTime) > 0 : true;
  const timePermoveIsEnabled = settings.turnLimit.enable;
  const validTimePerMove = Number(settings.turnLimit.limitTime) > 0;
  const timePerMoveIsLessThanGameTime = isStandartGameType(settings) ? Number(settings.turnLimit.limitTime) <= Number(settings.gameTime) : true;
  return timePermoveIsEnabled
    ? validGameTime && validTimePerMove && timePerMoveIsLessThanGameTime
    : validGameTime;
}

export function isStandartGameType (settings) {
  const onlyLimitedTimePerTurn = settings.turnLimit.enable && !settings.turnLimit.extractFromGameTime
  return !onlyLimitedTimePerTurn;
}

export function getPercent(part, whole, fractionalPartLength = 0) {
  const accuracyMultiplier = Math.pow(10, fractionalPartLength);
  const percent = (part / whole) * 100;
  return Math.round(percent * accuracyMultiplier) / accuracyMultiplier
}

export function gameType(turnLimit) {
  if (turnLimit.enable && turnLimit.extractFromGameTime) {
    return 'STANDART_TURN_LIMIT';
  }
  if (turnLimit.enable && !turnLimit.extractFromGameTime) {
    return 'TURN_LIMIT';
  }
  return 'STANDART';
}

export function capitalizeFirstLetter (str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function getLanguage (useEnglish) {
   return useEnglish ? 'EN' : 'RU'
 }
