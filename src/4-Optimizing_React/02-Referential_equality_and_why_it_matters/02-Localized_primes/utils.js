const isPrime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const ordinals = {
  "en-US": {
    pluralRules: new Intl.PluralRules("en-US", { type: "ordinal" }),
    suffixes: new Map([
      ["one", "st"],
      ["two", "nd"],
      ["few", "rd"],
      ["other", "th"],
    ]),
  },
  "es-ES": {
    pluralRules: new Intl.PluralRules("es-ES", { type: "ordinal" }),
    suffixes: new Map([
      ["one", ""],
      ["two", ""],
      ["few", ""],
      ["other", ""],
    ]),
  },
};

export const calculatePrime = (n) => {
  const primes = [];
  let i = 2;
  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes[n - 1];
};

export const translations = {
  "en-US": {
    nextPrime: "Next Prime",
    nthPrime: (count, nthprime) => `The ${count} prime is ${nthprime}.`,
  },
  "es-ES": {
    nextPrime: "Siguiente primo",
    nthPrime: (count, nthprime) => `El ${count}º número primo es ${nthprime}.`,
  },
};

export const formatNumberToString = (n, locale) => {
  const rule = ordinals[locale].pluralRules.select(n);
  const suffix = ordinals[locale].suffixes.get(rule);
  return `${n}${suffix}`;
};
